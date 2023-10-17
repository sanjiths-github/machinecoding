import AdditionalsubModel from "../models/AdditionalsubModel.js";
import subcategoriesModel from "../models/subcategoriesModel.js";
import slugify from "slugify";  

export const   createaddsubcategorycontroller = async(req,res) => {
    try {

        const{name,subcategory} = req.body;
        const addsubCategory = new AdditionalsubModel({ ...req.body, slug: slugify(name) });
        await addsubCategory.save();
        res.status(201).send({
          success: true,
          message: "additionalSubcategory Created Successfully",
          addsubCategory,
        });
    } catch (error) {
        
    }
}


export const addsubcategoryController = async (req, res) => {
    try {
      const addsubCategory = await AdditionalsubModel
        .find({})
      
      
     
     
 
 
      res.status(200).send({
        success: true,
        counTotal: addsubCategory.length,
        message: "All additionalsubcategory ",
        addsubCategory,
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

  export const addsubCategoryController = async (req, res) => {

    try {
      const subcategory = await subcategoriesModel.findOne({ slug: req.params.slug });
      const addsubCategorys = await AdditionalsubModel.find({ subcategory });
      res.status(200).send({
        success: true,
        subcategory,
        addsubCategorys,
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