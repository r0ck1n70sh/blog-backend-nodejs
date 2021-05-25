const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const user = express.Router();

const { auth } = require('../pkg/user/auth');

user.use(session({
    secret: 'user_key',
    name: 'user_key_ID',
    saveUninitialized: false,
    resave: false,
    user: {
        loggedIn: false ,
        username: ''
    }
}));

user.get('/', (req, res) => {
    res.send('User Page');
});

user.use(bodyParser.urlencoded({
    extended: true
}));

user.use(bodyParser.json());

user.post('/login', (req, res) => {
    const {username, password} = req.body;
    const {status} = auth({username, password});

    if(status == 'authorized'){
        req.session.user = {
            loggedIn: true,
            username: username
        };
    }

    res.json({
        status: status 
    })
});


module.exports = { user, session };