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
