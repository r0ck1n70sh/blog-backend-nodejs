const data = require('../../db/db_users.json');

function auth({username, password} = {}) {
    const user = data.filter( (user) => {
        if(user.username == username)
            return user;
    });

    const PASSWORD = (user.length != 0) ? user[0].password : undefined;

    let status;
    if(PASSWORD == password){
        status = 'authorized';
    }
    else if(PASSWORD !== undefined){
        status = 'incorrect_password';
    }
    else{
        status = 'user_not_found';
    }

    return {
        username: username,
        status: status
    };
}

 // console.log(JSON.stringify( auth({username: '', password: 'na'}) ));

module.exports = { auth }