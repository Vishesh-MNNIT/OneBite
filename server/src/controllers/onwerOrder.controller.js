import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiResponse } from "../utils/apiResponse.js";
import { OwnerOrder } from "../models/ownerOrder.model.js";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET);
const userOrder = asyncHandler(async (req, res) => {

  let data = req.body.order_data
    await data.splice(0,0,{Order_date:req.body.order_date})
    console.log("1231242343242354",req.body.email)

    //if email not exisitng in db then create: else: InsertMany()
    let eId = await OwnerOrder.findOne({ 'email': req.body.email })    
    console.log(eId)
    if (eId===null) {
        try {
            console.log(data)
            console.log("1231242343242354",req.body.email)
            await OwnerOrder.create({
                email: req.body.email,
                order_data:[data]
            }).then(() => {
                res.json({ 
                    statusCode: 201,
                    success: true 
                })
            })
        } catch (error) {
            console.log(error.message)
            res.send("Server Error", error.message)

        }
    }

    else {
        try {
            await OwnerOrder.findOneAndUpdate({email:req.body.email},
                { $push:{order_data: data} }).then(() => {
                    res.json({ 
                    statusCode: 201,
                    success: true 
                })
                })
        } catch (error) {
            console.log(error.message)
            res.send("Server Error", error.message)
        }
    }
});

const userPayment = async (req, res) => {
    const totalPrice = req.body.price.totalPrice;
    console.log(totalPrice)
    try {
        // Create a Stripe session with a single line item
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ["card"],
            line_items: [{
                price_data: {
                    currency: "usd",
                    product_data: {
                        name: "Your Product Name",
                        // Add more product data as needed
                    },
                    unit_amount: totalPrice * 100, // Amount in cents
                },
                quantity: 1, // Assuming quantity is 1 for now
            }],
            mode: "payment",
            success_url: "https://www.google.com/",
            cancel_url: "https://www.facebook.com/",
        });

        res.json({ id: session.id });
    } catch (error) {
        console.error("Error creating session:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};


const allOrders = async(req,res)=>{
    // console.log(req.body.email);
    let eId = await OwnerOrder.findOne({ 'email': req.body.email })
    console.log(eId);
    res.json({orderData:eId})
}
export {userOrder,allOrders,userPayment};