const JokesController = require ("../controller/jokes.controller");
const Jokes = require("../models/jokes.model");

module.exports = app => {
    app.get("/api/test", JokesController.testResponse);
    app.get("/api/jokes/findAll", JokesController.findAll);
    app.post("/api/jokes/create", JokesController.newJoke);
    app.get("/api/jokes/:_id", JokesController.findOne);
    app.delete("/api/jokes/:_id", JokesController.deleteOne);
    app.patch("/api/jokes/:_id", JokesController.updateOne);

}