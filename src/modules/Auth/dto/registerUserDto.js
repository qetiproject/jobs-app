import { body } from "express-validator";

export const registerUserDto = [
  body("username")
    .notEmpty()
    .withMessage("არ უნდა იყოს ცარიელი")
    .isLength({ min: 6 })
    .withMessage("შეიყვანეთ მინიმუმ 6 სიმბოლო"),
  // body("email").notEmpty().withMessage("არ უნდა იყოს ცარიელი"),
  // body("vacancies").notEmpty().withMessage("არ უნდა იყოს ცარიელი"),
  body("password")
    .notEmpty()
    .withMessage("არ უნდა იყოს ცარიელი")
    .isLength({ min: 8 })
    .withMessage("შეიყვანეთ მინიმუმ 8 სიმბოლო"),
];
