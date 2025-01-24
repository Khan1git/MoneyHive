import React from "react";
import "./home.css";
import { Loader, Banknote } from "lucide-react";
import CustomBarChart from "../charts/BarChart";
import AreaChartExample from "../charts/AreaChart";

const Home = () => {
  return (
    <section id="home">
      {/* graphs section */}

      <div class="graphs_container">
        <div class="graphs">
          <div class="graph graph1">
            <div className="sub-graph">
              <ul className="loader">
                <li>1</li>
                <li>2</li>
                <li>3</li>
                <li>4</li>
              </ul>
              <ul>
                <li>Total wallet amount</li>
                <li>Total Loan to pay</li>
                <li>Total loan to recieve</li>
                <li>Overall Amount</li>
              </ul>
            </div>
            <ul>
              <li>30</li>
              <li>10</li>
              <li>00</li>
              <li>29</li>
            </ul>
          </div>
          <div class="graph  graph2">
            <div className="sub-graph">
              <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
                <li>4</li>
              </ul>
              <ul>
                <li>James</li>
                <li>Andreson</li>
                <li>Marsh</li>
                <li>Maxwell</li>
              </ul>
            </div>
            <ul>
              <li>Loan</li>
              <li>Pending</li>
              <li>Loan</li>
              <li>Recieve</li>
            </ul>
            <ul>
              <li>100</li>
              <li>200</li>
              <li>3000</li>
              <li>190</li>
            </ul>
          </div>
        </div>
      </div>

      {/* THE CARDS */}
      <div className="main_container">
        <div className="card_container">
          <div className="cards">
            <h1>Total Wallet:</h1>
            <h2>230</h2>
          </div>
          <div className="cards">
            <h1>Total Loan: </h1>
            <h2>0</h2>
          </div>
          <div className="cards">
            <h1>Total Recievable:</h1>
            <h2>2399</h2>
          </div>
          <div className="cards">
            <h1>Total:</h1>
            <h2>340</h2>
          </div>
        </div>
      </div>

      {/* charts */}
      <section id="charts">
        <div className="charts-box">

          <div className="chart">
            <CustomBarChart/>
          </div>

          <div className="chart">
           <AreaChartExample/>
          </div>
    

        </div>
      </section>
    </section>
  );
};

export default Home;
