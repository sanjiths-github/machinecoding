import categoryModel from "../models/categoryModel.js";
import subcategoriesModel from "../models/subcategoriesModel.js";

import slugify from "slugify";


export const createsubcategorycontroller = async(req,res) => {
    try {

        const{name,category} = req.body;
        const subCategory = new subcategoriesModel({ ...req.body, slug: slugify(name) });
        await subCategory.save();
        res.status(201).send({
          success: true,
          message: "Subcategory Created Successfully",
          subCategory,
        });
    } catch (error) {
        
    }
}

export const getsubcategoryController = async (req, res) => {
    try {
      const subcategory = await subcategoriesModel
        .find({})
       
     
 
 
      res.status(200).send({
        success: true,
        counTotal: subcategory.length,
        message: "All subcategory ",
        subcategory,
      });
    } catch (error) {
      console.log(error);
      res.status(500).send({
        success: false,
        message: "Erorr in getting products",
        error: error.message,
      });
    }
  };

  export const subCategoryController = async (req, res) => {
    try {
      const category = await categoryModel.findOne({ slug: req.params.slug });
      const subcategory = await subcategoriesModel.find({ category });
      res.status(200).send({
        success: true,
        category,
    subcategory,
      });
    } catch (error) {
      console.log(error);
      res.status(400).send({
        success: false,
        error,
        message: "Error While Getting products",
      });
    }
  };