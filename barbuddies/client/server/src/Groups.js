const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const GroupsSchema = Schema(
    {
        groupId: {type: Number, required: true},
        userId: {type: Number, requried: true}
    },
);
const Groups = mongoose.model("Groups", GroupsSchema);
module.exports = Groups;