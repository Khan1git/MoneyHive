import mongoose from "mongoose";

const FinanceSectorSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    type: {
      type: String,
      enum: ["loan-taken", "loan-given", "repayment", "receivable", "payment"],
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
    Name: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      default: Date.now,
    },
    status: {
      type: String,
      enum: ["paid", "unpaid", "pending"],
      required: true,
    },
    description: {
      type: String,
    },
  },
  { timestamps: true }
);

const Finance = mongoose.model("Finance", FinanceSectorSchema);
export default Finance