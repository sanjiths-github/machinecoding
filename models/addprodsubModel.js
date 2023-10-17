import mongoose from "mongoose";

const addprodsubSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      required: true,
    },

    addsubcategory: {
      type: mongoose.ObjectId,
      ref: "category",
      required: true,
    },



  },
  { timestamps: true }
);

export default mongoose.model("addprodsub", addprodsubSchema);