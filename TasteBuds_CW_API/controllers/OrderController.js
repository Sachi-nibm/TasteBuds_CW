// File Name - OrderController
// File Desc - Order Controller
// Create By - Sachini Perera - 05/10/2022


const asyncHandler = require('express-async-handler')
const User = require("../models/users");
const Food  = require("../models/food");
const order = require("../models/order");

//Function Name - getAllOrders
//Function Desc - View All Orders
const getAllOrders= asyncHandler(async(req,res) => {
    try {
      let cart = await order.find();
      if (!cart) {
        return res
          .status(404)
          .send({ meesage: "The request cart details does not exist" });
      }
      return res.send(cart);
    } catch (ex) {
      return res.status(500).send({ message: ex.message });
    }
  });
  
//Function Name - getOrders
//Function Desc - View Order
 const getOrders = asyncHandler(async(req,res) => {
  try {
      let cart = await order.find({user : req.params.id})
      if (!cart) {
          return res
              .status(404)
              .send({meesage : "The request cart details does not exist"});
      }
      return res.send(cart);
  } catch (ex) {
      return res
          .status(500)
          .send({message : ex.message});
  }
});

//Function Name - newOrder
//Function Desc - Add new order to cart
const newOrder = asyncHandler(async (req, res) => {
    let userID = req.body.userID
    let foodID = req.body.foodID
    let quantity = req.body.quantity
    console.log(userID, foodID)

    if (!userID || !foodID) {
        return res.status(400).send("Please enter the required values");
    }

    let cart = await order.findOne({ user: userID })
    console.log(cart)
    let food = await Food.findOne({ _id: foodID })
        console.log("food")
        let newOrder = new order({
            foodID: foodID,
            title : food.name,
            quantity: quantity,
            price: food.price,
            imagePath: food.picture,
            totalQty: quantity,
            totalCost: food.price * quantity,
            user: userID
        })
        try {
            cart = await newOrder.save();
            return res.send(cart);
        } catch (err) {
            return res.status(500).send(err.message);
        }});
//Function Name - deletOrder
//Function Desc - Delete order from cart
const deletOrder = asyncHandler(async(req,res) => {
        try {	
          let cart = await order.findOneAndDelete(
            { $pull: { items: { _id: req.params.id }}});	

            if (!cart)	
              return res	
                .status(404)	
                .send("Requested item not found");	
            return res.status(200).send(cart);
      } catch (err) {
        console.log(err)	
            return res
                .status(500)
                .send(err.message);
      }
});

module.exports = {
    getOrders,
    getAllOrders,
    newOrder,
    deletOrder
}
