import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiResponse } from "../utils/apiResponse.js";
import { OwnerOrder } from "../models/ownerOrder.model.js";
import { User } from "../models/user.model.js";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET);
const userOrder = asyncHandler(async (req, res) => {
  let data = req.body.order_data;
  await data.splice(0, 0, { Order_date: req.body.order_date });
  // console.log("1231242343242354",req.body.email)
  const email = req.body.email;
  const totalPoints = req.body.totalPoints;
  const user = await User.findOne({ email });
  user.points = totalPoints;

  //if email not exisitng in db then create: else: InsertMany()
  await user.save();
  let eId = await OwnerOrder.findOne({ email: req.body.email });
  // console.log(eId)
  if (eId === null) {
    try {
      // console.log(data)
      // console.log("1231242343242354",req.body.email)
      await OwnerOrder.create({
        email: req.body.email,
        order_data: [data],
      }).then(() => {
        res.json({
          statusCode: 201,
          success: true,
        });
      });
    } catch (error) {
      // console.log(error.message)
      res.send("Server Error", error.message);
    }
  } else {
    try {
      await OwnerOrder.findOneAndUpdate(
        { email: req.body.email },
        { $push: { order_data: data } }
      ).then(() => {
        res.json({
          statusCode: 201,
          success: true,
        });
      });
    } catch (error) {
      // console.log(error.message)
      res.send("Server Error", error.message);
    }
  }
});

const userPayment = async (req, res) => {
  // console.log(req.body)
  const totalPrice = req.body.price.totalPriceAfterDiscount;
  // console.log(totalPrice)
  try {
    // Create a Stripe session with a single line item
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: "Your Product Name",
              // Add more product data as needed
            },
            unit_amount: totalPrice * 100, // Amount in cents
          },
          quantity: 1, // Assuming quantity is 1 for now
        },
      ],
      mode: "payment",
      success_url: "http://localhost:5173/paymentsuccess",
      cancel_url: "http://localhost:5173/paymentfailure",
    });

    res.json({ id: session.id });
  } catch (error) {
    console.error("Error creating session:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const allOrders = async (req, res) => {
  // console.log(req.body.email);
  let eId = await OwnerOrder.findOne({ email: req.body.email });
  // console.log(eId);
  res.json({ orderData: eId });
};

const addPoints = async (req, res) => {
  const email = req.body.email;
  const points = req.body.points;
  const user = await User.findOne({ email });

  let totalPoints = user.points + points;
  let discount = 0;
  if (totalPoints >= 50) {
    discount = 50;
    totalPoints = totalPoints - 50;
  }

  try {
    res.status(200).json({
      success: true,
      discount,
      totalPoints,
    });
  } catch (error) {
    res.status(500).send("Error updating points.");
  }
};

const displayPoints = async (req, res) => {
  // console.log(req.body);
  const email = req.body.email;
  const user = await User.findOne({ email });
  // console.log(user)
  if (!user) {
    res.json({
      success: false,
      statusCode: 404,
      message: "Please Login first",
    });
  }

  try {
    res.send({
      success: true,
      user,
    });
  } catch (error) {
    res.send({
      success: false,
      statusCode: 401,
      message: error.message,
    });
  }
};
export { userOrder, allOrders, userPayment, addPoints, displayPoints };
