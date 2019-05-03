const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const UserSchema = Schema(
    {
        userId: {type: Number, required: true},
        firstName: {type: String, required: true},
        lastName: {type: String , required: true},
        email: {type: String, required: true},
        DOB: {type: Number, required: true},
        password: {type:String , required: true},
        groupId: {type: Number, requried: true}
    },
);
const User = mongoose.model("User", UserSchema);
module.exports = User;