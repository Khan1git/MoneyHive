import React, { useState } from "react";
import "./form.css";
import axios from "axios";

const Form = () => {
  const [Name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [status, setStatus] = useState("");
  const [type, setType] = useState("");
  console.log(Name)

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = { Name, description, amount, status, type };
      const response = await fetch(
        "http://localhost:3000/api/finance/add",{
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );
      if (!response.ok) {
        const errorMessage = await response.text(); // Get error message from response
        throw new Error(`Error ${response.status}: ${errorMessage}`);
      }

      const data = await response.json()
      alert("Form Submitted: ", data);
      setAmount("");
      setName("");
      setDescription("");
      setStatus("");
      setType("");
      
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <div className="itinerary-section">
          <h3>Add Data</h3>

          <div className="sub_inputs">
            <label htmlFor="name">Name</label>
            <input
              id="name"
              type="text"
              name="name"
              value={Name}
              onChange={(e) => setName(e.target.value)}
            />

            <label htmlFor="description">Description</label>
            <input
              id="description"
              type="text"
              name="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          <label htmlFor="amount">Amount</label>
          <input
            id="amount"
            type="text"
            name="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />

          <label htmlFor="status">Status</label>
          <select
            id="status"
            name="status"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value="">Select Status</option>
            <option value="pending">Pending</option>
            <option value="paid">Paid</option>
            <option value="unpaid">UnPaid</option>
          </select>

          <label htmlFor="type">Type</label>
          <select
            id="type"
            name="type"
            value={type}
            onChange={(e) => setType(e.target.value)}
          >
            <option value="">Select Type</option>
            <option value="loan-taken">Loan Taken</option>
            <option value="loan-given">Loan Given</option>
            <option value="repayment">Repayment</option>
            <option value="receivable">Receivable</option>
            <option value="payment">Payment</option>
          </select>
        </div>

        <div className="form-actions">
          <button type="submit" className="save-btn">
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
