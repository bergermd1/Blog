const { Router } = require('express');
const router = Router();
const controller = require('../controllers/controller');

router.get('/', controller.indexGet);
router.get('/posts', controller.postsGet);
// router.post('/posts', controller.postsPost);

// router.get('/', controller.indexGet);
// router.get('/login', controller.loginGet);
// router.post('/login', controller.validate, controller.indexGet);
// router.get('/logout', controller.logoutGet);
// router.get('/register', controller.registerGet);
// router.post('/register', controller.registerPost);
// router.get('/folders/:id?', controller.foldersGet)
// router.post('/folders/addFile', controller.uploadFile, controller.addFilePost)
// router.post('/folders/addFolder', controller.addFolderPost)

module.exports = router;