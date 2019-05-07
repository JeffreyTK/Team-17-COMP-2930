const mongoose = require("mongoose");
const Schema = mongoose.Schema;
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
        userID: String,
        groupID: Array
    }
);
const User = mongoose.model("User", UserSchema);
module.exports = User;