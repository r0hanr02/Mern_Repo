import User from "../models/User-model.js";

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
    const userCreated = await User.create({ username, email, phone, password });

    res.status(200).json({
      message: "Registeration Successfull",
      token: await userCreated.generateToken(),
      userId: userCreated._id.toString(),
    });
  } catch (error) {
    console.log(error);
  }
};

export { home, register };
