/************************
 * Auth Configurations *
 /***********************/

const authConfig = {};
authConfig.encryptorSecretKey = '393a41d556f3d8164a1520f2fb30795d'; //Encryptor Secret Key
authConfig.jwtTokenKey = 'abc123456789010012134214252'; // JWT Token Key
authConfig.jwtTokenExpireTime = 120; // Default 120 : 2 minutes (60x2 )
module.exports = authConfig; // JWT Token Expiration Time , Default : 30 minutes