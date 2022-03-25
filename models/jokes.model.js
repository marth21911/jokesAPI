const mongoose = require ("mongoose");

const JokesSchema = new mongoose.Schema({
    setup: {
        type:String,
            required: [true, "I don't see a joke"],
            minLength: [10, "Joke must be at least 10 characters"]
        },
    punchline:{
        type: String,
            required: [true, "Wheres the punchline?"],
            minLength: [3, "Punchline needs 3 characters"]
    }, 
},{timestamps:true})

const Joke = mongoose.model ("Joke", JokesSchema)
module.exports= Joke