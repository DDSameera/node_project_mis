const jwt = require('jsonwebtoken');
const authConfigs = require('../config/auth-configs');


const encryptorSecretKey = authConfigs.encryptorSecretKey;
const encryptor = require('simple-encryptor')(encryptorSecretKey);


module.exports.createToken = (userObject) => {
    let userDetails = {
        email: userObject.email,
        first_name: userObject.first_name,
        last_name: userObject.last_name
    };

    return jwt.sign(userDetails, authConfigs.jwtTokenKey);


}

module.exports.verifyToken = (request, response, nextFun) => {
    let authorization = request.headers.authorization;
    let jwtTokenKey = authConfigs.jwtTokenKey;
    if (authorization) {

        try {
            let decryptedToken = encryptor.decrypt(authorization, authConfigs.jwtTokenKey);
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
