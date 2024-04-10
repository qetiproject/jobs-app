import mongoose from "mongoose";

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
  //   applies: [
  //     {
  //       type: mongoose.Schema.Types.ObjectId,
  //       ref: "Apply",
  //     },
  //   ],
});

export default mongoose.model("Vacancy", VacancySchema);
