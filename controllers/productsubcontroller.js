import productsubModel from "../models/productsubModel.js";
import slugify from "slugify";
import subcategoriesModel from "../models/subcategoriesModel.js";



export const createproductsubcontroller = async(req,res) => {
    try {

        const{name,subcategory} = req.body;
        const productsub= new productsubModel ({ ...req.body, slug: slugify(name) });
        await productsub.save();
        res.status(201).send({
          success: true,
          message: "Subcategory Created Successfully",
          productsub,
        });
    } catch (error) {
        
    }
}



export const getProductsubController = async (req, res) => {
    try {
      const productsub = await productsubModel
        .find({})
       
        .populate("subcategory")
 
 
      res.status(200).send({
        success: true,
        counTotal: productsub.length,
        message: "All subcategory ",
       productsub,
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


  export const productsubCategoryController = async (req, res) => {
    try {
      const subcategory = await subcategoriesModel.findOne({ slug: req.params.slug });
      const productsub = await productsubModel.find({ subcategory }).populate("subcategory");
      res.status(200).send({
        success: true,
        subcategory,
        productsub,
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