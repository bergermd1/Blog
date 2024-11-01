const { Router } = require('express');
const router = Router();
const controller = require('../controllers/controller');

router.get('/', controller.indexGet);
router.get('/posts', controller.postsGet);
router.get('/posts/:postId', controller.postGet);
// router.get('/addComment', controller.addCommentGet)
router.post('/comment', controller.addCommentPost)
router.get('/login', controller.loginGet);
router.get('/addPost', controller.addPostGet);

// router.get('/posts', controller.postsGet);
// router.post('/posts', controller.postsPost);
// router.get('/posts/:postId', controller.postGet); 
// router.put('/posts/:postId', controller.postPut); 
// router.delete('/posts/:postId', controller.postDelete); 

// router.get('/posts/:postId/comments', controller.commentsGet); 
// router.post('/posts/:postId/comments', controller.commentsPost);
// router.get('/posts/comments/:commentId', controller.commentGet); 
// router.put('/posts/comments/:commentId', controller.commentPut); 
// router.delete('/posts/comments/:commentId', controller.commentDelete);

module.exports = router;