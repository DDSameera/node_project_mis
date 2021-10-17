const express = require('express');
const router = express.Router();
const productCatController = require("../controllers/productCat.controller");
const tokenMiddleware = require("../middlewares/token.middleware");

router.route('/prodcat').get(tokenMiddleware.verifyToken,productCatController.getProductCat);
router.route('/prodcat/create').post(tokenMiddleware.verifyToken,productCatController.createProductCat);
router.route('/prodcat/update/:id').patch(tokenMiddleware.verifyToken,productCatController.updateProductCat);

module.exports = router;