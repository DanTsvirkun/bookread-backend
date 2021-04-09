import mongoose, { Schema } from "mongoose";
import { IPlanning } from "../../helpers/typescript-helpers/interfaces";

const planningSchema = new Schema({
  startDate: String,
  endDate: String,
  books: [{ type: mongoose.Types.ObjectId, ref: "Book" }],
  pagesPerDay: Number,
  stats: [{ time: String, pagesCount: Number }],
});

export default mongoose.model<IPlanning>("Planning", planningSchema);
