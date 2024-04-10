import mongoose from "mongoose";

const ApplySchema = new mongoose.Schema({
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
});

export default mongoose.model("Apply", ApplySchema);
