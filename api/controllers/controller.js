// const db = require('../db/queries');
const prisma = require('../prisma');
const genPassword = require('../lib/passwordUtils').genPassword
const passport = require('passport');
// const multer = require('multer');
// const upload = multer({dest:'uploads/'});

exports.indexGet = (req, res, next) => {
    res.render('index');
}

exports.loginGet = (req, res, next) => {
    res.render('login');
}

exports.addPostGet = (req, res, next) => {
    res.render('addPost');
}

exports.postsGet = async (req, res, next) => {
    // res.render('posts');
    
    const posts = await prisma.post.findMany();
    return res.send(posts);
}
exports.postsPost = async (req, res, next) => {
    const post = await prisma.post.create({
        data: {
            title: req.body.title,
            text: req.body.text,
            authorId: 1,/////
            isPublished: false,
        }
    })

    
    return res.send(post);
}
exports.postGet = async (req, res, next) => {
    const post = await prisma.post.findUnique({
        where: {
            id: parseInt(req.params.postId),
        }
    });
    return res.send(post);
}
exports.postPut = async (req, res, next) => {
    const post = await prisma.post.update({
        where: {
            id: req.params.postId,
        },
        data: {
            title: req.body.title,
            text: req.body.text,
        }
    })
    return res.send(post);
}
exports.postDelete = async (req, res, next) => {
    const post = await prisma.post.delete({
        where: {
            id: req.params.postId,
        }
    })
    return res.send(post);
}

exports.commentsGet = async (req, res, next) => {
    const comments = await prisma.comment.findMany({
        where: {
            postId: parseInt(req.params.postId),
        }
    })
    return res.send(comments);
}
exports.commentsPost = async (req, res, next) => {
    console.log('yeahhh');
    
    console.log(req.body);
    console.log(req.body.postId);
    
    const comment = await prisma.comment.create({
        data: {
            text: req.body.text,
            postId: parseInt(req.body.postId),
            authorID: 1/////
        }
    })
    console.log(comment);
    
    return res.send(comment);
}
exports.commentGet = async (req, res, next) => {
    
    const comment = await prisma.comment.findUnique({
        where: {
            id: parseInt(req.params.commentId),
        }
    })
    return res.send(comment);
}
exports.commentPut = async (req, res, next) => {
    const comment = await prisma.comment.update({
        where: {
            id: parseInt(req.params.commentId),
        },
        data: {
            text: req.body.text,
            // postId: parseInt(req.params.postId),
            // authorID: 1/////
        }
    })
    return res.send(comment);
}
exports.commentDelete = async (req, res, next) => {
    const comment = await prisma.comment.delete({
        where: {
            id: parseInt(req.params.commentId),
        }
    })
    return res.send(comment);
}






// exports.logoutGet = (req, res, next) => {
//     req.logout(err => {
//         if (err) {
//             return next(err);
//         }
//         res.redirect('/');
//     })
// }

// exports.registerGet = (req, res, next) => {
//     res.render('register');
// }
// exports.registerPost = async (req, res, next) => {
//     const saltHash = genPassword(req.body.password);

//     const salt = saltHash.salt;
//     const hash = saltHash.hash;

//     await prisma.user.create({
//         data: {
//             username: req.body.username,
//             hash: hash,
//             salt: salt,
//         },
//     })

//     res.redirect('/');
// }

// exports.foldersGet = async (req, res, next) => {
//     let folders;
//     let files;
    

//     if (!req.params.id) {
//         folders = await prisma.folder.findMany({
//             where: {
//                 name: 'root',
//             },
//             select: {
//                 children: true,
//             }
//         })
//         files = await prisma.file.findMany({
//             where: {
//                 location: 'root',
//             }
//         })
//     } else {
//         folders = await prisma.folder.findMany({
//             where: {
//                 id: parseInt(req.params.id),
//             },
//             select: {
//                 id: true,
//                 folderName: true,
//                 children: true
//             }
//         })
//         files = await prisma.file.findMany({
//             where: {
//                 folderId: parseInt(req.params.id),
//             }
//         })
//     }
    
    
    
    
//     res.render('folders', {folders:folders, files: files});
// }
// exports.addFolderPost = async (req, res, next) => {
//     await prisma.folder.create({
//         data: {
//             name: req.body.folderName,
//             location: req.body.location,
//             folderName: req.body.folderName,
//             parentId: parseInt(req.body.parentId),
//         }
//     })
//     // this.foldersGet();
// }
// exports.addFilePost = async (req, res, next) => {
//     const location = req.body.location === '' ? 'root' : req.body.location;
//     let parentId;
//     if (req.body.parentId === '') {
        
//         parentId = await prisma.folder.findUnique({
//             where: {
//                 // id:167,
//                 nameLocation: {
//                     name: 'root',
//                     location: 'root',
//                 }
//                 // AND: [
//                 //     {name: 'root'},
//                 //     {location: 'root'},
//                 // ]
//             },
//             select: {
//                 id: true,
//             }
//         });
//         parentId = parentId.id
//     } else {
//         parentId = req.body.parentId;
//     }
//     .log(parentId);
    
//     await prisma.file.create({
//         data: {
//             name: req.file.originalname,
//             location: location,
//             size: req.file.size,
//             // folderId: parseInt(parentId),
//             storageName: req.file.filename,
//             folder: {
//                 connect: {
//                     id: parseInt(parentId),
//                 }
//             }
//         }
//     })
//     res.send('File submitted')
// }

// exports.addGet = (req, res, next) => {
//     res.render('add');
// }
// exports.uploadFile = upload.single('file');
// exports.addPost = (req, res, next) => {
    
//     res.send('File submitted')
// }

// // exports.listGet = async (req, res) => {
// //     const results = await db.getAllTvShows();
// //     res.render('list', await getGenresAndChannels(results));
    
// // }