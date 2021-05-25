const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const blog = express.Router();

const query_db = require('../pkg/blog/query'); 
const create_db = require('../pkg/blog/create');

blog.use(session({
    secret: 'user_key',
    name: 'user_key_ID',
    saveUninitialized: false,
    resave: false
}));

blog.use(bodyParser.urlencoded({
    extended: true
}));

blog.use(bodyParser.json());

blog.get('/', (req, res) => {
    const quantity = req.query.quantity;
    const data = query_db.getAll(quantity);
    res.json({...data});
});

blog.post('/', (req, res) => {
    const {title, body, author} = req.body;
    const {username, loggedIn} = req.session.user;

    if(username === author){
        res.json(create_db.add_blog({title, body, author}));
    } else {
        res.json({status: 'author not loggedId'});
    }
    
})


module.exports = {blog, session};