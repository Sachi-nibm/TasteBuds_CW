const asyncHandler = require('express-async-handler')
const Outlet = require("../models/oultet");

// @desc     Get Outlets
// @route    GET /api/outlets
const getOutlets = asyncHandler(async (req, res) => {
    const outlets = await Outlet.find()
    res.status(200).json(outlets)
})

// @desc     Get Specific Outlets
// @route    GET /api/outlets
const getOutletsID = asyncHandler(async(req,res) => {
    let requestedOutlet = req.params.id;
    let outlet = await Outlet.findById(requestedOutlet); 
    if(!outlet){
        res.status(404)
        throw new Error('Outlet you are looking for does not exist')
    }
    return res.status(200).json(outlet);
})

module.exports = {
    getOutlets,
    getOutletsID
}