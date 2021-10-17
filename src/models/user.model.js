'use strict';
/******************
 * Model : User
 /****************/

const {Model} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class User extends Model {

        static associate(models) {
            // define association here
        }
    };
    User.init({
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },

        first_name: {
            allowNull: false,
            type: DataTypes.STRING,

        },
        last_name: {
            allowNull: false,
            type: DataTypes.STRING,

        },
        email: {
            allowNull: false,
            type: DataTypes.STRING,
           
        },
        password: {
            allowNull: false,
            type: DataTypes.STRING,

        },

    }, {
        sequelize,
        tableName: 'tbl_users',
        modelName: 'User',
        timestamps: false
    });
    return User;
};