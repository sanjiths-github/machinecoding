import mongoose from 'mongoose'


const subcategoriesSchema = new mongoose.Schema({

  name: {
    type: String,
    required: true,
  },
  slug: {
    type: String,
    required: true,
  },

  category: {
    type: mongoose.ObjectId,
    ref: "Category",
    required: true,
  },

  


},
{ timestamps: true }
);
export default mongoose.model('subCategory',subcategoriesSchema)