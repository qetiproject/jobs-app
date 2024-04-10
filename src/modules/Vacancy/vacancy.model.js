import mongoose from "mongoose";
import { getUserByIdService } from "../User/user.service.js";
import User from "../User/user.model.js";

const VacancySchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  recruiter: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  applies: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Apply",
    },
  ],
});

VacancySchema.post("save", { document: true }, async function (doc, next) {
  try {
    const user = await getUserByIdService(doc.recruiter);
    user.vacancies.push(doc._id);
    await user.save();
  } catch (error) {}
  next();
});

VacancySchema.post("deleteOne", { document: true }, async function (doc, next) {
  try {
    await User.findByIdAndUpdate(doc.recruiter, {
      $pull: { vacancies: doc._id },
    });
  } catch (error) {
    console.log(error);
  }

  next();
});

export default mongoose.model("Vacancy", VacancySchema);
