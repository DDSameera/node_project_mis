const express = require('express');
const router = express.Router();
const productCatController = require("../controllers/productCat.controller");
const tokenService = require("../services/token.service");

router.route('/prodcat').get(tokenService.verifyToken,productCatController.getProductCat);
router.route('/prodcat/create').post(tokenService.verifyToken,productCatController.createProductCat);
router.route('/prodcat/update/:id').patch(tokenService.verifyToken,productCatController.updateProductCat);

module.exports = router;