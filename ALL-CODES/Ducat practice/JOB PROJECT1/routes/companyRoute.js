import express from "express"
import { registerCompany } from "../controllers/companycontrollers.js"
import { isAuthenticated } from "../middlewares/midleware.js"

const router = express.Router()
//API POST 
//http://localhost:4040/api/v1/company/create
router.route("/create").post(isAuthenticated,registerCompany)

export default router
