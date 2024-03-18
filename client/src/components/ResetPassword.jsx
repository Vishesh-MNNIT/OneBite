import React from 'react'
import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


function ResetPassword() {
    const [password, setPassword] = useState()
    const navigate = useNavigate()
    const {id, token} = useParams()

    
    const showSuccessToast = () => {
      toast.success("Password Updated Successfully!"); // Toast message for successful login
    };

    const handleSubmit = async (e) => {
        e.preventDefault()
        // axios.post(`http://localhost:3000/api/v1/users/reset-password/${id}/${token}`, {password})
        // .then(res => {
        //     console.log(res);
        //     if(res.data.Status === "Success") {
        //         navigate('/login')
               
        //     }
        // }).catch(err => console.log(err))

        const response = await fetch(`http://localhost:3000/api/v1/users/reset-password/${id}/${token}`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
               password:password,
            }),
          });
    
          console.log(response);
          navigate("/buyerlogin")
          showSuccessToast(); // Show toast message on successful login
          
    }

    return(
      <>
        <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
      <div className="bg-white p-3 rounded w-25">
        <h4>Reset Password</h4>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email">
              <strong>New Password</strong>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              autoComplete="off"
              name="password"
              className="form-control rounded-0"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-success w-100 rounded-0">
            Update
            
          </button>
          </form>
        
      </div>
    </div>
    <ToastContainer
    position="top-right"
    autoClose={5000}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
    theme="colored"
    transition:Bounce
  />
  </>
    )
}

export default ResetPassword;