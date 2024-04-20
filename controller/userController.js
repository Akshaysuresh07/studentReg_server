const users = require("../model/users")

exports.register = async (req, res) => {
    const { firstName, lastName, address, email, gender, mobile, password, dob, course } = req.body
    console.log(firstName, lastName, address, email, gender, password, dob, course)
    try {
        const existingUser = await users.findOne({ email })
        if (existingUser) {
            return res.status(400).json("User already exists")
        }
        const newUser = new users({
            firstName, lastName, address, email, gender,mobile, password, dob, course
        })
        await newUser.save()
        res.status(200).json(newUser)

    } catch (error) {
        res.status(406).json(error)

    }

}
exports.displayUsers = async (req, res) => {
    try {
        const allUsers=await users.find()
        res.status(200).json(allUsers)
        console.log(allUsers);
        
    } catch (error) {
        res.status(406).json(error)
        
    }

}