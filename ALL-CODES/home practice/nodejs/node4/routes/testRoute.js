import express from "express"
import { getApi, postApi, putApi } from "../controller/logics.js"
//insance of router//

const router = express.Router()
//API// || http://localhost:3333/api/v1/node4/add
router.get("/",getApi)
router.put("/add",putApi)
 http://localhost:3333/api/v1/node4/update
router.post("/update",postApi)
export default router