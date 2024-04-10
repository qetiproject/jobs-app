import express from "express";
import ApplyController from "./apply.controller.js";
import { checkAuth, checkRole } from "../../middlewares/auth.middleware.js";

const ApplyRouter = express.Router();

ApplyRouter.post(
  "/apply",
  checkAuth,
  checkRole(["user"]),
  ApplyController.createApply
);

export default UserRouter;
