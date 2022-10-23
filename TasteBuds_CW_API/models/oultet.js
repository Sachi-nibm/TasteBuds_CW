const mongoose = require("mongoose");

const outletSchema = new mongoose.Schema({
    outletID : {
        type : Number ,
        require : true,
    },

    name : {
        type : String,
        require : true,
        minlength: 3,
        maxlength: 50
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

    picture : {
        type: String,
        required: true
    },

    isActive : {
        type : Boolean,
        default : true
    }
}, {
    timestamps : true
}
);

module.exports = mongoose.model("Outlet",outletSchema);