import express from"express"
// instance of an express
const app = express()

//// ==========API================//

//GET API//
// //http://localhost:3899/add/
app.get("/",(req,res)=>{
    res.send("get api working..........!")
})

//post API//
//http://localhost:3899/add
app.post("/add",(req,res)=>{
    res.send("post api working")
})

//PUT API //
// http://localhost:3899/update

app.put("/update",(req,res)=>{
    res.send("updat post working")
})
//DELETE API//
//http://localhost:3899/delete
app.delete("/delete",(req,res)=>{
    res.send("delete api working!!!!")
})

app.listen(3899,()=>console.log("server is running!!!!"))