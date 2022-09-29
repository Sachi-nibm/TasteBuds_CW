const asyncHandler = require('express-async-handler')
const Food = require('../models/food')

// @desc     Get Foods
// @route    GET /api/foods
const getFoods = asyncHandler(async (req, res) => {
    const foods = await Outlet.find()
    res.status(200).json(foods)
})




module.exports = {
    getFoods,
}