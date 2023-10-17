import express from "express"
import { createprodsubcategorycontroller, getprodsubcategoryController, productsubbCategoryController } from "../controllers/addprodsubController.js";


const router = express.Router()

router.post(
    "/create-prodsub",
    createprodsubcategorycontroller
  );
  router.get('/getproductsubb',getprodsubcategoryController)
  router.get("/productsubb-category/:slug", productsubbCategoryController );

export default router