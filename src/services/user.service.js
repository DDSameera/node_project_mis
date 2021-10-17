const {User} = require("../models");
const authConfig = require('../config/auth-configs');

const encryptorSecretKey = authConfig.encryptorSecretKey;
const encryptor = require('simple-encryptor')(encryptorSecretKey);

const tokenService = require('./token.service');


/*******************************************
 *  User Registration
 * @param userData
 /*****************************************/
module.exports.createUser = (userData) => User.create({
    first_name: userData.first_name,
    last_name: userData.last_name,
    email: userData.email,
    password: encryptor.encrypt(userData.password)
});

/*******************************************
 *  Secured Login User
 * @param userData
 /*****************************************/
module.exports.loginUser = (userData) => User.findOne({where: {email: userData.email}}).then(result => {

    let decryptedPassword = encryptor.decrypt(result.password);

    if (decryptedPassword === userData.password) {
        let jwtToken = tokenService.createToken(result);

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
