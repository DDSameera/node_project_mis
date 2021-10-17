const {ProductCategory} = require("../models");


/********************************************
 * Load All Product Category Records
 /******************************************/

module.exports.findAllProductCats = () => ProductCategory.findAll();


/********************************************
 * Load One Product Category Record
 /******************************************/


module.exports.findOneProductCat = (productId) => ProductCategory.findOne({ where: { id: productId } });


/********************************************
 * Create Product Category Record
 * @return productData
 /******************************************/

module.exports.createProductCat = (productCatData) => ProductCategory.create({
    name: productCatData.name,
    desc: productCatData.desc,
    count: productCatData.count,
    status: productCatData.status
});

/********************************************
 * Update Product Category Record
 * @return productCatData,productId
 /******************************************/

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