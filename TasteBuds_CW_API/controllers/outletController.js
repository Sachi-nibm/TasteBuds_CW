const asyncHandler = require('express-async-handler')
const Outlet = require("../models/outlet");

// @desc     Get Outlets
// @route    GET /api/outlets
const getOutlets = asyncHandler(async (req, res) => {
    const outlets = await Outlet.find()
    res.status(200).json(outlets)
})





module.exports = {
    getOutlets,
}