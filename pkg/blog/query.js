const data = require('../../db/db_blogs.json');

const MAX = data.length;

function getAll(quantity=10){
    if(Number.isNaN(quantity) || quantity <= 0){
        return [];
    }

    let resArray = [];
    for(let i=0; i<Math.min(quantity, MAX); i++){
        resArray.push(data[i]);
    }

    return resArray;
}

function searchByAuthor(myAuthor){
    let mydata = data.filter((blog) => {
        if(blog.author == myAuthor){
            return blog;
        }
    });

    return mydata;
}

module.exports.getAll = getAll;
module.exports.searchByAuthor = searchByAuthor;