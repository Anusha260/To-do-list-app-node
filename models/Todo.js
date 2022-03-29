const mongoose = require("mongoose");


const Todo = new mongoose.Schema({
    task: {
        type: String,
        required: true,
        trim: true,
        maxlength: 60,
    },
    completionDatetime: {
        type: String,
        require: true
    },
    iscompleted: {
        type: Boolean
    }
}, { timestamps: true });

module.exports = mongoose.model("Todo", Todo);