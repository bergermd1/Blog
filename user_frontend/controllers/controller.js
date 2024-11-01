// const prisma = require('../prisma');
// const genPassword = require('../lib/passwordUtils').genPassword
// const passport = require('passport');

exports.indexGet = (req, res, next) => {
    // const data = fetch('http://localhost:3000/posts');
    //     data.then(response => response.json())
    //         .then(
    //             data => console.log(data)
    //         )
    // console.log(data);
    
    res.render('index');
}
exports.postsGet = (req, res, next) => {
    const data = fetch('http://localhost:3000/posts');
        data.then(response => response.json())
            .then(data => {
                    // console.log(data)
                    res.render('posts', {data:data});
                }
            )   
}

exports.postGet = async (req, res, next) => {
    const postPromise = await fetch(`http://localhost:3000/posts/${req.params.postId}`);
    const post = await postPromise.json()
    const commentsPromise = await fetch(`http://localhost:3000/posts/${req.params.postId}/comments`);
    const comments = await commentsPromise.json()
    res.render('post', {post, comments})
}

// exports.addCommentGet = (req, res, next) => {
//     res.render('addComment');
// }
exports.addCommentPost = async (req, res, next) => {
    // console.log(req.body);
    // console.log(req.params.postId);
    const text = req.body.comment;
    const postId = req.body.postId;
    console.log(text);
    console.log(postId);
    
    const commentPromise = await fetch(`http://localhost:3000/posts/${postId}/comments`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify({text, postId})
    })
    res.redirect(`/posts/${postId}`);
}


exports.loginGet = (req, res, next) => {
    res.render('login');
}

exports.addPostGet = (req, res, next) => {
    res.render('addPost');
}