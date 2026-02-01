import express from "express"
import { Register,login } from "../controller/authcontroller.js"
const router =  express.Router()

 //API= http://localhost:8080/api/v1/practice/register
router.route("/register").post(Register)

//http://localhost:8080/api/v1/practice/login
router.route("/login").post(login)


export default router