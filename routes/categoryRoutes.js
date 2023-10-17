import express from "express"

import { createcategorycontroller, deleteCategoryController, getcategoryController } from '../controllers/categoryController.js'

const router = express.Router()

router.post('/create-category',createcategorycontroller)
router.get('/get-category',getcategoryController)
router.delete('/delete-category/:id',deleteCategoryController)


export default router