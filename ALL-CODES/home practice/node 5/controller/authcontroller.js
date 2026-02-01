import userModel from "../model/authmodel.js"
import bcrypt from "bcryptjs"

export const Register = async (req, res) => {
    try {
        const { name, email, password } = req.body
        if (!name || !email || !password) {
            return res.status(400).json({ message: "all fields are required" })
        }
        //  console.log("ookkkkk")
        const exisitingUser = await userModel.findOne({ email: req.body.email })
        if (exisitingUser) {
            return res.status(409).json({ message: "already registered !!!!!" })
        }
        else {
            const user = new userModel({
                name, email,
                password: bcrypt.hashSync(req.body.password, 13)
            })

            await user.save()
            return res.status(201).json({
                success: true,
                message: "successfuly registration",
                user
            })
        }

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error while  resgistering!!!!"
        })
    }

}


export const login = async (req, res) => {
    try {
        const { email, password } = req.body
        if (!email, !password)
            res.status(404).json({
                success: false,
                message: "Email and Password both are required!!!"
            })

               
                     
        const user = await userModel.findOne({ email: req.body.email })

        if (!user)
            res.status(400).json({
                success: false,
                message: "User not found",
                error
            })

            else{
                const match= bcrypt.compare(req.body.password,user.password)
                if(!match)
              {
                  res.status(201).json({
                    success:false,
                    message:"password is not matched"
                })
              }
                else{
                    res.status(200).json({
                        success:true,
                        message:"Login Successfully!!!!"
                    })
                }

            }


    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error while login",
            error
        })

    }
}


