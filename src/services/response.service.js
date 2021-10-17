/********************************************
 * Return Success Response with Data
 * @return response,data
 /******************************************/

module.exports.successWithData = (response, data) => {
    let res = {
        status: true,
        data: data

    };
    response.send(res);
}

/********************************************
 * Return Success Response with Token
 * @return response,data
 /******************************************/


module.exports.successWithToken = (response, data) => {
    let res = {
        status: true,
        message: data.message,
        token: data.token

    };
    response.send(res);
}

/********************************************
 * Return Failed Response with Error Messages
 * @return response,message,type
 /******************************************/
module.exports.errorWithMessage = (response, message, type = 'error') => {


    if (type == "validations") {

        /* Show Validation Error Messages*/
        let errorMessages = [];

        for (const m of message) {
            errorMessages.push({
                field: m.field,
                message: m.message
            })
        }

        let res = {
            status: false,
            message: errorMessages
        };
        response.send(res);
    } else {
        /* Show Unexpected Error Messages*/
        let res = {
            status: false,
            message: message
        };
        response.send(res);
    }


}