// const { log } = require('console');
// const db = require('../db/queries');
const prisma = require('../prisma');
const genPassword = require('../lib/passwordUtils').genPassword
const passport = require('passport');
// const multer = require('multer');
// const upload = multer({dest:'uploads/'});

exports.indexGet = (req, res, next) => {
    res.render('index');
}
exports.postsGet = (req, res, next) => {
    res.render('posts');
}

// exports.loginGet = (req, res, next) => {
//     res.render('login');
// }
// exports.validate = passport.authenticate(
//     'local',
//     {
//         failureRedirect: '/login-failure',
//         // successRedirect: '/login-success',
//     }
// )
// exports.loginPost = (req, res, next) => {
//     // console.log(req.body.username);
//     res.render('index')
// }

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
//     console.log(req.body);
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
//     // console.log(req.params);
    

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
//     console.log(files);
//     // console.log(folders[0].children[0].location);
//     // console.log(files);
    
    
//     // console.log(req.params);
    
//     // console.log(folders[0].children);
    
//     res.render('folders', {folders:folders, files: files});
// }
// exports.addFolderPost = async (req, res, next) => {
//     console.log(req.body);
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
//     console.log(req.file);
//     console.log(req.body);
//     const location = req.body.location === '' ? 'root' : req.body.location;
//     let parentId;
//     if (req.body.parentId === '') {
//         console.log('yeah');
        
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
//     console.log(parentId);
    
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
//     console.log(req.file);
    
//     res.send('File submitted')
// }

// // exports.listGet = async (req, res) => {
// //     const results = await db.getAllTvShows();
// //     console.log(await getGenresAndChannels(results));
// //     res.render('list', await getGenresAndChannels(results));
    
// // }