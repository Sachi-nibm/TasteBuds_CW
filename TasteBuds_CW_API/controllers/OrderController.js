// File Name - OredrController
// File Desc - OredrController
// Create By - Sachini Perera - 05/10/2022


const asyncHandler = require('express-async-handler')
const User = require("../models/user");
const Food  = require("../models/food");
const order = require("../models/order");

//Function Name - getOrders
//Function Desc - View Order
 const getOrders = asyncHandler(async(req,res) => {
    try {
        let cart = await order.findOne({user : req.params.id})
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

//Function Name - getOrders
//Function Desc - Add order to cart
const newOrder = asyncHandler(async(req,res) => {
    if( !req.body.user || !req.body.foodID){
        return res
            .status(400)
            .send("To continue the process please login...!")
    }

    let cart = await User.findOne({user : req.body.user})
    if(!cart){
        let food = await Food.findOne({_id : req.body.foodID })
        let newOrder = new order({
            foodID : req.body.foodID,
            quntity : req.body.quntity,
            price : food.price,
            imagePath : food.imagePath,
            totalQty : req.body.quntity,
            totalCost : food.price * food.price,
            user : req.body.user
        });
        try{
            cart = await newOrder.save();
            return res
                .status(200)
                .send(cart);
        }catch(ex){
            return res
                .status(500)
                .send(err.message);
        }
    } else {
        let item = await order.findOne({"Items.foodID" : req.body.foodID}, {user : req.body.user});
        let cart = await order.findOne({user : req.body.foodID});
        let food = await Food.findOne({_id : req.body.foodID }); 

        let newItem = {
            foodID : req.body.foodID,
            quntity : req.body.quntity,
            price : food.price,
            imagePath : food.imagePath,
        }

        cart.Items.push(newItem);
        cart.set({
            totalQty : cart.totalQty + req.body.qty,
            totalCost : cart.totalCost + product.price * req.body.qty,
            user: req.body.user
        })
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
//Function Name - deletOrder
//Function Desc - Delete order from cart
const deletOrder = asyncHandler(async(req,res) => {
    let cart = await order.findOne({user : req.params.id})
    try {
        cart = await order.findOneAndUpdate(
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
    getOrders,
    newOrder,
    deletOrder
}
