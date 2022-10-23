const asyncHandler = require('express-async-handler')
const Food = require('../models/food')
const Outlet = require('../models/oultet')
const jwt = require("jsonwebtoken");

// @desc     Get Foods (Alternative)
// @route    GET /api/foods
const getFoods = asyncHandler(async (req, res) => {
    const foods = await Food.find()
    res.status(200).json(foods)
})

// @desc     POST Food
// @route    POST /api/foods
const postFood = asyncHandler (async(req,res)=>{
    try{
        let newFood = new Food({
            outletID : req.body.outletID,
            name : req.body.name,
            price : req.body.price,
            description : req.body.description,
            rating : req.body.rating,
            picture :req.body.picture,
        })
        
        newFood = await newFood.save();
        return res
            .status(200)
            .send(newFood);
     }catch(ex){
        return res
            .status(500)
            .send({ message:"Error occure. Please check the log."});
     }
 })

// @desc     DELETE Food
// @route    DELETE /api/foods/id
const deleteFood = asyncHandler(async(req,res) =>{
    const token = req.header("x-jwt-token");
    if(!token){
        console.log("Access Denide. No Token")
        return res
            //.status(401)
            .send({message :"Access Denide. No Token"})
    }
    try{
        jwt.verify(token, process.env.JWT_KEY)
    }catch(e){
        return res
            //.status(400)
            .send(e)
    }

    let decoded = jwt.decode(token, process.env.JWT_KEY);
    if(!decoded.isAdmin){
        console.log("Forbidden - No Authorizations")
        return res
        //.status(403)
        .send({message :"Forbidden - No Authorizations"})
    }    

    try{
        let requestedID = req.params.id;
        let food = await Food.findById(requestedID);
        if(!food){
            return res
                .send("Food you are looking for does not exist")
        }
        await food.remove()
        res.json(food);
    } catch(ex){
        return res
            .send("Error : ", ex);
    }
    
})

const getFood = asyncHandler(async(req,res) => {
    let requestedID = req.params.id;
    let food = await Food.findById(requestedID); 
    if(!food){
        res.status(404)
        throw new Error('Food you are looking for does not exist')
    }
    return res.status(200).json(food);
})

module.exports = {
    getFoods,
    postFood,
    deleteFood,
    getFood,
}