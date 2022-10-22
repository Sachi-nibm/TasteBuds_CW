const asyncHandler = require('express-async-handler')
const Outlet  = require("../models/oultet");
const wishlist = require("../models/wishlist");

 const getWishlists = asyncHandler(async(req,res) => {
    try {
        let cart = await wishlist.find({user : req.params.id})
        if (!cart) {
            return res
                .status(404)
                .send({meesage : "The cart you request does not exist"});
        }
        return res.send(cart);
    } catch (ex) {
        return res
            .status(500)
            .send({message : ex.message});
    }
});


const newWishlists = asyncHandler(async(req,res) => {
        let userID = req.body.userID
        let outletID = req.body.outletID
        console.log(userID, outletID)
        if (!userID || !outletID) {
            return res.status(400).send("Please send the all values");
        }
        let outlet = await Outlet.findOne({ _id: outletID })
            console.log("outlet")
            let newWishlist = new wishlist({
                itemID: outletID,
                name:outlet.name,
                imgPath: outlet.picture,
                address: outlet.address,
                rating : outlet.rating,
                user: userID
            })
            try {
                wish = await newWishlist.save();
                return res.status(200).send(wish);
            } catch (err) {
                return res.status(500).send(err.message);
            }
});

const deletWishlist = asyncHandler(async(req,res) => {
    let wishlist = await wishlist.findOneAndDelete({_id : req.params.id})
    try {
        if (!wishlist)
          return res
            .status(404)
            .send("The outlet you request to delete,not found");
        return res.status(200).send(wishlist);
      } catch (err) {
            return res
                .status(500)
                .send(err.message);
      }
});

module.exports = {
    getWishlists,
    newWishlists,
    deletWishlist
}
