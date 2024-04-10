import mongoose from "mongoose";
import { getVacancyByIdService } from "../Vacancy/vacancy.service.js";

const ApplySchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    vacancy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Vacancy",
    },
    description: {
      type: String,
      required: true,
    },
  },
  {
    versionKey: false,
  }
);

ApplySchema.post("save", { document: true }, async function (doc, next) {
  try {
    const vacancy = await getVacancyByIdService(doc.vacancy);
    vacancy.applies.push(doc._id);
    await vacancy.save();
  } catch (error) {}
  next();
});

export default mongoose.model("Apply", ApplySchema);
