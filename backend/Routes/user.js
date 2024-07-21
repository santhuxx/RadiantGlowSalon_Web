import express from "express";
import {
  updateUser,
  deleteUser,
  getAllUsers,
  getSingleUser,
} from "../Controllers/userController.js";

import { authenticate, restrict } from "../auth/verifyToken.js";

const router = express.Router();

router.get("/:id", authenticate, restrict(["client"]), getSingleUser);
router.get("/", authenticate, restrict(["admin"]), getAllUsers);
router.put("/:id", authenticate, restrict(["client"]), updateUser);
router.delete("/:id", authenticate, restrict(["client"]), deleteUser);

export default router;
