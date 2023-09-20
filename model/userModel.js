// import mongoose from "mongoose";
// const userSchema = new mongoose.Schema({
//     name:{
//         type:String,
//         require:true,
//         trim:true
//     },
//     email:{
//         type:String,
//         require:true,
//         unique:true
//     },
//     msg:{
//         type:String,
//         require:true
//     },
// },{})

// export default mongoose.model("users",userSchema)
import mongoose from "mongoose";

 const userSchema = new mongoose.Schema({
name:{
    type:String,
    require:true,
    trim:true
},
email:{
    type:String,
    require:true,
    unique:true
},
phone:{
    type:String,
    require:true
},
address:{
    type:{},
    require:true
},
},{timestamps:true})


export default mongoose.model("users",userSchema)