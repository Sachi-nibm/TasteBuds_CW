const User = require("../models/users");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const registerUser = async(req,res) =>{
    const{ name, email, password, isAdmin }= req.body
    if(!name || !email || !password){
        return res  
            .status(400)
            .send("Please fill the all Required Fileds.")
    }
   // check if user exist 
    const userExist = await User.findOne({email})
    if(userExist){
        return res  
            .status(400)
            .send("User already exisit.")
    }

    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    const user = await User.create({
        name,
        email,
        password : hashedPassword,
        isAdmin
    })

    if (user){
        return res .status(200)
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
            .send("Invalid User Data") 
    }
}

//Generate JWT
const generateToken = (id) => {
    return jwt.sign({id},process.env.JWT_KEY, {
        expiresIn : '30d',
    })
}

module.exports = {
    registerUser
}