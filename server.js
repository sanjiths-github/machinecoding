import express from "express"
import dotenv from "dotenv"
import connect from "./configure/db.js"
import categoryRoutes from "./routes/categoryRoutes.js"
import subcategoryRoutes from './routes/subcategoryRoutes.js'
import additionalRoutes from './routes/additionalRoute.js'
import productRoute from './routes/productRoute.js'
import productsubRoute from './routes/prodsubRoute.js'
import addprodsubRoute from './routes/addprodsubRoute.js'
import cors from 'cors'

import morgan from "morgan"

import path from 'path'
import{ fileURLToPath } from 'url'

dotenv.config()

connect()

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app = express()

app.use(cors())
app.use(morgan("dev"))
app.use(express.static(path.join(__dirname,'./client/build')))

app.use(express.json())

app.use('/api/v1/category',categoryRoutes)
app.use("/api/v1/subcategory", subcategoryRoutes);

app.use("/api/v1/additionalsubcategory", additionalRoutes);

app.use("/api/v1/product", productRoute);

app.use("/api/v1/productsub", productsubRoute);


app.use("/api/v1/addproductsub", addprodsubRoute);

app.use('*',function(req,res){
    res.sendFile(path.join(__dirname,"./client/build/index.html"))
})

 const PORT = process.env.PORT
app.listen(PORT,() =>{
    console.log(`server running on ${PORT}`)

})
