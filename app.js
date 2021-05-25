const express = require('express');
const app = express();
const {session} = require('./views/user');

const {user} = require('./views/user');
const {blog} = require('./views/blog');

const PORT = 3000 || process.env.port;

app.use(session({
    secret: 'user_key',
    name: 'user_key_ID',
    saveUninitialized: false,
    resave: false
}));

app.use('/user', user);
app.use('/blog', blog);

app.get('/', (req, res) => {
    let user = {
        loggedIn: false,
        username: 'NA'
    };

    if(req.session.user && req.session.user.loggedIn){
        user = req.session.user;
    }
    
    console.log(JSON.stringify(req.session));
    res.json(user);
});

app.listen(PORT, () => {
    console.log(`server running on PORT:${PORT}...`);
})