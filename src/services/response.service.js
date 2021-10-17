module.exports.successWithData = (response, data) => {
    let res = {
        status: true,
        data: data

    };
    response.send(res);
}
module.exports.successWithToken = (response, data) => {
    let res = {
        status: true,
        message: data.message,
        token: data.token

    };
    response.send(res);
}
module.exports.errorWithMessage = (response, message, type = 'error') => {


    if (type == "validations") {
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
        let res = {
            status: false,
            message: message
        };
        response.send(res);
    }


}