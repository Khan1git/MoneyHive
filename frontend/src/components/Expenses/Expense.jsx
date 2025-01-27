import React, { useEffect, useState } from "react";
import "./expense.css";

const Expense = () => {
  const [finances, setFinances] = useState([]);
  console.log(finances);

  const getAllfinances = async () => {
    try {
      const res = await fetch("http://localhost:3000/api/finance/get-all", {
        method: "GET",
      });
      const data = await res.json();
      setFinances(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getAllfinances();
  }, []);

  return (
    <div id="exp_container">
      <div className="head_container">
        <h2>Expenses</h2>
        <div className="btn_container">
          <button>Add</button>
          <button>sort</button>
          <button>Filter</button>
        </div>
      </div>
      <div className="main_exp">
        <table className="table_contianer">
          <thead>
            <th>No</th>
            <th>Name</th>
            <th>Discription</th>
            <th>Status</th>
            <th>Amount</th>
          </thead>
          <tbody>
            {finances.map((finance, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{finance.Name}</td>
                <td>{finance.description}</td>
                <td
                  style={{
                    color: finance.status === "paid" ? "green" : "red",
                  }}
                >
                  {finance.status}
                </td>

                <td>{finance.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Expense;
