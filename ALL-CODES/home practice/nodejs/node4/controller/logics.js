import testmodel from "../models/testmodel.js"

export const getApi = (req, res) => {
    // res.send("get api works!!!!!!!!!!")
    res.status(200).json({ message: "API IS WORKING" })
}

export const putApi = (req, res) => {
    res.send("put api is working")
}
export const postApi = async (req, res) => {
    const users = testmodel({

        name: "sobha",
        city: "punjab",
        age: 54,
        email: "sobha@0987gmail.com",

    })
    await users.save()
    res.json({
        success: true,
        message: " new records added!!!!"
    })

}