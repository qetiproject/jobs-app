import User from "../User/user.model.js";
import { hashPassword } from "../../utils/bcypt.utils.js";
import { comparePasswords } from "../../utils/bcypt.utils.js";
import { createAccessToken } from "../../utils/jwt-tokens.js";

export async function registerUser(body) {
  const hashedPassword = await hashPassword(body.password);
  const user = new User({
    username: body.username,
    email: body.email,
    password: hashedPassword,
  });
  if (body.role) {
    user.role = body.role;
  }
  await user.save();
  return user;
}

export async function loginUser(body) {
  const { email, password } = body;

  const user = await User.findOne({ email: { $eq: email } });

  if (!user) {
    throw new Error("invalid login credetials");
  }

  const isPasswordValid = await comparePasswords(password, user.password);

  if (!isPasswordValid) {
    throw new Error("invalid login credetials");
  }

  const accessToken = createAccessToken({
    userId: user.id,
    role: user.role,
    email: user.email,
  });

  return { accessToken };
}
