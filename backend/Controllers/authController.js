import User from "../models/UserSchema.js";
import Beautician from "../models/BeauticianSchema.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const generateToken = (user) => {
  return jwt.sign(
    { id: user._id, role: user.role },
    process.env.JWT_SECRET_KEY,
    {
      expiresIn: "30d",
    }
  );
};

export const register = async (req, res) => {
  const { email, password, name, role, photo, gender } = req.body;

  try {
    let user = null;

    if (role === "client") {
      user = await User.findOne({ email });
    } else if (role === "beautician") {
      user = await Beautician.findOne({ email });
    }

    if (user) {
      return res.status(400).json({ message: "User already exists" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);

    if (role === "client") {
      user = new User({
        name,
        email,
        password: hashPassword,
        photo,
        gender,
        role,
      });
    } else if (role === "beautician") {
      user = new Beautician({
        name,
        email,
        password: hashPassword,
        photo,
        gender,
        role,
      });
    }

    await user.save();

    res
      .status(200)
      .json({ success: true, message: "User successfully created" });
  } catch (err) {
    console.error("Error in registration:", err);
    res
      .status(500)
      .json({ success: false, message: "Server error, try again" });
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    let user = null;

    const client = await User.findOne({ email });
    const beautician = await Beautician.findOne({ email });

    if (client) {
      user = client;
    }
    if (beautician) {
      user = beautician;
    }

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const isPasswordMatch = await bcrypt.compare(password, user.password);

    if (!isPasswordMatch) {
      return res
        .status(400)
        .json({ status: false, message: "Invalid credentials" });
    }

    const token = generateToken(user);

    const { password: userPassword, role, appointments, ...rest } = user._doc;

    res.status(200).json({
      status: true,
      message: "Login Successfully",
      token,
      data: { ...rest },
      role,
    });
  } catch (err) {
    res.status(500).json({ status: false, message: "Login failed" });
  }
};
