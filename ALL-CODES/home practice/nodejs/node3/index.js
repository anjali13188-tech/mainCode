import express from "express"
//======== intance of an express=========

const one= express()

//======API============//
//GET API// http://localhost:4999/
one.get("/",(req,res)=>{
    res.send("GET API IS WORKING")
})

//POST API// http://localhost:4999/add
one.post("/add",(req,res)=>{
    res.send("POST API IS WORKING")
})

//PUT API// || http://localhost:4999/update
 one.put("/update",(req,res)=>{
    res.send("PUT API IS WORKING")
 })

 //DELETE API// || https:localhost:4999/delete
 one.delete("/delete",(req,res)=>{
    res.status(201).send({message:"DELETE API IS WORKING"})
 })












one.listen(4999,
    ()=>console.log("server is serving"))
