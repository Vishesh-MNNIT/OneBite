import React from 'react'
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";



function ForgotPassword() {
    const [email, setEmail] = useState()
    const navigate = useNavigate()

    // axios.defaults.withCredentials = true;
    const handleSubmit = async(e) => {
        e.preventDefault()
        // axios.post('http://localhost:3000/users/forgotPassword', {email})
        // .then(res => {
        //     if(res.data.Status === "Success") {
        //         navigate('/login')
               
        //     }
        // }).catch(err => console.log(err))
        console.log(email);
        const response = await fetch('http://localhost:3000/api/v1/users/forgotPassword', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
        }),
      });

      console.log(response);
    }

    return(
        <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
      <div className="bg-white p-3 rounded w-25">
        <h4>Forgot Password</h4>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email">
              <strong>Email</strong>
            </label>
            <input
              type="email"
              placeholder="Enter Email"
              autoComplete="off"
              name="email"
              className="form-control rounded-0"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-success w-100 rounded-0">
            Send
          </button>
          </form>
        
      </div>
    </div>
    )
}

export default ForgotPassword;
