const {ProductCategory} = require("../models");
const {where} = require("sequelize");

module.exports.findAllProductCats = () => ProductCategory.findAll();

module.exports.findOneProductCat = (productId) => ProductCategory.findOne({ where: { id: productId } });


module.exports.createProductCat = (productCatData) => ProductCategory.create({
    name: productCatData.name,
    desc: productCatData.desc,
    count: productCatData.count,
    status: productCatData.status
});

module.exports.updateProductCat = (productCatData,productId) => ProductCategory.update({
    name: productCatData.name,
    desc: productCatData.desc,
    count: productCatData.count,
    status: productCatData.status
},{
    where:{
        id: productId
    }
});