import React, { useState } from "react";
import "./OwnerForm.css";
import { Link, useNavigate } from "react-router-dom";

const OwnerForm = () => {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({ name: "", image: null });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("name", credentials.name);
      formData.append("image", credentials.image);

      const response = await fetch("http://localhost:3000/api/v1/owners/shopdetails", {
        method: "POST",
        body: formData,
      });

      const json = await response.json();
      console.log(json.data._id);
      localStorage.setItem('id',json.data._id);
      if (json.statusCode === 200) {
        console.log("neelu");
        navigate("/owneradditems");
      } else {
        alert(json.message || "Error occurred");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Invalid credentials");
    }
  };

  const handleImageChange = (event) => {
    setCredentials({
      ...credentials,
      image: event.target.files[0], // Get the first file from the selected files
    });
  };

  const handleChange = (event) => {
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
              <label htmlFor="name">ShopName:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={credentials.name}
                onChange={handleChange}
              />

              <label htmlFor="image">ShopImage</label>
              <input
                type="file"
                id="image"
                name="image"
                onChange={handleImageChange}
              />

              <button type="submit">Submit</button>
            </form>
          </div>
          <h1 className="owner-text"></h1>
        </div>
      </div>
    </>
  );
};

export default OwnerForm;
