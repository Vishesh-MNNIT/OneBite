import React, { useState } from "react";
import { MdDelete } from "react-icons/md";
import { loadStripe } from "@stripe/stripe-js";
import { useCart, useDispatchCart } from "../components/ContextReducer";

export default function Cart() {
  const data = useCart();
  const dispatch = useDispatchCart();
  const [totalPrice, setTotalPrice] = useState(0);
  const [discount, setDiscount] = useState(0);
  const userEmail = localStorage.getItem("userEmail");
  let totalPoints = 0;
  const handleDiscount = async (totalPrice) => {
    let points = 0;
    if (totalPrice < 500) {
      points = 0;
    } else if (totalPrice >= 500 && totalPrice < 1000) {
      points = 15;
    } else {
      points = 25;
    }

    const addPoints = await fetch(
      "http://localhost:3000/api/v1/user/addPoints",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: userEmail,
          points: points,
        }),
      }
    );
    const response = await addPoints.json();
    const discountValue = response.discount;
    setDiscount(discountValue);
    totalPoints = await response.totalPoints;
    // Calculate discounted total price
    const totalPriceAfterDiscount = totalPrice - discountValue;
    return totalPriceAfterDiscount;
  };

  const handleCheckOut = async () => {
    const totalPriceAfterDiscount = await handleDiscount(totalPrice);

    // Here goes your checkout logic with the discounted total price
    let response = await fetch("http://localhost:3000/api/v1/user/myOrder", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        order_data: data,
        email: userEmail,
        totalPoints: totalPoints,
        order_date: new Date().toDateString(),
      }),
    });

    const res = await fetch("http://localhost:3000/api/v1/user/payment", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        price: { totalPriceAfterDiscount },
      }),
    });

    const sessionResponse = await res.json();
    const sessionId = sessionResponse.id;

    // Load Stripe instance
    const stripe = await loadStripe(
      "pk_test_51OuMCKSIxP2dHWkVvhRaw2v9laTswsRoUskdxCZ6AVx9aP0S9bZTpIXf2tbR9qiOkvdkl2lNXDA7SQ7mwoSKvlKI00Lbfoyg6U"
    );

    // Redirect to Checkout with session ID
    const { error } = await stripe.redirectToCheckout({
      sessionId: sessionId,
    });
    if (response.status === 200) {
      dispatch({ type: "DROP" });
    }
  };

  // Calculate total price
  const calculateTotalPrice = () => {
    const total = data.reduce((acc, food) => acc + food.qty * food.price, 0);
    setTotalPrice(total);
  };

  // Calculate total price on component mount and when data changes
  React.useEffect(() => {
    calculateTotalPrice();
  }, [data]);

  if (data.length === 0) {
    return (
      <div>
        <div className="m-5 w-100 text-center fs-3">The Cart is Empty!</div>
      </div>
    );
  }

  return (
    <div>
      <div className="container m-auto mt-5 table-responsive table-responsive-sm table-responsive-md">
        <table className="table table-hover ">
          <thead className=" text-success fs-4">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Quantity</th>
              <th scope="col">Amount</th>
              <th scope="col">Total Price</th>
              <th scope="col">ShopName</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {data.map((food, index) => (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>{food.name}</td>
                <td>{food.qty}</td>
                <td>{food.price}</td>
                <td>{food.price * food.qty}</td>
                <td>{food.shopName}</td>
                <td>
                  <MdDelete
                    onClick={() => {
                      dispatch({ type: "REMOVE", index: index });
                    }}
                  >
                    Delete
                  </MdDelete>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div>
          <h1 className="fs-2">Total Price: {totalPrice}/-</h1>
        </div>
        <div>
          <h1 className="fs-2">Discount: {discount}/-</h1>
        </div>
        <div>
          <h1 className="fs-2">
            Total Price after Discount: {totalPrice - discount}/-
          </h1>
        </div>
        <div>
          <button
            className="btn bg-success mt-5"
            onClick={() => handleDiscount(totalPrice)}
          >
            Check Discount
          </button>
        </div>
        <div>
          <button className="btn bg-success mt-5" onClick={handleCheckOut}>
            Check Out
          </button>
        </div>
      </div>
    </div>
  );
}
