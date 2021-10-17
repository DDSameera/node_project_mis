/********************************************
 * ProductCategory Validation
 /******************************************/

const Validator = require("fastest-validator");

module.exports.isValidCreateProductCatInput = (productCatData) => {

    console.log(productCatData);
    const productCatSchema = {

        name: {
            type: "string",
            empty:false,


        },
        desc: {
            type: "string",
            max: 255,
            empty:false,


        },
        count: {
            type: "number",
            positive: true,
            integer: true

        },

        status: {
            type: "number",
            items: "number",
            enum: [0, 1],
        }

    };
    const v = new Validator();
    return v.validate(productCatData, productCatSchema);

}

