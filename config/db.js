import mongoose from "mongoose";
import colors from "colors";
const connectDB = async(req,res)=>{
try{
const conn = await mongoose.connect(process.env.MONGO_URL);
console.log(`Connect In MongoDB Database ${conn.connection.host}`.bgMagenta.white)
}catch(error){
    console.log(`Error In mongoDB Database ${error}`.bgRed.white)
}
}
export default connectDB;