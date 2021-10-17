const {User} = require("../models");
const authConfig = require('../config_example/auth-configs');

const encryptorSecretKey = authConfig.encryptorSecretKey;
const encryptor = require('simple-encryptor')(encryptorSecretKey);

const tokenService = require('../services/token.service');

module.exports.createUser = (userData) => User.create({
    first_name: userData.first_name,
    last_name: userData.last_name,
    email: userData.email,
    password: encryptor.encrypt(userData.password)
});


module.exports.loginUser = (userData) => User.findOne({where: {email: userData.email}}).then(result => {

        let decryptedPassword = encryptor.decrypt(result.password);

        if (decryptedPassword === userData.password) {

            let jwtToken = tokenService.createToken(result);
            jwtToken = encryptor.encrypt(jwtToken, encryptorSecretKey);

            return {
                token: jwtToken,
                message: "Successfully Logged"
            }
        } else {
            return null;
        }


    }).catch(error => {
        return error
    });
