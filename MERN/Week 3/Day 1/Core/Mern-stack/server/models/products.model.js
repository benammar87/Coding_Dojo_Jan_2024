const mongoose = require("mongoose")

const ProductSchema = new mongoose.Schema({
    title : {
    type:String ,
    required:[true , "{PATH} is required"],
    minlength : [3,"{PATH} must be at least 3 characters" ]
    },
    price : {
        type:Number ,
        required:[true , "{PATH} is required"],
        },
    description : {
            type:String ,
            required:[true , "{PATH} is required"],
            minlength : [5,"{PATH} must be at least 5 characters" ]
            },
}, {timestamps : true})

module.exports.Product = mongoose.model("Product", ProductSchema);