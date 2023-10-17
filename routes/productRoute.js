import express from "express"
import { createproductcontroller, getProductController, productCategoryController } from "../controllers/productController.js"

const router = express.Router()

router.post('/create-product',createproductcontroller)
router.get('/get-product',getProductController)

router.get("/product-category/:slug", productCategoryController);

export default router