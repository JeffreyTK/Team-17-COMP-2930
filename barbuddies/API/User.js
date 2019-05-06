const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const UserSchema = Schema(
    {
        firstName: {type: String, required = true},
        lastName: {type: String, required = true},
        DOB:{type: String, required = true},
        gender:{type: String, required = true},
        weight:{type: Number, required = true},
        height:{type: String, required = true},
        email:{type: String, required = true},
        password:{type: String, required = true},
        userID:{type:String, required = true},
        groupID:{type: String, required = true}
    }
);
const User = mongoose.model("User", UserSchema);
module.exports = User;