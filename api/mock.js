const e = require('express');
const prisma = require('./prisma');

// console.log(prisma);

async function main() {
    await prisma.comment.deleteMany();
    await prisma.post.deleteMany();
    await prisma.user.deleteMany();

    await prisma.user.createMany({
        data: [
            {
                username: 'a',
                isAuthor: false,
                hash: '',
                salt: '',
            },
            {
                username: 'b',
                isAuthor: false,
                hash: '',
                salt: '',
            },
            {
                username: 'c',
                isAuthor: false,
                hash: '',
                salt: '',
            },
        ]
    })

    const userID1 = await prisma.user.findUnique({
        where: {
            username: 'a',
        },
        select: {
            id: true,
        }
    })
    const userID2 = await prisma.user.findUnique({
        where: {
            username: 'b',
        },
        select: {
            id: true,
        }
    })

    // console.log(userID1,' ' , userID2);
    

    await prisma.post.createMany({
        data: [
            {
                title:'First post!',
                text:'This is my first post :)',
                authorId: userID1.id,
                isPublished:false, 
            },
            {
                title:'Second!',
                text:`Well I'm second`,
                authorId: userID2.id,
                isPublished:false, 
            },
            {
                title:'Fuck off',
                text:'(Fuck off)',
                authorId: userID1.id,
                isPublished:false, 
            },
        ]
    })

    const postId = await prisma.post.findFirst({
        where: {
            title: 'Fuck off',
        },
        select: {
            id: true,
        }
    })

    await prisma.comment.createMany({
        data: [
            {
                text: 'No you fuck off',
                postId: postId.id,
                authorID: userID2.id,
            },
            {
                text: 'No you!',
                postId: postId.id,
                authorID: userID1.id,
            },
        ]
    })
}

main();