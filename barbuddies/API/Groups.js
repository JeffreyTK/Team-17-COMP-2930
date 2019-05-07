const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const GroupsSchema =  new Schema(
    {
        GroupID: String,
        UserID: Array
    }
);
const Groups = mongoose.model("Groups", GroupsSchema);
module.exports = Groups;