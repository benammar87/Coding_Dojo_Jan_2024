const mongoose = require("mongoose")

const JokeSchema = new mongoose.Schema({
    setup : {
    type:String ,
    required:[true , "{PATH} is required"],
    minlength : [10,"{PATH} must be at least 10 characters" ]
    },
    punchline : {
        type:String ,
        required:[true , "{PATH} is required"],
        minlength : [3,"{PATH} must be at least 3 characters" ]
        },
}, {timestamps : true})

module.exports.Joke = mongoose.model("Joke", JokeSchema);