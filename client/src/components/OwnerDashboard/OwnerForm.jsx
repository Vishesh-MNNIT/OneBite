import React, { useState } from "react";
import "./OwnerForm.css";
import { Link, useNavigate } from "react-router-dom";
import img2 from "../../images/Animation/ShopD.gif";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const OwnerForm = () => {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({ name: "", image: null });

  // Define the toast function
  const showSuccessToast = () => {
    toast.success("Shop Added Successfully!!"); // Toast message for successful login
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("name", credentials.name);
      formData.append("image", credentials.image);

      const response = await fetch(
        "http://localhost:3000/api/v1/owners/shopdetails",
        {
          method: "POST",
          body: formData,
        }
      );

      const json = await response.json();
      console.log(json.data._id);
      localStorage.setItem("id", json.data._id);
      if (json.statusCode === 200) {
        showSuccessToast();
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
        <div className="d-flex parts">
          <div className="part1 d-flex justify-content-center align-item-center">
            <div
              className="owner-text"
              style={{
                color: "black",
                fontFamily: "cursive",
                marginLeft: "10px",
              }}
            >
              <h2>
                "Join ONE BITE and Serve up Satisfaction: Open Your Shop Today!"
              </h2>
            </div>
            <div>
              <img className="ownerImageSet" src={img2} alt="" />
            </div>
          </div>

          <div className="part2 d-flex justify-content-center align-item-center">
            <div className="shop-details-container">
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
      </div>
      //Toasting Feature
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
  );
};

export default OwnerForm;
