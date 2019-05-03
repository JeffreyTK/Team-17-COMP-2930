const express = require('express');
const app =express();
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const Users = require('/Users/jeffreykuo/barbuddies/Team-17-COMP-2930/barbuddies/client/server/src/Users');
const Groups = require('/Users/jeffreykuo/barbuddies/Team-17-COMP-2930/barbuddies/client/server/src/Groups');

mongoose.connect('mongodb+srv://jeffrey:<jeffreyk1>@barbuddies-3qt3h.mongodb.net/test?retryWrites=true',
    { useNewUrlParser: true, useCreateIndex: true, }
);
mongoose.connection.on('error', console.error.bind(console, 'connection error: '));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());

app.get('/Users/jeffreykuo/barbuddies/Team-17-COMP-2930/barbuddies/client/server/src/Users/create', (req, res) => {
    Users.find({}).sort({updatedat: 'descending'}).exec((err, users) =>{
        if (err) return res.status(404).send('Error while getting users!');
    return res.send({users});
    });
});

app.post('/Users/jeffreykuo/barbuddies/Team-17-COMP-2930/barbuddies/client/server/src/Users/update/:id', (req, res) => {
    let options = { new: true};
    Users.findByIdAndUpdate(req.params.id, req.email.data, options, (err, users) => {
        if (err) return res.status(404).send({message: err.message});
        return res.send({ message: 'email updated!', users });
    })
})

const PORT = 5000;
app.listen(PORT);
console.log('api runnging on port ' + PORT + ': ');
