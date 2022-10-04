const User = require("../models/users");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const signinUser = async(req,res) => {
    //const { email, password } = req.body
    let user = await User.findOne({ email: req.body.email });
    console.log(req.body.email, req.body.password);
    //check for user email
    //const user = await User.findOne({ email })
    console.log(req.body.email, req.body.password);
    if(user && (await bcrypt.compare(req.body.password, user.password))){
        console.log(user);
        return res 
            .status(200)
            .json({
                _id: user.id,
                name: user.name,
                email: user.email,
                isAdmin : user.isAdmin,
                token : generateToken(user._id)
                
        })
        console.log(name,email)
    }else {
        return res
            .status(400)
            .send({ message:"Invalid  credentials."})
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