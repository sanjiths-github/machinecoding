



import slugify from "slugify";  
import addprodsubModel from "../models/addprodsubModel.js";

import subcategoriesModel from "../models/subcategoriesModel.js";
import AdditionalsubModel from "../models/AdditionalsubModel.js";

export const   createprodsubcategorycontroller = async(req,res) => {
    try {

        const{name,subcategory} = req.body;
        const addprodsubCategory = new addprodsubModel({ ...req.body, slug: slugify(name) });
        await addprodsubCategory.save();
        res.status(201).send({
          success: true,
          message: "additionalSubcategory Created Successfully",
          addprodsubCategory,
        });
    } catch (error) {
        
    }


    
}

export const getprodsubcategoryController = async (req, res) => {
  try {
    const addsubCategorys = await AdditionalsubModel
      .find({})
    
    
   
   


    res.status(200).send({
      success: true,
      counTotal: addsubCategorys.length,
      message: "All additionalsubcategory ",
      addsubCategorys,
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

export const productsubbCategoryController = async (req, res) => {
    try {
      const subcategory = await AdditionalsubModel.findOne({ slug: req.params.slug });
      const addprodsubCategorys = await addprodsubModel.find({ subcategory }).populate("category");
      res.status(200).send({
        success: true,
        subcategory,
        addprodsubCategorys ,
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
  