const User = require("../models/users");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const signinUser = async(req,res) => {
    const { email, password } = req.body
    //check for user email
    const user = await User.findOne({ email })

    if(user && (await bcrypt.compare(password, user.password))){
        return res 
            .status(200)
            .json({
                _id: user.id,
                name: user.name,
                email: user.email,
                isAdmin : user.isAdmin,
                token : generateToken(user._id)
        })
    }else {
        return res
            .status(400)
            .send("Invalid  credentials.")
    }
}

//Generate JWT
const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_KEY, {
        expiresIn : '30d',
    })
}

module.exports = {
    signinUser
}