'use strict';
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const Groups = require('./Groups');
const User = require('./User');
mongoose.connect(
    'mongodb://localhost:27017/barbuddies',
    { useNewUrlParser: true, useCreateIndex: true, }
);
mongoose.connection.on('error', console.error.bind(console, 'connection error: '));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());

app.post('/api/user/create', (req, res) => {
  console.log('successful connect')
    const user = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        DOB:req.body.DOB,
        gender:req.body.gender,
        weight:req.body.weight,
        height:req.body.height,
        email:req.body.email,
        password:req.body.password,
        userID:req.body.userID,
        groupID:req.body.groupID
    });
    user.save( (err) => {
      if (err) return res.status(404).send({message: err.message});
      return res.send({ user });
    });
  });

  app.post('/api/groups/create', (req, res) => {
    const group = new Groups({
        GroupID:req.body.GroupID,
        UserID:req.body.UserID
    });
    group.save( (err) => {
      if (err) return res.status(404).send({message: err.message});
      return res.send({ group });
    });
  });


const PORT = 5000;

app.listen(PORT);
console.log('api running on port ' + PORT + ': ');