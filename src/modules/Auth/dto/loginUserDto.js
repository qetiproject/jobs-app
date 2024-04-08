import { body } from "express-validator";

export const loginUserDto = [
  body("email").notEmpty().withMessage("არ უნდა იყოს ცარიელი"),
  body("password")
    .notEmpty()
    .withMessage("არ უნდა იყოს ცარიელი")
    .isLength({ min: 8 })
    .withMessage("შეიყვანეთ მინიმუმ 8 სიმბოლო"),
];
