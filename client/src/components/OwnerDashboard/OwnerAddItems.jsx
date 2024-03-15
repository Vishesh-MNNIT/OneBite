import React, { useState } from "react";
import "./OwnerForm.css";
import { Link, useNavigate } from "react-router-dom";

const OwnerAddItems = () => {
    let navigate = useNavigate();
    const [credentials, setCredentials] = useState({ name: "", price: "", image: null });
    const handleSubmit = async (e) => {
        const id = localStorage.getItem('id');
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("userId", id); 
      formData.append("name", credentials.name);
      formData.append("price", credentials.price);
      formData.append("image", credentials.image);

      const response = await fetch("http://localhost:3000/api/v1/owners/itemsUpload", {
        method: "POST",
        body: formData, // Use FormData object for file uploads
      });
      const json = await response.json();
      console.log(json);

      if (json.statusCode === 400) {
        alert("Enter Valid Credentials");
      } else if (json.statusCode === 401) {
        alert("Invalid user Credentials");
      } else if (json.statusCode === 404) {
        alert("First Create Account");
      } else if (json.statusCode === 200) {
        console.log("neelu");
        navigate("/owneradditems");
      }
    } catch (error) {
      alert("Invalid credentials");
    }
  };

  const handleImageChange = (event) => {
    setCredentials({
      ...credentials,
      image: event.target.files[0], // Get the first file from the selected files
    });
  };

  const onChange = (event) => {
    setCredentials({
      ...credentials,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <>
      <div className="parent-container">
        <div className="part2 d-flex justify-content-center align-item-center">
          <div className="login-container">
            <h2>Your Shop Details</h2>
            <form onSubmit={handleSubmit}>
              <label htmlFor="name">Name:</label>
              <input
                type="name"
                id="name"
                name="name"
                value={credentials.name}
                onChange={onChange}
              />
              <label htmlFor="price">Price</label>
              <input
                type="price"
                id="price"
                name="price"
                value={credentials.price}
                onChange={onChange}
              />

              <label htmlFor="image">ShopImage</label>
              <input
                type="file"
                id="image"
                name="image"
                onChange={handleImageChange}
              />

              <button type="submit">Add More Items</button>
            </form>
          </div>
          <h1 className="owner-text"></h1>
        </div>
      </div>
    </>
  );
};

export default OwnerAddItems;
