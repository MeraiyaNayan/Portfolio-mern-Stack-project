import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import colors from 'colors'
import  portfolioRoutes from './routes/portfolioRoute.js'
import connectDB from './config/db.js'
import path from 'path'



// dotenv Configuartion

dotenv.config();

connectDB();
//Rest Object 
const app=express();

//Middle Wares
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname,'./client/build')))
//Routes 
app.use("/api/v1/portfolio",portfolioRoutes)

app.get('*',function(req,res){
    res.sendFile(path.join(__dirname,'./client/build/index.html'))
})
// app.get("/",(req,res)=>{
//     res.send("Api Is Running")
// });

//port

const PORT = process.env.PORT || 8080;
app.listen(PORT,()=>{ 
    console.log(`Server Running This Port ${process.env.PORT}`.bgMagenta.white)})