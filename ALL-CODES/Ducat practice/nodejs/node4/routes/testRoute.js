import express from"express"
import { deleteApicontroller, getApicontroller, postApicontroller }
 from "../TESTCONTROLLER/logics.js"
//INSTANCE OF AN ROUTER//

const router = express.Router()
//API//
// http://localhost:6789/api/v1/nodejs/
router.get("/",getApicontroller)

// http://localhost:6000/api/v1/nodejs/add
router.post("/add",postApicontroller) 

//http://localhost:6789/api/v1/nodejs/delete
router.delete("/delete/:_id",deleteApicontroller)

//http://localhost:6789/api/v1/nodejs/update
router.delete("/update/:_id",deleteApicontroller)

export default router
