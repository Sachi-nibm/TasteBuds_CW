const asyncHandler = require('express-async-handler')
const Food = require('../models/food')
const Outlet = require('../models/oultet')

// @desc     Get Foods
// @route    GET /api/foods
const getFoods = asyncHandler(async (req, res) => {
    let requestedID = req.params.id
    let outlet = await Outlet.findById(requestedID)
    let ID = outlet.outletID
    console.log(ID)
    let food = await Food.find({outletID : ID})
    console.log(food)
    if(!food){
        return res
            .status(404)
            .send({ message:"Outlet you are looking for does not exist."})
    }
    return res
        .status(200)
        .send(food); 
})


module.exports = { getFoods }