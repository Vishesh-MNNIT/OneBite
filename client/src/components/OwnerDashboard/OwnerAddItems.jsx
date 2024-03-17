import React, { useState } from "react";
import "./OwnerForm.css";
import { Link, useNavigate } from "react-router-dom";
import img2 from "../../images/Animation/Items.gif";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const OwnerAddItems = () => {
  let navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    name: "",
    price: "",
    image: null,
  });

  // Define the toast function
  const showSuccessToast = () => {
    toast.success("Items Added Successfully"); // Toast message for successful login
  };
  const handleSubmit = async (e) => {
    const id = localStorage.getItem("id");
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("userId", id);
      formData.append("name", credentials.name);
      formData.append("price", credentials.price);
      formData.append("image", credentials.image);

      const response = await fetch(
        "http://localhost:3000/api/v1/owners/itemsUpload",
        {
          method: "POST",
          body: formData, // Use FormData object for file uploads
        }
      );
      const json = await response.json();
      console.log(json);

      if (json.statusCode === 400) {
        alert("Enter Valid Credentials");
      } else if (json.statusCode === 401) {
        alert("Invalid user Credentials");
      } else if (json.statusCode === 404) {
        alert("First Create Account");
      } else if (json.statusCode === 200) {
        showSuccessToast();
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
              <h2>"Taste the Difference: What's Your Flavorful Creation?"</h2>
            </div>
            <div>
              <img className="ownerImageSet" src={img2} alt="" />
            </div>
          </div>

          <div className="part2 d-flex justify-content-center align-item-center">
            <div className="shop-details-container">
              <h2>ADD ITEMS</h2>
              <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name:</label>
                <input
                  type="name"
                  id="name"
                  name="name"
                  value={credentials.name}
                  onChange={onChange}
                />
                <label htmlFor="price">Price:</label>
                <input
                  type="price"
                  id="price"
                  name="price"
                  value={credentials.price}
                  onChange={onChange}
                />

                <label htmlFor="image">Item-Image:</label>
                <input
                  type="file"
                  id="image"
                  name="image"
                  onChange={handleImageChange}
                />

                <button type="submit">Add More Items</button>
                <button>
                  <Link
                    style={{ textDecoration: "none", color: "white" }}
                    to="/"
                  >
                    Finished
                  </Link>
                </button>
              </form>
            </div>

            <h1 className="owner-text"></h1>
          </div>
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
  );
};

export default OwnerAddItems;
