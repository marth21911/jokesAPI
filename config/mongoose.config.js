const mongoose = require ("mongoose");
//import mongoose. this is db config

mongoose.connect("mongodb://localhost/jokes", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
//connects to the mongoDB of choice?

    .then(()=> console.log("connected"))
    //works
    .catch(err=> console.log ("connection error", err))
    //doesnt work