const express = require("express")
const cors = require("cors")
const app =express()
require("dotenv").config()
const port = process.env.port


app.use(express.json() , express.urlencoded({extended:true}) , cors())
require("./config/mongoose.config")
require("./routes/joke.route")(app)

app.listen(port , ()=>{
    console.log("listenning to port" +port)
})