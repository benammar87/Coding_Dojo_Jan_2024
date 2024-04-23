const express = require("express");
const app = express();
const port = 5000;
const { faker } = require('@faker-js/faker');



app.get("/api/user/new" , (req , res)=>{
    const newUser = {
        password : faker.internet.password(),
        email : faker.internet.email(),
        phoneNumber : faker.phone.number(),
        firstName : faker.person.firstName(),
        lastName : faker.person.lastName(),
        _id : faker.database.mongodbObjectId()
    }
    console.log(newUser)
    res.json(newUser)
})

app.get("/api/company/new" , (req, res)=>{
    const newCompany = {
        _id : faker.database.mongodbObjectId(),
        name : faker.company.name(),
        street : faker.location.street(),
        city : faker.location.city(), 
        state : faker.location.state(),
        zipCode : faker.location.zipCode(),
        country : faker.location.country(),
    }
    console.log(newCompany)
    res.json(newCompany)
})

app.get("/api/user/company" , (req, res)=>{

    const newUser = {
        password : faker.internet.password(),
        email : faker.internet.email(),
        phoneNumber : faker.phone.number(),
        firstName : faker.person.firstName(),
        lastName : faker.person.lastName(),
        _id : faker.database.mongodbObjectId()
    }
    const newCompany = {
        _id : faker.database.mongodbObjectId(),
        name : faker.company.name(),
        street : faker.location.street(),
        city : faker.location.city(), 
        state : faker.location.state(),
        zipCode : faker.location.zipCode(),
        country : faker.location.country(),
    }

    const data = {
        user : newUser,
        company : newCompany
    }

    res.json(data)
})





// The import line will look different than what is in Faker's documentation
// because we are working with an express application

// we can create a function to return a random / fake "Product"
const createProduct = () => {
    const newFake = {
        name: faker.commerce.productName(),
        price: "$" + faker.commerce.price(),
        department: faker.commerce.department()
    };
  
    return newFake;
};
    
const newFakeProduct = createProduct();
console.log(newFakeProduct);
/*
 * The output of the above console log will look like this
 * {
 *   name: 'Anime Figure',
 *   price: '$568.00
 *   department: 'Tools' 
 * }
 */

    
// req is shorthand for request
// res is shorthand for response
app.get("/api", (req, res) => {
    res.json({message:" Hello from the server" });
});





app.listen( port, () => console.log(`Listening on port: ${port}`) );