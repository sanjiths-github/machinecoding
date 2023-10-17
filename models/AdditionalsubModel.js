import mongoose from 'mongoose'


const AddsubcategoriesSchema = new mongoose.Schema({

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
    ref: "subcategory",
    required: true,
  },




},
{ timestamps: true }
);
export default mongoose.model('AddsubCategory',AddsubcategoriesSchema)