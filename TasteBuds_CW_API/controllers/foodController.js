const asyncHandler = require('express-async-handler')
//const Food = require('../models/food')

// @desc     Get Foods
// @route    GET /api/foods
const getFoods = asyncHandler(async (req, res) => {
    const foods = await Outlet.find()
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
            .send({ message:"Error : ", ex});
     }
 })

// @desc     DELETE Food
// @route    DELETE /api/foods/id
const deleteFood = asyncHandler(async(req,res) =>{
    let requestedID = req.params.id;
    let foodID = await Food.find({"foodID":requestedID});
    try{
        let food = await Food.findByIdAndDelete(foodID);
        if(!food){
            return res
                //.status(404)
                .send("Food you are looking for does not exist")
        }
        res.send(outlet);
    } catch(ex){
        return res
            //.status(500)
            .send("Error : ", ex);
    }
})



module.exports = {
    getFoods,
    postFood,
    deleteFood
}