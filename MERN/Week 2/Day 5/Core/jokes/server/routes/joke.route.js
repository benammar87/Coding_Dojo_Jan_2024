const JokesController = require("../controllers/jokes.controller")


module.exports=(app)=>{
    app.get("/api/jokes", JokesController.getALL)
    app.get("/api/jokes/:id" , JokesController.getOne)
    app.post("/api/jokes/new", JokesController.create)
    app.patch("/api/jokes/:id" , JokesController.update)
    app.delete("/api/jokes/:id" , JokesController.delete)

}