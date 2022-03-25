const Joke = require("../models/jokes.model");
module.exports.testResponse = (req, res) =>{
    res.json({message:"testing"})
}

module.exports.findAll = (req,res) => {
    Joke.find({})
    .then(results => res.json(results))
    .catch(err => res.status(400).json({message:"Broken findall", err}))
}
module.exports.newJoke = (req,res) => {
    Joke.create(req.body)
    .then(results =>res.json(results))
    .catch(err => res.status(400).json({message: "Broken create", err}))
}
module.exports.findOne = (req,res) => {
    Joke.findOne({_id: req.params._id})
    .then(results => res.json(results))
    .catch(err => res.status(400).json({message: "Broken findOne", err}))
}
module.exports.deleteOne = (req,res) =>{
    Joke.deleteOne({_id: req.params._id})
    .then(results => res.json(results))
    .catch(err => res.status(400).json({message: "Broken delete", err}))
}
module.exports.updateOne =(req,res) =>{
    Joke.updateOne({_id: req.params._id}, req.body)
    .then(results =>res.json(results))
    .catch(err => res.status(400).json({message: "Broken update", err}))
}