import testModel from "../models/testModel.js"

  export const getApicontroller=async(req,res)=>{
        // res.send("get api is running")
        const users= await testModel.find()
        res.status(200).json({
          sucess:true,
        users})
     }
     export const deleteApicontroller= async (req,res) =>{
         await testModel.findByIdAndDelete({_id:req.params._id})
          res.status(200).json({
            message:" record deleted!!!!"
          })
     }

     export const postApicontroller= async(req,res)=>{
      // console.log(req.body.name)
        const {name,email,city} = req.body

        //  const user = new testModel({
        //   name,email,city
        // })
 
        // await user.save()
        const user = await testModel.create({
          name,email,city
        }) 
        res.json({
          sucess: "true",
          message:"added new recordes!!!!",
          user
        })
     }
     
      export const putApicontroller= async(req,res)=>{
        const user= await testModel.findByIdAndUpdate(
        {_id:req.params._id},
        {
          $set:{
            name:req.body.name,
            city:req.body.city,
            email:req.body.email
          }
        },
        {new:true}
      )
        res.status(201).json({
          success:true,
             message:"updated new recordes!!!!",
        })
       
      }