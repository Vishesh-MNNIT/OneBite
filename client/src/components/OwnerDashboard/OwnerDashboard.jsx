import React, { useState } from "react";

export default function OwnerDashboard() {
  const ownerId = localStorage.getItem("ownerId");
  const [data,setData] = useState([]);
  const handleSubmit = async (e) => {
    e.preventDefault();

  try {
      const response = await fetch(
        "http://localhost:3000/api/v1/owners/orderDetails",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            id: ownerId
          }),
        }
      );
      const json = await response.json();
      console.log(json.items);
      setData(json.items);
    } catch (error) {
      alert("Invalid credentials");
    }

};  

  return (
    <>
  <div className="container m-auto mt-5 table-responsive table-responsive-sm table-responsive-md">
        <table className="table table-hover ">
          <thead className=" text-success fs-4">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Quantity</th>
              <th scope="col">Amount</th>
              
            </tr>
          </thead>
          <tbody>
            {data.map((food, index) => (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>{food.productName}</td>
                <td>{food.totalCount}</td>
                <td>{food.price}</td>

              </tr>
            ))}
          </tbody>
        </table>
        
        <div>
          <button className="btn bg-success mt-5" onClick={handleSubmit}>
            SEE ORDER
          </button>
        </div>
      </div>
    </>
    );
}