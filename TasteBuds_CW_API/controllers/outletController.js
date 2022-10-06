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

// @desc     Add New Outlet
// @route    POST /api/outlets
const newOutlet = asyncHandler(async(req,res) =>{
    let id =  req.body.outletID
    let outletID = await Outlet.findOne({id })
    if(!req.body.outletID || !req.body.name || !req.body.address || !req.body.picture ){
        return res 
        .status(400)
        .send({ message:"Please fill the required flieds"})
    }
    else if(req.body.name.length <3 || req.body.address.length < 5){
        return res
        .status(400)
        .send({ message: "Please Provide the Correct details."})
    } 
    if(outletID){
        return res  
            .status(400)
            .send({ message: "Outlet ID already exisit."})
    }
    let newOutlets = new Outlet ({
        outletID : req.body.outletID,
        name : req.body.name,
        address : req.body.address,
        rating : req.body.rating,
        picture : req.body.picture,
    });
    try{
        newOutlets = await newOutlets.save();
        return res
            .status(200)
            .send(newOutlets);    
   } catch(ex){
    return res
        .status(500)
        .send("Error", ex.message);
   }
})

// @desc     Remove Specific Outlet
// @route    DELETE /api/outlets/id
const deletOutlet = asyncHandler(async(req,res) => {
    let requestedOutlet = req.params.id;
    let outletID = await Outlet.find({"outletID" : requestedOutlet})
    try{
        let outlet = await Outlet.findByIdAndDelete(outletID); 
        if(!outlet){
            return res
                .status(400)
                .send("Food you are looking for does not exist")
        }
        return res
            .status(200)
            .send(`Successfully removed : ${outletID}`);
    }catch(ex){
        return res
            .status(500)
            .send(ex.message);
    }
})





module.exports = {
    getOutlets,
    newOutlet,
    deletOutlet,
    getOutletsID
}