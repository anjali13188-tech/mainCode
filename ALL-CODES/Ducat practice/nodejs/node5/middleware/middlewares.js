import "dotenv/config"
import jwt from "jsonwebtoken"

export const isSignIn = async (req, res, next) => {
    const token = req.headers['authorization'] && req.headers['authorization'].split(' ')[1];
    if (!token) {
        return res.status(401).json({
            message: " Access Denied: No token provide"

        })
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET_TOKEN)
        // console.log(decoded)
        req.user = decoded
        next()

    } catch (error) {
        res.status(401).json({
            success: false,
            message: "Invalid token or expired",
            error
        })

    }
}









