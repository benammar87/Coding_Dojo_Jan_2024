const mongoose = require("mongoose");
require("dotenv").config();

const dbName = process.env.DB;
const username = process.env.ATLAS_USERNAME;
const pw = process.env.ATLAS_PASSWORD;

const uri = `mongodb+srv://${username}:${pw}@cluster0.ohoappx.mongodb.net/${dbName}?retryWrites=true&w=majority&appName=Cluster0`


mongoose
    .connect(uri)
    .then(()=>console.log("etablished connection to the database"))
    .catch((err)=>
console.log("something went wrong" , err));

module.exports =mongoose ;