import mongoose from "mongoose"


const connect = async(req,res) => {

    
    try {

      await mongoose.connect(process.env.MONGO_URL)
console.log("connected to mongodb")        
    } catch (error) {
        console.log(error)
        
    }


}

export default connect