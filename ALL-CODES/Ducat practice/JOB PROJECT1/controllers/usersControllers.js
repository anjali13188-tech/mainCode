import userModel from "../models/userModel.js"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import "dotenv/config"


//REGISTER//
export const register = async (req, res) => {
  try {
    const { name, email, password, phone, role } = req.body
    const existingUser = await userModel.findOne({ email })
    //EXISTING  USER//
    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "ALREADY REGISTER"
      })
    }
    //HASH PASSWORD//
    const saltRound = 11
    const hashedPassword = await bcrypt.hash(password, saltRound)

    const user = new userModel({
      name, email,
      password: hashedPassword,
      phone, role
    })

    //   console.log(user)
    await user.save()

    res.status(201).json({
      sucess: true,
      message: "REGISTRATION SUCCESS!!!!!",
      user
    })

  } catch (error) {
    res.status(500).json({
      success: "ERROR WHILE REGISTERING.!!!!!!",
      error
    })

  }
}

// LOGIN//
export const login = async (req, res) => {
  try {

    const { email, password } = req.body

    if (!email || !password) {

      return res.status(400).json({
        success: false,
        message: "something is missing"
      })
    }

    const user = await userModel.findOne({ email })
    // console.log(user)

    if (!user) {
      return res.status(401).json({
        success: false,
        message: "user not found!!!"

      })
    }

    const match = await bcrypt.compare(password, user.password)

    if (!match) {
      return res.status(401).json({
        success: false,
        message: "email and password is incorrect"
      })
    }

    else {
      const token = jwt.sign({ _id: user._id }, process.env.JWT_TOKEN,
        { expiresIn: "2h" })

      res.status(201).cookie("token", token,
        { maxAge: 1 * 24 * 60 * 60 * 1000, httpsOnly: true, sameSite: "strict" })
        .json({
          success: true,
          message: `Welcome  back ${user.name}`,
          token,
          user: {
            _id: user._id,
            name: user.name,
            email: user.email,
            phone: user.phone,
            role: user.role,
            profile: user.profile
          }
        })
    }

  } catch (error) {
    res.status(500).json({
      success: false,
      message: "ERROR WHILE LOGIN....",
      error

    })


  }

}

//LOGOUT//
export const logout = async (req, res) => {
  try {
    return res.status(200).cookie("token", "", { maxAge: 0 }).json({
      message: "LOGOUT SUCCESSFULLY",
      succes: true
    })

  } catch (error) {
    res.status(500).json({
      message: "ERROR WHILE LOGOUT!!!!!",
      success: false,
      error

    })

  }

}

//UPDATE PROFILE//
export const updateProfile = async (req, res) => {
  try {
    // res.send("ok profile Updated")

    const { name, email, phone, bio, skills } = req.body
    const file = req.file

    //cloudinary
    let skillsArray;
    if (skills) {
      skillsArray = skills.split(",")
    }
    // console.log(req.user)

    const user = await userModel.findById(req.user)

    if (!user) {
      return res.status(400).json({
        message: "USER NOT FOUND",
        success: false
      })
    }

    // updating user details
    if (name) { user.name = name }
    if (email) { user.email = email }
    if (phone) { user.phone = phone }
    if (bio) { user.bio = bio }
    if (skills) { user.skills = skills }

    await user.save()

    return res.status(201).json({
      success: true,
      message: "USER UPDATED SUCCESSFULLY ",
      user: {
        _id: user?._id,
        name: user?.name,
        email: user?.email,
        phone: user?.phone,
        role: user?.role,
        profile: user?.profile
      }
    })

  } catch (error) {
    res.status(500).json({
      message: "ERROR WHILE UPDATEDPROFILE.....!!!",
      sucess: false
    })

  }

}
