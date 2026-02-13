import jwt from "jsonwebtoken"
import "dotenv/config"

//isAunthenticated//
export const isAuthenticated = async (req, res, next) => {
    try {
        const token = req.cookies?.token
        if (!token) {
            return res.status(401).json({
                message: "TOKEN NOT PROVIDED!!",
                success: false
            })
        }
        const decoded = jwt.verify(token, process.env.JWT_TOKEN)
        // console.log(decoded)
        if (!decoded) {
            return res.status(401).json({
                message: "INVALID TOKEN",
                success: false
            })
        }
        req.user = decoded._id
        next()

    } catch (error) {
        // console.log(error)
        return res.status(401).json({
            message: "AUTHENTICATION FAILED",
            success: false
        })

    }

}