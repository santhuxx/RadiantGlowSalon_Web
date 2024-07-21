import express from "express";
import {
  updateBeautician,
  deleteBeautician,
  getAllBeauticians,
  getSingleBeautician,
} from "../Controllers/beauticianController.js";

import { authenticate, restrict } from "../auth/verifyToken.js";

import reviewRouter from "./review.js";

const router = express.Router();

router.use("/:beauticianId/reviews", reviewRouter);

router.get("/:id", getSingleBeautician);
router.get("/", getAllBeauticians);
router.put("/:id", authenticate, restrict(["beautician"]), updateBeautician);
router.delete("/:id", authenticate, restrict(["beautician"]), deleteBeautician);

export default router;
