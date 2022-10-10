const mongoose = require("mongoose");

const wishlistSchema = new mongoose.Schema({
    Items : [{
        itemID : {
            type : mongoose.Schema.Types.ObjectId,
            require : true,
            ref : 'Outlet',
        },

    
        imgPath: {
            type: String,
        },
    }],

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