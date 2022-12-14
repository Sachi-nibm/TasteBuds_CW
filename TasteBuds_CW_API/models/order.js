// File Name - order.js
// File Desc - order Model
// Create By - Sachini Perera - 05/10/2022 
const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
        foodID : {
            type : mongoose.Schema.Types.ObjectId,
            require : true,
            ref : 'Food',
        },
    
        quantity : {
            type : Number ,
            require : true,
        },
    
        price : {
            type : Number,
            default: 0,
        },
    
        imagePath: {
            type: String,
        },
        totalQty: {
        type: Number,
        default: 0,
        required: true,
        },
        totalCost: {
        type: Number,
        default: 0,
        required: true,
        },
        title: {
            type: String,
            required: true,
        },
        user : {
            type : mongoose.Schema.Types.ObjectId,
            require : true,
            ref : 'User',
        },

        createdDate: {
            type : Date,
            default : Date.now
        },
});

module.exports = mongoose.model("Order",orderSchema);