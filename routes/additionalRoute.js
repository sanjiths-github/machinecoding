import express from 'express'

import {  addsubCategoryController, addsubcategoryController, createaddsubcategorycontroller } from '../controllers/additionalsubController.js';



const router = express.Router()

router.post(
    "/create-addsubcategory",
    createaddsubcategorycontroller

  );

 ///get-addsubcategory

 router.get(
  "/get-addsubcategory",
addsubcategoryController

);


router.get("/addsubcategory-addcategory/:slug", addsubCategoryController);

export default router