const fs = require('fs');
const { join } = require('path');
const Blog = require('./Blog').Blog;

const DATABASE= require('../../settings').DATABASE;
const FILE = join(DATABASE, '/db_blogs.json');

function add_blog({title, body, author}){
    let blog = new Blog(title, body, author);
    let data = fs.readFileSync(FILE, 'utf-8');
    data = JSON.parse(data);
    console.log(typeof data);
    data.push(blog);
    data = JSON.stringify(data);
    
    fs.writeFileSync(FILE, [ data ], {
        spaces: 4
    });

    return { status: '' };
}

let res = add_blog({
    title: 'test', 
    body: 'test',
    author: 'test'
}) 
|| { status : 'nothing' };

console.log(JSON.stringify(res));
//console.log(file);

module.exports.add_blog = add_blog;