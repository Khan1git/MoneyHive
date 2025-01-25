import React from "react";
import "./expense.css";

const Expense = () => {
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
            <tr>
              <td>1</td>
              <td>khan</td>
              <td>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam!</td>
              <td>Pending</td>
              <td>102</td>
            </tr>
           
            <tr>
              <td>1</td>
              <td>khan</td>
              <td>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam!</td>
              <td>Pending</td>
              <td>102</td>
            </tr>
           
            <tr>
              <td>1</td>
              <td>khan</td>
              <td>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam!</td>
              <td>Pending</td>
              <td>102</td>
            </tr>
            <tr>
              <td>1</td>
              <td>khan</td>
              <td>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam!</td>
              <td>Pending</td>
              <td>102</td>
            </tr>
            <tr>
              <td>1</td>
              <td>khan</td>
              <td>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam!</td>
              <td>Pending</td>
              <td>102</td>
            </tr>
           
            <tr>
              <td>1</td>
              <td>khan</td>
              <td>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam!</td>
              <td>Pending</td>
              <td>102</td>
            </tr>
           
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Expense;
