const assert = require('assert');
const Blog = require('../../pkg/blog/Blog').Blog;

const title = 'Test Title';
const body = 'This is a Test body for Test blog post';
const user = {userId: 'TestUserId'};

let testBlog = new Blog(title, body, user);
let expectBlogObj = {
    title: title,
    body: body,
    author: user.userId
};

try {
    assert.deepEqual(expectBlogObj, testBlog.getJSON);
} catch(err) {
    console.log('Blog class not working as expected!');
}