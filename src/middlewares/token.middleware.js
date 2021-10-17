const jwt = require("jsonwebtoken");
const authConfigs = require("../config/auth-configs");

const encryptorSecretKey = authConfigs.encryptorSecretKey;
const encryptor = require('simple-encryptor')(encryptorSecretKey);

const jwtTokenKey = authConfigs.jwtTokenKey;



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

            let isExpire = error.hasOwnProperty('expiredAt');

            if (isExpire){
                response.send('Token is expired');
            }
            response.send('Token is invalid');
        }


    } else {
        response.send('Authorization Failed');
    }
}