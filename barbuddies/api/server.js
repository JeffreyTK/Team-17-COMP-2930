//use strict makes it so no undeclared variables
'use strict';
//requiring the application to use these parts
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
//links the variable groups to require the file groups
const Groups = require('./Groups');
//links the variable user to rquire the file user
const User = require('./User');
//connection between the application and mongoose using the locahost
const MongoClient = require('mongodb').MongoClient;
//error checking in case of failed connection it'll let us know in the terminal
mongoose.connection.on('error', console.error.bind(console, 'connection error: '));
mongoose.set('useFindAndModify', false);
//uses the bodyparser for json
app.use(bodyParser.json());
//body parses the url
app.use(bodyParser.urlencoded({extended:true}));
//app uses middleware that connects express to the application
app.use(cors());
//first creating the url for the website to submit a req/res to
var client;
//const uri = 'mongodb://garbageuser:garbage1@ds031328.mlab.com:31328/garbage';
const uri = 'mongodb://admin:WCUDXfYazacbMAto@SG-barbuddies-21203.servers.mongodirector.com:27017/admin';
const mongoClient = new MongoClient(uri, { useNewUrlParser: true });
mongoClient.connect((err, db) => { // returns db connection
  if (err != null) {
    console.log(err)
    return
  }
  client = db
});

const logRequestStart = (req, res, next) => {
  console.info(`${req.method} ${req.originalUrl} | ${res.statusCode}`);
  next();
};
app.use(logRequestStart);

app.get('/users', async (req, res) => {
  let user = await User.find({});
  res.json(user);
})

app.get('/groups', async (req, res) => {
  let group = await Groups.find({});
  res.json(group)
})

app.get('/users/:id', async (req, res) => {
  const user = await User.findById(req.params.id);
  res.json(user);
});

app.get('/users/email', async (req, res) =>{
  const user = await User.findById(req.params.email);
  res.json(user);
})

//the repository doesnt even get to this funciton but this hsould be right

app.get('/api/user/auth/:id', async (req, res) => {
  console.log('successful connect')
  let user = await User.findById(req.params.id, req.params.email, req.params.password);
  let id = ObjectId(req.params.id).str;
  res.json(id);
})

app.post('/api/user/update/:id', (req, res) => {
  console.log('successful connect')
  User.findByIdAndUpdate(req.params.id, req.body.data , { new: true }, (err, user) => {
    if (err) return res.status(404).send({message: err.message});
    return res.send({ message: 'user updated!', user });
  });
});

app.post('/api/user/create', (req, res) => {
  console.log('successful connect')

  //creates the new user based off of schema created in users
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

    //saves the user and on error display error message
    user.save( (err) => {
      if (err) return res.status(404).send({message: err.message});
      return res.send({ user });
    });
  });

app.post('/api/group/create', (req, res) => {
  console.log('successful connect2')
    const group = new Groups({
      groupName: req.body.groupName,
        GroupID: req.body.GroupID,
        UserID: req.body.UserID
  });

  group.save((err) =>{ 
    if (err) return res.status(404).send({message: err.message});
    return res.send({ group });
  });
});

mongoose.connect(uri, {useNewUrlParser: true}).then(() => {
  app.listen(5000);
});
