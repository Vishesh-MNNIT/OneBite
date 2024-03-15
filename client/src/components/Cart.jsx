import React from 'react'
// import Delete from '@material-ui/icons/Delete'
import { MdDelete } from "react-icons/md";
import { useCart, useDispatchCart } from '../components/ContextReducer';
import {loadStripe} from '@stripe/stripe-js'
export default function Cart() {
  let data = useCart();
  let dispatch = useDispatchCart();
  if (data.length === 0) {
    return (
      <div>
        <div className='m-5 w-100 text-center fs-3'>The Cart is Empty!</div>
      </div>
    )
  }
  // const handleRemove = (index)=>{
  //   console.log(index)
  //   dispatch({type:"REMOVE",index:index})
  // }

  const handleCheckOut = async () => {
    let userEmail = localStorage.getItem("userEmail");
    let response = await fetch("http://localhost:3000/api/v1/user/myOrder", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        order_data: data,
        email: userEmail,
        order_date: new Date().toDateString()
      })
    });
    
    const res = await fetch("http://localhost:3000/api/v1/user/payment",{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        price: {totalPrice}
      })
    })
    const sessionResponse = await res.json();
  const sessionId = sessionResponse.id;

  // Load Stripe instance
  const stripe = await loadStripe("pk_test_51OuMCKSIxP2dHWkVvhRaw2v9laTswsRoUskdxCZ6AVx9aP0S9bZTpIXf2tbR9qiOkvdkl2lNXDA7SQ7mwoSKvlKI00Lbfoyg6U");

  // Redirect to Checkout with session ID
  const { error } = await stripe.redirectToCheckout({
    sessionId: sessionId
  });
    if (response.status === 200) {
      dispatch({ type: "DROP" })
    }
  }

let totalPrice = data.reduce((total, food) => total + food.qty*food.price, 0)
  return (
    <div>

      {/* {console.log(data)} */}
      <div className='container m-auto mt-5 table-responsive  table-responsive-sm table-responsive-md' >
        <table className='table table-hover '>
          <thead className=' text-success fs-4'>
            <tr>
              <th scope='col' >#</th>
              <th scope='col' >Name</th>
              <th scope='col' >Quantity</th>
              <th scope='col' >Amount</th>
              <th scope='col' >Total Price</th>
              <th scope='col' >ShopName</th>
              <th scope='col' ></th>
            </tr>
          </thead>
          <tbody>
            {data.map((food, index) => (
              <tr  key={index}>
                <th scope='row' >{index + 1}</th>
                <td >{food.name}</td>
                <td>{food.qty}</td>
                <td>{food.price}</td>
                <td>{food.price*food.qty}</td>
                <td>{food.shopName}</td>
                <td ><MdDelete onClick={() => { dispatch({ type: "REMOVE", index: index }) }}>Delete</MdDelete></td>
                </tr>
            ))}
          </tbody>
        </table>
        <div><h1 className='fs-2'>Total Price: {totalPrice}/-</h1></div>
        <div>
          <button className='btn bg-success mt-5 ' onClick={handleCheckOut}> Check Out </button>
        </div>
      </div>



    </div>
  )
}