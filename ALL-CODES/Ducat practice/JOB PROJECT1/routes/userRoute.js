import express from "express"
import { register, login,updateProfile, logout } from "../controllers/usersControllers.js"
import { isAuthenticated } from "../middlewares/midleware.js"
//ROTES INSTANCE//
const router = express.Router()
//API//
//http://localhost:4040/api/v1/users/register
router.route("/register").post(register)

// http://localhost:4040/api/v1/users/login
router.route("/login").post(login)

// http://localhost:4040/api/v1/users/logout
router.route("/logout").post(logout)

// http://localhost:4040/api/v1/users/profile
router.route("/profile").put(isAuthenticated,updateProfile)


export default router