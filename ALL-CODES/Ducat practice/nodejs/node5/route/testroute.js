import express from"express"
import { register,login,profile } from "../controller/auth.js"
import upload from "../middleware/upload.js";
import { isSignIn } from "../middleware/middlewares.js"
const router = express.Router()

   //API///

   //http://localhost:7890/api/v2/node5/register
  //  router.route("/register").post(register)
  router.post("/register",upload.single("photo"),register)

  //http://localhost:7890/api/v2/node5/login
    router.route("/login").post(upload.single("photo"),login)

   //http://localhost:7890/api/v2/node5/profile
   router.route("/profile").get(isSignIn,profile)

  export default router
