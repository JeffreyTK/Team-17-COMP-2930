//use strict makes it so no undeclared variables
'use strict';

//requiring the application to use these parts
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const passport = require("passport")
const LocalStrategy = require('passport-local').Strategy
//links the variable groups to require the file groups
const Groups = require('./Groups');

//links the variable user to rquire the file user
const User = require('./User');

//connection between the application and mongoose using the locahost
mongoose.connect(
    'mongodb://localhost:27017/barbuddies',

    //checks the url and makes sure that it works
    { useNewUrlParser: true, useCreateIndex: true, }
);

//error checking in case of failed connection it'll let us know in the terminal
mongoose.connection.on('error', console.error.bind(console, 'connection error: '));

//uses the bodyparser for json
app.use(bodyParser.json());

//body parses the url
app.use(bodyParser.urlencoded({extended:true}));

//app uses middleware that connects express to the application
app.use(cors());
app.use(cookieSession({
  name: 'mysession',
  keys: ['vueauthrandomkey'],
  maxAge: 24 * 60 * 60 * 1000
}))
app.use(passport.initialize());
app.use(passport.session());
app.post("/api/login", (req, res ,next) => {
  passport.authenticate("local", (err, user, info) => {
    if (err) {
      return next(err);
    }
    if(!user) {
      return res.status(400).send([user, "Cannot log in", info]);
    }

    req.login(user, err => {
      res.send('logged in');
    });
  })(req, res , next);
});
app.get("/api/logout", function (req, res){
  req.logout();
  console.log("logged out")
  return res.send();
});

app.get("/api/user", authMiddleware, (req, res) => {
  let user = user.find(user =>{
    return user.id === req.session.passport.user
  })
  console.log([user, req.session])

  res.send({user: user})
})
const authMiddleware = (req, res, next) => {
  if(!req.isAuthenticated()){
    res.status(401).send('You are not authenticated')
  } else {
    return next()
  }
} 
//first creating the url for the website to submit a req/res to
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

  app.get('/api/users/:id', async (req, res) => {
    const user = await User.findById(req.params.id);
    res.json(user);
  });

//server port at 5000
const PORT = 5000;

//let the app listen for port 5000
app.listen(PORT);
console.log('api running on port ' + PORT + ': ');