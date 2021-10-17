const jwt = require("jsonwebtoken");
const authConfigs = require("../config/auth-configs");
const encryptorSecretKey = authConfigs.encryptorSecretKey;
const encryptor = require('simple-encryptor')(encryptorSecretKey);
const jwtTokenKey = authConfigs.jwtTokenKey;

const responseService = require("../services/response.service");

module.exports.verifyToken = (request, response, nextFun) => {

    let authorization = request.headers.authorization
    if (authorization) {

        try {
            let decryptedToken = encryptor.decrypt(authorization);
            let result = jwt.verify(decryptedToken, jwtTokenKey);

            if (result) {
                nextFun();
            } else {
                responseService.successWithData(response,'Token is invalid');
            }
        } catch (error) {

            let isExpire = error.hasOwnProperty('expiredAt');

            if (isExpire){
                 responseService.successWithData(response,'Token is expired');
            }else{
                responseService.successWithData(response,'Token is invalid');

            }

        }


    } else {
         responseService.successWithData(response,'Authorization Failed');

    }
}