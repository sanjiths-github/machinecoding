import express from "express"

import { createproductsubcontroller, getProductsubController, productsubCategoryController } from "../controllers/productsubcontroller.js"

const router = express.Router()

router.post('/create-productsub',createproductsubcontroller)

router.get('/get-productsub',getProductsubController)

router.get("/productsub-category/:slug", productsubCategoryController);


export default router