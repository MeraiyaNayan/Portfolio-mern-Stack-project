
// import nodemailer from 'nodemailer'
// import sendgridTransport from 'nodemailer-sendgrid-transport'

import userModel from "../model/userModel.js"

// import { hashPassword } from "../helper/authHelper.js"

// import userModel from "../model/userModel.js"

//transport
// const transporter = nodemailer.createTransport(
// sendgridTransport({
//     auth:{
//         api_key:process.env.API_SENDGRID,
//     }
// })
// )
// export const sendEmailController = async (req,res)=>{
// try{
//     const{name,email,msg}=req.body 
//     if(!name || !email || !msg){
//         return res.status(500).send({
//             success:false,
//             message:"Please Provide All Fields"
//         })
//     }
//     const exuser= await userModel.find({email})
//     if(exuser){
//         return res.status(400).send({
//             success:true,
//             message:"Already User Msg Send"
//         })
//     }
//     const user = await userModel({email,msg,name}).save()
//     if(user){
//         return res.status(400).send({
//             success:true,
//             message:"Your Data SuccessFully Submited",
//             user
//         })
//     }

    //email 
    // transporter.sendMail({
    //     to:'youremail@gmail.com',
    //     from:"youremail@gmail.com",
    //     subject:"Regarding Mern Portfolio App",
    //     html:`
    //     <h5>Details Information </h5>
    //     <ul>
    //     <li><p>Name : ${name}</p></li>
    //     <li><p>Email: ${email}</p></li>
    //     <li><p>Message: ${msg}</p></li>
    //     </ul>`
    // })
    // return res.status(200).send({
    //     success:true,
    //     message:"Your Message Send Successfully",

    // })
// }catch(error){
//     console.log(error)
//     return res.status(500).send({
//         success:false,
//         message:"Send Email API Error",
//         error
//     })
// }
// }


export const registerController = async (req,res)=>{
    try{
const {name,email,phone,address}=req.body 
if(!name){
    return res.send({message : "Name Is Required"})
}
if(!email){
    return res.send({message : "Email Is Required"})
}
if(!phone){
    return res.send({message : "Phone Is Required"})
}
if(!address){
    return res.send({message : "Address Is Required"})
}
const exisitingUser = await userModel.findOne({email})
if(exisitingUser){
    return res.status(200).send({
        success:false,
        message:"Already Register Please Login",
    })
}
// const hashedpassword = await hashPassword(password)
const user = await new userModel({name,email,phone,address}).save()
return res.status(201).send({
    success:true,
    message:"User Register Successfully",
    user,
})
    }catch(error){
        console.log(error)
        res.status(500).send({
            success:false,
            message:"Error In Registartion",
            error
        })
    }
}