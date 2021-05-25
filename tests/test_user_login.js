const https = require('https');
const PORT = 3000;

let data = JSON.stringify({
    username: 'user',
    password: 'pass'
})

let req = https.request({
    host: 'localhost',
    port:  PORT,
    method: 'POST',
    path: '/user/login',
    headers: {
        'Content-Type': 'application/json',
        'Content-Length': data.length
    }
}, (res) => {
    console.log(`Request Status: ${res.statusCode}`);

    res.on('data', d => {
        console.log(d);
    });
});

req.on('error', e => {
    console.log(e);
})

req.write(data);
req.end();