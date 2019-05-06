const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const GroupsSchema = Schema(
    {
        GroupID:{type:String, required = true},
        UserID:{type:Array, required = true}
    }
);
const Groups = mongoose.model("Groups", UserSchema);
module.exports = Groups;