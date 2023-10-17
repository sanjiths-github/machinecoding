import mongoose from "mongoose";

const productsubSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      required: true,
    },

    subcategory: {
      type: mongoose.ObjectId,
      ref: "Category",
      required: true,
    },



  },
  { timestamps: true }
);

export default mongoose.model("Productsub", productsubSchema);