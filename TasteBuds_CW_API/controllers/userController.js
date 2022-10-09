const User = require("../models/users");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const registerUser = async(req,res) =>{
    const name = req.body.name
    const email = req.body.email
    const password = req.body.password
    const isAdmin = req.body.isAdmin
    const userExist = await User.findOne({email})
    // { name, email, password, isAdmin }
    if(!name || !email || !password){
        console.log("Please fill the all Required Fileds.")
        return res  
            .status(400)
            .send({ message: "Please fill the all Required Fileds."})
        
            
    }else
   // check if user exist 
    if(userExist){
        console.log("User already exisit.")
        return res  
            .status(400)
            .send({ message: "User already exisit."})
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
            .send({ message: "Invalid User Data"}) 
    }
}

//Generate JWT
const generateToken = (id) => {
    return jwt.sign({id},process.env.JWT_KEY, {
        expiresIn : '30d',
    })
}

const viewUser = async(req,res) =>{ 
    try{
        let user = await User.find();
        return res
            .status(200)
            .send(user);
   } catch(ex){
    return res.status(500).send("Error", ex.message);
   }
}

const oneUser = async(req,res) =>{ 
    let requesteName = req.params.id;
     let user = await User.findById(requesteName); 
     if(!user){
         return res
             .status(404)
             .send({ message:"Outlet you are looking for does not exist."})
     }
     return res
         .status(200)
         .send(user);
}

const deleteUser = async(req,res) =>{ 
    let requestedID = req.params.id;
    //let outletID = await Outlet.find({"outletID" : requestedOutlet})
    try{
        let user = await User.findByIdAndDelete(requestedID); 
        if(!user){
            return res
                .status(400)
                .send("Food you are looking for does not exist")
        }
        return res
            .status(200)
            .send({ message: "Successfully removed"});
    }catch(ex){
        return res
            .status(500)
            .send(ex.message);
    }
}

module.exports = {
    registerUser,
    viewUser,
    oneUser,
    deleteUser
}