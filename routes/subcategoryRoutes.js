import express from 'express'
import { createsubcategorycontroller, getsubcategoryController, subCategoryController } from '../controllers/subcategoriesController.js';




const router = express.Router()

router.post(
    "/create-subcategory",
  
    createsubcategorycontroller
  );

  router.get(
    "/get-subcategory",
  
    getsubcategoryController
  )

  router.get("/subcategory-category/:slug", subCategoryController);
 

export default router