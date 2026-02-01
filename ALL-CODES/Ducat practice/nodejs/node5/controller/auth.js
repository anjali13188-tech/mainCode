import userModel from "../model/usermodel.js"
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import "dotenv/config"

export const register = async (req, res) => {
    try {
        const { name, email, password } = req.body
        if (!name || !email || !password) {
            return res.status(400).json({ message: " All feilds are requried!!!" })
        }
        const existingUser = await userModel.findOne({ email: req.body.email })
        if (existingUser) {
            return res.status(200).json({ message: "Already resgister. Go for login!!!" })
        }
        else {
            const user = new userModel({
                name,
                email,
                password: bcrypt.hashSync(req.body.password, 12),
                //  photo:req.file.filename
            

            })

            await user.save()

            return res.status(201).json({
                success: true,
                message: "Registration success",
                user: {
                    _id: user._id,
                    name: user.name,
                    email: user.email
                }
            });

        }
    }

    catch (error) {
        res.status(500).json({
            sucess: false,
            message: " error  in registering!!!!",
            error
        })

    }
}

export const login = async (req, res) => {
    try {
        const { email, password } = req.body
        if (!email || !password) {
            return res.status(400).json({   
                message: "EMAIL AND PASSWORD ARE REQUIRED !!!"
            })
        }

        const user = await userModel.findOne({ email: req.body.email })
        if (!user) {
            return res.status(401).json({
                success: false,
                message: "USER NOT FOUND!!!!"
            })
        }
        else {
            const match = await bcrypt.compare(req.body.password, user.password)
            if (!match) {
                return res.status(401).json({
                    message: "invalid credentials"
                })
            }

            const token = jwt.sign({ _id: user?._id }, process.env.JWT_SECRET_TOKEN, { expiresIn: "2h" })
            // console.log(token)

            if (token) {
                return res.status(201).json({
                    success: true,
                    message: "Loging success!!!!!!",
                    user: {
                        _id: user?._id,
                        name: user?.name,
                        email: user?.email

                    },
                    token

                })
            }


        }
    }
    catch (error) {
        res.status(500).json({
            sucess: false,
            message: "error while login ",
            error

        })

    }
}

export const profile = async (req, res) => {
    try {
        const user = await userModel
            .findOne({ _id: req?.user })
            .select("-password")

        res.status(200).json({
            success: true,
            message: "Profile page",
            user
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: " Error in profile page"


        })
    }
}