const mongoose = require("mongoose")
const config = require("config")

const db = config.get("mongoURI")
    // const db = "mongodb+srv://Anusha:Anusha26@cluster0.tweuy.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

const connectDB = async() => {
    try {
        await mongoose.connect(db);
        console.log("mongoDB connected.....")

    } catch (err) {
        console.error(err.message)
            // exit process with failure
        process.exit(1)
    }
}


module.exports = connectDB;