import mongoose, { Schema } from "mongoose";
import { IUser } from "../../helpers/typescript-helpers/interfaces";

const userSchema = new Schema({
  email: String,
  passwordHash: String,
  originUrl: String,
  books: [{ type: mongoose.Types.ObjectId, ref: "Book" }],
  planning: { type: mongoose.Types.ObjectId, ref: "Planning", default: null },
});

export default mongoose.model<IUser>("User", userSchema);
