import React, { useState } from "react";
import "./OwnerForm.css";

const OwnerForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    aadharNumber: "",
    shopName: "",
    address: "",
    dishes: [{ photo: "", name: "", price: "" }],
  });

  const handleChange = (e, index, field) => {
    const { value } = e.target;
    const updatedDishes = [...formData.dishes];
    updatedDishes[index][field] = value;
    setFormData({ ...formData, dishes: updatedDishes });
  };

  const handleAddDish = () => {
    setFormData({
      ...formData,
      dishes: [...formData.dishes, { photo: "", name: "", price: "" }],
    });
  };

  const handleRemoveDish = (index) => {
    const updatedDishes = [...formData.dishes];
    updatedDishes.splice(index, 1);
    setFormData({ ...formData, dishes: updatedDishes });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="MainDiv">
      <form className="form-container" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={(e) => handleChange(e, null, null)}
          />
        </div>
        <div>
          <label htmlFor="aadharNumber">Aadhar Number:</label>
          <input
            type="text"
            id="aadharNumber"
            name="aadharNumber"
            value={formData.aadharNumber}
            onChange={(e) => handleChange(e, null, null)}
          />
        </div>
        <div>
          <label htmlFor="shopName">Shop Name:</label>
          <input
            type="text"
            id="shopName"
            name="shopName"
            value={formData.shopName}
            onChange={(e) => handleChange(e, null, null)}
          />
        </div>
        <div>
          <label htmlFor="address">Address:</label>
          <input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={(e) => handleChange(e, null, null)}
          />
        </div>
        <div>
          <label className="dish-label">Dishes:</label>
          {formData.dishes.map((dish, index) => (
            <div className="dish-container" key={index}>
              <div>
                <label htmlFor={`photo${index}`}>Photo:</label>
                <input
                  type="file"
                  id={`photo${index}`}
                  onChange={(e) => handleChange(e, index, "photo")}
                />
              </div>
              <div>
                <label htmlFor={`name${index}`}>Name:</label>
                <input
                  type="text"
                  id={`name${index}`}
                  value={dish.name}
                  onChange={(e) => handleChange(e, index, "name")}
                />
              </div>
              <div>
                <label htmlFor={`price${index}`}>Price:</label>
                <input
                  type="text"
                  id={`price${index}`}
                  value={dish.price}
                  onChange={(e) => handleChange(e, index, "price")}
                />
              </div>
              <button
                className="remove-button"
                type="button"
                onClick={() => handleRemoveDish(index)}
              >
                Remove
              </button>
            </div>
          ))}
          <button className="add-button" type="button" onClick={handleAddDish}>
            Add Dish
          </button>
        </div>
        <button className="submit-button" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default OwnerForm;
