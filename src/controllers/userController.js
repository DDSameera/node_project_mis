
const responseService = require("../services/response.service");
const userService = require("../services/user.service");
const userValidation = require("../validations/user.validation");

/****************************************
 * List of All Product Categories
 * @param request,response
 /***************************************/

module.exports.createUser = async (request, response) => {

    let userData = request.body;
    let validationResponse = userValidation.isValidCreateUserInput(userData);

    if (validationResponse !== true) {
        responseService.errorWithMessage(response, validationResponse);
    } else {

        let result = await userService.createUser(userData);

        if (result) {
            responseService.successWithData(response, "User Successfully Created");
        } else {
            responseService.errorWithMessage(response, result);
        }
    }

}

/****************************************
 * Login User
 * @param request,response
 /***************************************/

module.exports.loginUser = async (request, response) => {

    let userData = request.body;

    let validationResponse = userValidation.isValidUserLoginInput(userData);


    if (validationResponse !== true) {
        responseService.errorWithMessage(response, validationResponse);
    } else {
        let result = await userService.loginUser(userData);

        if (result == false) {
            responseService.errorWithMessage(response, "Error user login");
        } else if (result == null) {
            responseService.errorWithMessage(response, "Invalid username or password");
        } else {
            responseService.successWithToken(response, result);
        }
    }

}