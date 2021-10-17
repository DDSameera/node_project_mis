const Validator = require("fastest-validator");

module.exports.isValidCreateUserInput= (userData) => {
    const userSchema = {
        first_name: {
            type: "string",
            min: 3,
            max: 255
        },
        last_name: {
            type: "string",
            min: 3,
            max: 255
        },
        email: {
            type: "email",

        },
        password: {
            type: "string",
            min: 6

        },
    };
    const v = new Validator();
    return v.validate(userData, userSchema);

}

module.exports.isValidUserLoginInput= (userData) => {
    const userSchema = {

        email: {
            type: "email",

        },
        password: {
            type: "string",
            min: 6

        },
    };
    const v = new Validator();
    return v.validate(userData, userSchema);

}