import mongoose from "mongoose";
import emailRegex from "../../config/regex.js";

const UserSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: {
    type: String,
    unique: true,
    required: true,
    lowercase: true,
    match: [emailRegex, "Please enter valid email address"],
  },
  password: { type: String, required: true },
  role: { type: String, enum: ["user", "recruiter"], default: "user" },
  vacancies: [],
});

export default mongoose.model("User", UserSchema);
