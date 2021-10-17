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

module.exports.verifyToken = (request, response, nextFun) => {

let authorization = request.headers.authorization
    if (authorization) {

        try {
            let decryptedToken = encryptor.decrypt(authorization);
            let result = jwt.verify(decryptedToken, jwtTokenKey);

            if (result) {
               nextFun();
            } else {
                response.send('Token is invalid');
            }
        } catch (error) {
            response.send('Token is invalid');
        }


    } else {
        response.send('Authorization Failed');
    }
}
