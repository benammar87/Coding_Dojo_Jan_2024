const AuthorController = require("../controllers/author.controller")


module.exports=(app)=>{
    app.get("/api/authors", AuthorController.getALL)
    app.post("/api/authors/new", AuthorController.create)
    app.patch("/api/authors/:id" , AuthorController.update)
    app.delete("/api/authors/:id" , AuthorController.delete)
    app.get("/api/authors/:id" , AuthorController.getOne)
}