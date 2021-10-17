const responseService = require("../services/response.service");
const productCatValidation = require("../validations/productCat.validation");
const productCatService = require("../services/productCat.service");


module.exports.getProductCat = async (request, response) => {


    return await productCatService.findAllProductCats().then(result => {
        responseService.successWithData(response, result);
    }).catch(error => {
        responseService.errorWithMessage(response, "Error Getting Data");
    });

}


module.exports.createProductCat = async (request, response) => {


    let productCatData = request.body;
    let validationResponse = await productCatValidation.isValidCreateProductCatInput(productCatData);


    if (validationResponse !== true) {
        responseService.errorWithMessage(response, validationResponse, 'validations');
    } else {

        await productCatService.createProductCat(productCatData).then(result => {
            responseService.successWithData(response, "Product Category Created");
        }).catch(err => {
            responseService.errorWithMessage(response, "Unknown Error Occurred");
        })

    }

}


module.exports.updateProductCat = async (request, response) => {
    let productId = request.params.id;
    let productCatData = request.body;



    let validationResponse = await productCatValidation.isValidCreateProductCatInput(productCatData);
    if (validationResponse !== true) {
        responseService.errorWithMessage(response, validationResponse, 'validations');
    } else {

        await productCatService.findOneProductCat(productId).then(result => {
            console.log("*****************************", result);

            if (result !== null) {

                productCatService.updateProductCat(productCatData, productId).then(result => {
                    responseService.successWithData(response, "Product Category Updated");
                }).catch(err => {
                    responseService.errorWithMessage(response, "Unknown Error Occurred");
                })
            } else {
                responseService.errorWithMessage(response, "Invalid Product Category ID");
            }


        }).catch(err => {
            responseService.errorWithMessage(response, "Something goes wrong");

        })


    }

}


