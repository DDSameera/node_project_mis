const jwt = require('jsonwebtoken');
const authConfigs = require('../config/auth-configs');
const jwtTokenKey = authConfigs.jwtTokenKey;
const jwtTokenExpireTime = authConfigs.jwtTokenExpireTime;

const encryptorSecretKey = authConfigs.encryptorSecretKey;
const encryptor = require('simple-encryptor')(encryptorSecretKey);




module.exports.createToken = (userObject) => {
    let userDetails = {
        email: userObject.email,
        first_name: userObject.first_name,
        last_name: userObject.last_name
    };

    let jwtToken = jwt.sign(userDetails, jwtTokenKey,{expiresIn: jwtTokenExpireTime});
    let encryptedToken = encryptor.encrypt(jwtToken);

    return encryptedToken;

}


