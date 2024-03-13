import React, { useState } from "react";
import "./OwnerForm.css";
import { Link } from "react-router-dom";

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
          <label className="dish-label">Items:</label>
          {formData.dishes.map((dish, index) => (
            <div className="dish-container" key={index}>
              <div>
                <label htmlFor={name${index}}>Name:</label>
                <input
                  type="text"
                  id={name${index}}
                  value={dish.name}
                  onChange={(e) => handleChange(e, index, "name")}
                />
              </div>
              <div>
                <label htmlFor={price${index}}>Price:</label>
                <input
                  type="text"
                  id={price${index}}
                  value={dish.price}
                  onChange={(e) => handleChange(e, index, "price")}
                />
              </div>
              <div>
                <label htmlFor={photo${index}}>Item Image:</label>
                <input
                  type="file"
                  id={photo${index}}
                  onChange={(e) => handleChange(e, index, "photo")}
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
        </div>
        <button className="submit-button" type="submit">
          <Link to="/owneradditems">Add more Dish</Link>
        </button>
      </form>
    </div>
  );
};

export default OwnerForm;