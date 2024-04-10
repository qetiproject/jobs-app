import express from "express";
import UserController from "./user.controller.js";

const UserRouter = express.Router();

UserRouter.get("/", UserController.getUsers);

UserRouter.get("/:userId", UserController.getUserById);

UserRouter.delete("/:userId", UserController.deleteUser);

export default UserRouter;
