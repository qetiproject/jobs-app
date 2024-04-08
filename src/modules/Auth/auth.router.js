import express from "express";
import AuthController from "./auth.controller.js";
import { registerUserDto } from "./dto/registerUserDto.js";
import { loginUserDto } from "./dto/loginUserDto.js";

export const AuthRouter = express.Router();

AuthRouter.post("/register", registerUserDto, AuthController.registerUser);
AuthRouter.post("/login", loginUserDto, AuthController.loginUser);
