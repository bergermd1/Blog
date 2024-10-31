const prisma = require('./prisma');

async function main() {
    await prisma.user.deleteMany({
        
    })
}

main();