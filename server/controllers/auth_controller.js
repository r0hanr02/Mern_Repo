import User from "../models/User-model.js";
import bcrypt from "bcrypt";

const home = async (req, res) => {
  try {
    console.log(req.body);
    res.status(200).send(`message : ${req.body}`);
  } catch (error) {
    console.log(error);
  }
};

const register = async (req, res) => {
  try {
    const { username, email, phone, password } = req.body;
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ msg: "email already exists" });
    }
    // hash the password

    // const saltRound = 10;
    // const hash_password = await bcrypt.hash(password, saltRound);

    await User.create({ username, email, phone, password});

    res.status(200).json({ message: req.body });
  } catch (error) {
    console.log(error);
  }
};

export { home, register };
