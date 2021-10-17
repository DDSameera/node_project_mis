const jwt = require("jsonwebtoken");
const authConfigs = require("../config/auth-configs");
const encryptorSecretKey = authConfigs.encryptorSecretKey;
const encryptor = require('simple-encryptor')(encryptorSecretKey);
const jwtTokenKey = authConfigs.jwtTokenKey;

const responseService = require("../services/response.service");


/****************************************
 *  Middleware - Token Verification
 * @param request,response,nextFun
 /***************************************/

module.exports.verifyToken = (request, response, nextFun) => {

    let authorization = request.headers.authorization // Capture Authorization from header
    if (authorization) {

        try {
            /* If Token Expiration,then show Expiration Message*/
            let decryptedToken = encryptor.decrypt(authorization); // Decrypt Authorization
            let result = jwt.verify(decryptedToken, jwtTokenKey); //Restore Encrypted Values

            /* If valid results , then force to process next function */

            if (result) {
                nextFun(); //Execute Next Function
            } else {
                responseService.successWithData(response, 'Token is invalid');
            }
        } catch (error) {

            /* If Token Expiration,then show Expiration Message*/
            let isExpire = error.hasOwnProperty('expiredAt');

            if (isExpire) {
                responseService.successWithData(response, 'Token is expired');
            } else {
                responseService.successWithData(response, 'Token is invalid');

            }

        }


    } else {
        responseService.successWithData(response, 'Authorization Failed');

    }
}