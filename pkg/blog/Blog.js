class Blog{
    constructor(title, body, user){
        this.title = title;
        this.body = body;
        this.author = user;
    }

 }

// let blog = new Blog('title', 'body', 'user');
// console.log(JSON.stringify( blog ));

exports.Blog = Blog;

