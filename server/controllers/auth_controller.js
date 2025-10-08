import bcrypt from "bcryptjs";
import User from "../models/User-model.js";

const home = async (req, res) => {
  try {
    console.log(req.body);
    res.status(200).send(`message : ${req.body}`);
  } catch (error) {
    console.log(error);
    next(error);
  }
};

const register = async (req, res) => {
  try {
    const { username, email, phone, password } = req.body;
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ msg: "email already exists" });
    }
    const userCreated = await User.create({ username, email, phone, password });

    res.status(200).json({
      message: "Registeration Successfull",
      token: await userCreated.generateToken(),
      userId: userCreated._id.toString(),
    });
  } catch (error) {
    next(error);
  }
};

const login = async function (req, res) {
  try {
    const { email, password } = req.body;
    const existingUser = await User.findOne({ email });
    if (!existingUser) {
      return res.status(400).json({ message: "Invalid Credential" });
    }
    console.log(existingUser);

    // const isMatch =

    const isMatch = await existingUser.comparePassword(password);

    if (isMatch) {
      res.status(200).json({
        message: "Login Successfull",
        token: await existingUser.generateToken(),
        userId: existingUser._id.toString(),
      });
    } else {
      res.status(401).json("Invalid email or password");
    }
  } catch (error) {
    next(error);
  }
};

export { home, register, login };
