const asyncHandler = require('express-async-handler')
const User = require("../models/users");
const Food  = require("../models/food");
const Outlet  = require("../models/oultet");
const wishlist = require("../models/wishlist");

 const getWishlists = asyncHandler(async(req,res) => {
    try {
        let cart = await wishlist.findOne({user : req.params.id})
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
    if( !req.body.user || !req.body.outletID){
        return res
            .status(400)
            .send("To continue the process please login...!")
    }

    let cart = await User.findOne({user : req.body.user})
    if(!cart){
        let item = await Outlet.findOne({_id : req.body.outletID })
        let newWishlist = new wishlist({
            outletID : req.body.outletID,
            name : item.name,
            picture : item.picture,
            user : req.body.user
        });
        try{
            cart = await newWishlist.save();
            return res
                .status(200)
                .send(cart);
        }catch(ex){
            return res
                .status(500)
                .send(err.message);
        }
    } else {
        let item = await wishlist.findOne({"Items.outletID" : req.body.outletID}, {user : req.body.user});
        let cart = await wishlist.findOne({user : req.body.outletID});
        let outlet = await Outlet.findOne({_id : req.body.outletID }); 

        let newItem = {
            outletID : req.body.outletID,
            name : outlet.name,
            picture : outlet.picture,
        }

        cart.Items.push(newItem);

        try {
            cart = await cart.update(cart);
              return res
                .status(200)
                .send(cart);
        } catch (err) {
            return res
                .status(500)
                .send(err.message);
        }
    }
});

const deletWishlist = asyncHandler(async(req,res) => {
    let cart = await wishlist.findOne({user : req.params.id})
    try {
        cart = await wishlist.findOneAndUpdate(
          { user: req.params.user },
          { $pull: { items: { _id: req.params.id } } }
        );
        cart.Items.pull({ _id: req.params.id });
        if (!cart)
          return res
            .status(404)
            .send("The Item you request to delete,not found");
        return res.send(cart);
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
