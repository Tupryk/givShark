const mongoose = require("mongoose");

const sharkSchema = new mongoose.Schema({
    name: String,
    science_name: {
        type: String,
        required: true
    },
    bio: String,
    photo: String,
    weight: {
        max_: Number,
        min_: Number,
    },
    size: {
        max_: Number,
        min_: Number,
    }
})

module.exports = mongoose.model("Shark", sharkSchema)
