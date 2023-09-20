import express from 'express'
import { registerController } from '../controllers/portfolioController.js'
// import { sendEmailController } from '../controllers/portfolioController.js'



//Router 
const router = express.Router()

//Routes
router.post("/register",registerController)

// router.post("/sendEmail",sendEmailController)

export default router