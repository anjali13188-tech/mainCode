import express from "express"
import { register, login } from "../controllers/usersControllers.js"
//ROTES INSTANCE//
const router = express.Router()
//API//
//http://localhost:4040/api/v1/users/register
router.route("/register").post(register)

// http://localhost:4040/api/v1/users/login
router.route("/login").post(login)


export default router