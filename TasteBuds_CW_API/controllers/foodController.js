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
    if(!req.body.outletID || !req.body.foodID || !req.body.name || !req.body.price || !req.body.description || !req.body.picture){
        return res
            .status(400)
            .send("Please fill the required flieds")
        }else if (req.body.name.length <3 || req.body.description.length <5 ){
            return res
                .status(400)
                .send("Please Provide the Correct details.")
        }
    let newFood = new Food({
        outletID : req.body.outletID,
        foodID : req.body.foodID,
        name : req.body.name,
        price : req.body.price,
        description : req.body.description,
        rating : req.body.rating,
        picture :req.body.picture,
    })
     try{
        newFood = await newFood.save();
        return res
            .status(200)
            .send(newFood);
     }catch(ex){
        return res
            .status(500)
            .send("Error : ", ex);
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