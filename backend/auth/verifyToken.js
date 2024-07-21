import jwt from "jsonwebtoken";
import Beautician from "../models/BeauticianSchema.js";
import User from "../models/UserSchema.js";

export const authenticate = async (req, res, next) => {
  const authToken = req.headers.authorization;
  if (!authToken || !authToken.startsWith("Bearer ")) {
    return res
      .status(401)
      .json({ success: false, message: "Authorization denied. No token find" });
  }

  try {
    const token = authToken.split(" ")[1];

    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);

    req.userId = decoded.id;
    req.role = decoded.role;

    next();
  } catch (err) {
    if (err.name === "TokenExpiredError") {
      return res.status(401).json({ message: "Token is expired" });
    }
    return res.status(401).json({ success: false, message: "Invalid Token" });
  }
};

export const restrict = (roles) => async (req, res, next) => {
  const userId = req.userId;

  let user;

  const client = await User.findById(userId);
  const beautician = await Beautician.findById(userId);

  if (client) {
    user = client;
  }
  if (beautician) {
    user = beautician;
  }

  if (!roles.includes(user.role)) {
    return res
      .status(401)
      .json({ success: false, message: "You are not authorized" });
  }
  next();
};
