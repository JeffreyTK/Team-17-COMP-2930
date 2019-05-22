const mongoose = require("mongoose");
const Schema = mongoose.Schema;
//creates a user schema for the user
//constructor of the user schema
const UserSchema = new Schema(
    {
        firstName: String,
        lastName: String,
        DOB: String,
        gender: String,
        weight: Number,
        height: String,
        email: String,
        password: String,
        groupID: Array
    }
);
//sets it so that the model is accessible outside
const User = mongoose.model("User", UserSchema);
//exports the user variable to be used outside
module.exports = User;