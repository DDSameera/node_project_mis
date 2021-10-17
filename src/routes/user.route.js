/******************************
 * Routes : User
 /****************************/

const express = require('express');
const router = express.Router();
const {createUser, loginUser} = require('../controllers/userController');


router.route('/user/create').post(createUser);
router.route('/user/login').post(loginUser);

module.exports = router;