import express from "express";
import {
  Login_user,
  update_user,
  user_singup,
} from "../controllers/user_controller.js";
import { authenticateToken } from "../middlewares/authToken.js";

const route = express.Router();

route.post("/signup", user_singup);
route.put("/login", authenticateToken, Login_user);
route.put("/update/:id", update_user);

export default route;
