import categoryModel from "../models/categoryModel.js";
import productModel from "../models/productModel.js";
import slugify from "slugify";

export const createproductcontroller = async(req,res) => {
    try {

        const{name,category} = req.body;
        const products= new productModel({ ...req.body, slug: slugify(name) });
        await products.save();
        res.status(201).send({
          success: true,
          message: "Subcategory Created Successfully",
          products,
        });
    } catch (error) {
        
    }
}

export const getProductController = async (req, res) => {
    try {
      const products = await productModel
        .find({})
       
        .populate("category")
 
 
      res.status(200).send({
        success: true,
        counTotal: products.length,
        message: "All subcategory ",
       products,
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

  

  export const productCategoryController = async (req, res) => {
    try {
      const category = await categoryModel.findOne({ slug: req.params.slug });
      const products = await productModel.find({ category }).populate("category");
      res.status(200).send({
        success: true,
        category,
        products,
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
  