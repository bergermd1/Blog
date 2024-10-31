const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
// const connection = require('./database');
const prisma = require('../prisma');
const { validPassword } = require('../lib/passwordUtils');
///not sure what this is // const User = connection.options.user;

// // console.log('yeah');
// async function f() {
//     // await prisma.user.create({
//     //     data: {
//     //         username: 'test',
//     //         hash: 'test',
//     //         salt: 'test',
//     //     },
//     // })
//     const id = await prisma.user.findUnique({
//         where: {
//             username: 'test'
//         },
//         select: {
//             id: true,
//             username: true,
//             hash: true,
//             salt: true,
//         }
//     })
//     console.log(id);
    
//     // return id;
// }
// // f();
// // const id = f();
// // console.log(id);

async function findUser(username) {    
    const user = await prisma.user.findUnique({
        where: {
            username: username,
        },
        select: {
            id: true,
            username: true,
            hash: true,
            salt: true,
        }
    })
    return user;
    // console.log(id);
    // const { rows } = await connection.query('select * from users where email = $1', [email])    
    //  return rows[0];
 }
 async function findById(id) {
    // console.log('yeah');
    const user = await prisma.user.findUnique({
        where: {
            id: id,
        },
        select: {
            id: true,
            username: true,
            hash: true,
            salt: true,
        }
    })
    return user;
    //  const { rows } = await connection.query('select * from users where user_id = $1', [userId]);
     // console.log(rows);
    //  return rows[0];
     
 }

passport.use(new LocalStrategy(
    async function(email, password, done) {
        try {
            const user = await findUser(email);
            if (!user) {
                return done(null, false);
            }
            // console.log(user);
            
            const isValid = validPassword(password, user.hash, user.salt);

            if (isValid) {
                return done(null, user);
            } else {
                return done(null, false);
            }
        }
        catch (err) {
            return done(err);
        }
    }
));

passport.serializeUser((user, done) => {
    // console.log(user);
    done(null, user.id);
})

passport.deserializeUser(async (id, done) => {
    try {
        const user = await findById(id);
        done(null, user);
    } catch (err) {
        done(err);
    }
})
