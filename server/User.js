const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        minLength: 3,
        maxLength: 24,
        validate: {
            validator: v => !v.includes("@"),
            message: props => `${props.value} is not allowed as a user name.`
        }
    },
    email: {
        type: String,
        required: true,
        lowercase: true
    },
    bio: String,
    photo: String,
    friends: [{
        type: mongoose.SchemaTypes.ObjectId,
        ref: "User"
    }],
    favouriteSharks: [{
        type: mongoose.SchemaTypes.ObjectId,
        ref: "Shark"
    }],
    joined: {
        type: Date,
        immutable: true,
        default: () => Date.now()
    }
})

module.exports = mongoose.model("User", userSchema)
