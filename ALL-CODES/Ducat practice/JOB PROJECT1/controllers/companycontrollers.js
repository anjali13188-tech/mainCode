import companyModel from "../models/companyModels.js"


//Create company
export const registerCompany = async (req, res) => {
    try {
        const { name } = req.body
        // const user  = await userModel.findById(req.user)
        // not found 
        if (!name) {
            return res.status(404).json({
                message: "COMPANY NAME IS REQUIRED",
                success: false
            })
        }
        //already registered company
        const existingCompany = await companyModel.findOne({ name: name })
        if (!existingCompany) {
            res.status(400).json({
                message: "COMPANY CANT BE REGISTERED WITH THE SAME NAME!!!!",
                success: false
            })
        }
        
        // adding company 
        const company = new companyModel({
            name: name,
            userId: user._id

        })
        await company.save()
        res.status(201).json({
            success: true,
            message: " COMPANY REGISTERED SUCCESSFULLY ",
            company
        })

    } catch (error) {
        res.status(500).json({
            sucess: false,
            message: "ERROR WHILE CREATING COMPANY",
            error
        })
    }
}

