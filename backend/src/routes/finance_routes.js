import express from "express";
import { addFinance, getFinance } from "../controllers/finance_controller.js";

const finance_route = express.Router();

// finance_route.post("/add/:id", addFinance);
finance_route.post("/add", addFinance);
finance_route.get("/get-all", getFinance);


export default finance_route;