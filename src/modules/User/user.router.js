import express from "express";
import UserController from "./user.controller.js";
import { checkAuth, checkRole } from "../../middlewares/auth.middleware.js";

const UserRouter = express.Router();

UserRouter.use(checkAuth, checkRole(["recruiter"]));

UserRouter.get("/", UserController.getUsers);

UserRouter.get("/:userId", UserController.getUserById);

UserRouter.delete("/:userId", UserController.deleteUser);

export default UserRouter;
