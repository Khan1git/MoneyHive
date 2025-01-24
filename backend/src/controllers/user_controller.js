import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const user_singup = async (req, res) => {
  try {
    const { name, email, Pno, password, role } = req.body;

    if (!name || !email || !role || !password) {
      res.status(400).json("All Inputs are required");
    }

    const isUserExist = await User.findOne({ email: email });
    if (isUserExist) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hashPass = bcrypt.hashSync(password, 10);

    const addUser = new User({
      name,
      email,
      Pno,
      password: hashPass,
      role,
    });
    const result = await addUser.save();
    return res.status(201).json({ result: result });
  } catch (error) {
    console.log(error);
  }
};

export const Login_user = async (req, res) => {
  try {
    const { email, password } = req.body;
    const isUserPresent = await User.findOne({ email });
    if (!isUserPresent) {
      return res.status(400).json({ message: "User Not Found" });
    }
    const isPassCorrect = await bcrypt.compare(
      password,
      isUserPresent.password
    );
    if (!isPassCorrect) {
      return res.status(400).json({ message: "Incorrect Credentials" });
    }

    const token = jwt.sign(
      {
        id: isUserPresent._id,
        email: isUserPresent.email,
      },
      '04cb41ccde31f1c80dc81a6b4440d245116e489b50d416512460fdab32abe405',
      {
        expiresIn: "1D",
      }
    );

    res.status(200).json({ message: "Login Successfull", token: token });
  } catch (error) {}
};

export const update_user = async (req, res) => {
  try {
    const id = req.params.id;
    const update = await User.findByIdAndUpdate(id, req.body, { new: true });
    if (!update) {
      return res.status(400).json({ message: "An error has occured" });
    }
    const result = await update.save();
    res.status(200).json({ message: "user has been updated", result: result });
  } catch (error) {
    console.log(error);
  }
};
