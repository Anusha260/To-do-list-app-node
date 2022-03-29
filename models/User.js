const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({

    email: {
        type: String,
        required: true,
        unique: true
    },
    Username: {
        type: String,
        require: true,
        unique: true

    },

    password: {
        type: String,
        required: true
    },
    avatar: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now
    }
});
const User = mongoose.model("user", userSchema)
module.exports = User;