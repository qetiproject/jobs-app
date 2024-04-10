import express from "express";
import UserController from "./user.controller.js";
import { checkAuth, checkRole } from "../../middlewares/auth.middleware.js";

const UserRouter = express.Router();

UserRouter.get(
  "/",
  checkAuth,
  checkRole(["recruiter"]),
  UserController.getUsers
);

UserRouter.get(
  "/:userId",
  checkAuth,
  checkRole(["recruiter"]),
  UserController.getUserById
);

UserRouter.delete(
  "/:userId",
  checkAuth,
  checkRole(["recruiter"]),
  UserController.deleteUser
);

export default UserRouter;
