const ProductController = require("../controllers/products.controller")


module.exports=(app)=>{
    app.get("/api/products", ProductController.getALL)
    app.post("/api/products", ProductController.create)
    app.patch("/api/products/:id" , ProductController.update)
    app.delete("/api/products/:id" , ProductController.delete)
    app.get("/api/products/:id" , ProductController.getOne)
}