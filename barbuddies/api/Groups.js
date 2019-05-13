//Requiring mongoose to be used
const mongoose = require("mongoose");
//Creating a schema using mongoose instantiating a constructor
const Schema = mongoose.Schema;
//creating the layout of the constructor
const GroupsSchema =  new Schema(
    {
        //declaring what types of properties
        GroupID: String,
        UserID: Array
    }
);
//linking the groupschema to a variable
const Groups = mongoose.model("Groups", GroupsSchema);
//exporting groups to be used in other files
module.exports = Groups;
