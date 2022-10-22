const mongoose = require("mongoose");

const wishlistSchema = new mongoose.Schema({
        itemID : {
            type : mongoose.Schema.Types.ObjectId,
            require : true,
            ref : 'Outlet',
        },
        name : {
            type : String,
            require : true,
        },
        imgPath: {
            type: String,
        },
        address : {
            type : String,
            require : true,
            minlength: 5,
            maxlength: 100
        },
        rating : {
            type : [Number],
            enum : [1,2,3,4,5]
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

module.exports = mongoose.model("Wishlist",wishlistSchema);