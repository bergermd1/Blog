const crypto = require('crypto');

// TODO
function validPassword(password, hash, salt) {
    // console.log(hash);
    // console.log(salt);
    
    const hashVerify = crypto.pbkdf2Sync(password, salt, 10000, 64, 'sha512').toString('hex');
    return hash === hashVerify;
}
function genPassword(password) {
    // console.log(password);
    
    const salt = crypto.randomBytes(32).toString('hex');
    const genHash = crypto.pbkdf2Sync(password, salt, 10000, 64, 'sha512').toString('hex');

    return {
        salt: salt,
        hash: genHash,
    }
}

module.exports.validPassword = validPassword;
module.exports.genPassword = genPassword;