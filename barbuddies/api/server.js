//use strict makes it so no undeclared variables
'use strict';
//requiring the application to use these parts
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
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
//connection string of mongodb
const uri = 'mongodb://admin:WCUDXfYazacbMAto@SG-barbuddies-21203.servers.mongodirector.com:27017/admin';
//calls on the uri and checks that it works and sets it to a variable
const mongoClient = new MongoClient(uri, { useNewUrlParser: true });
mongoClient.connect((err, db) => { // returns db connection
  if (err != null) {
    console.log(err)
    return
  }
  client = db
});

//log in request and status code
const logRequestStart = (req, res, next) => {
  console.info(`${req.method} ${req.originalUrl} | ${res.statusCode}`);
  next();
};
app.use(logRequestStart);
//gets the users and outputs a json list of users
app.get('/users', async (req, res) => {
  let user = await User.find({});
  res.json(user);
})
//gets the groups and output a json list of groups
app.get('/groups', async (req, res) => {
  let group = await Groups.find({});
  res.json(group)
})
//creates a json list of the one user 
app.get('/users/:id', async (req, res) => {
  const user = await User.findById(req.params.id);
  res.json(user);
});
//calls the user based off of the email given outputs a json list
app.get('/users/email', async (req, res) =>{
  const user = await User.findById(req.params.email);
  res.json(user);
})
//auth post request which checks the provided password against the hashed password and lets user in if
//password matches
app.post('/api/user/auth/', async (request, response) => {
  console.log('succesful connect in auth')
  let db = client.db('admin')
  let users = db.collection('users')
  let userEmail = request.body.email
  let userPassword = request.body.password
    users.find({email: userEmail}).toArray((err, userDetails) => {
      console.log("user pw: " + userPassword)
      console.log("user details: " + userDetails[0].password)
      bcrypt.compare(userPassword, userDetails[0].password, function(err, res) {        
        if (res) {
          console.log("matched")
          response.send({user : userDetails[0]})
          return response.data
        } else {
          console.log("did not match")
        }
    }) 
  })
})

//finds the user inside of the database using a query
app.get('/users/find,', async (req, res) => {
  let db = client.db('admin')
  let users = db.collection('users')
  users.find({email: req.body.email, password: req.body.password}).toArray((err, user) => {
    console.log(user)
    userId = user._id.toString()
    console.log("userId is " + userId)
    mondule.exports = userId
  })
  const user = await User.findById(req.params.id);
  res.json(user);
})
//updates the user given their object id provided
app.post('/api/user/update/:id', (req, res) => {
  console.log('successful connect')
  User.findByIdAndUpdate(req.params.id, req.body.data , { new: true }, (err, user) => {
    if (err) return res.status(404).send({message: err.message});
    return res.send({ message: 'user updated!', user });
  });
});
//creates a brand new user with provided information
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
        password: bcrypt.hashSync(req.body.password, 10)
    });
    user.save( (err) => {
      if (err) return res.status(404).send({message: err.message});
      return res.send({ user });
    });
  });
//FOR FUTURE USE
/*app.post('/api/group/event', (req, res) => {
  console.log('successful connect4')
  let db = client.db('admin')
  let groups = db.collection('groups')
  let userEmail = req.body.email
  let Event = req.body.Events
  groups.find({UserID: userEmail}).toArray((err, user) => {
    user.Groups.Event.push(Event)
    return
  })
  });
*/




app.post('/api/group/create', (req, res) => {
  console.log('successful connect2')
    const group = new Groups({
      groupName: req.body.groupName,
      UserID: req.body.UserID,
      Events: req.body.Events
  });
  group.save((err) =>{ 
    if (err) return res.status(404).send({message: err.message});
    return res.send({ group });
  });
});
//finds the groups a user is in and then provides and object which can be accessed outside
app.post('/api/group/find', (request, response) =>{
  console.log('successful connect3')
  let db = client.db('admin')
  let groups = db.collection('groups')
  let userEmail = request.body.email
  console.log("here " + userEmail)
  groups.find({UserID: userEmail}).toArray((err, user) => {
    let groupName = user
    console.log(groupName)
    response.send({Group: user})
    return response.data
  });
});
//makes sure the app is listening on port 5000
mongoose.connect(uri, {useNewUrlParser: true}).then(() => {
  app.listen(5000);
});
