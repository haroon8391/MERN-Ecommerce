require("dotenv").config();
const mongoose = require("mongoose");

const conn = () => {
    try {
        mongoose.connect(process.env.MONGO_URI)
        console.log("Database Connected.");
    }
    catch (err) {
        console.log("Error connecting to database!");
    }
}

module.exports = conn();