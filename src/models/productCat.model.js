'use strict';
const {Model} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class ProductCategory extends Model {

        static associate(models) {
            // define association here
        }
    };
    ProductCategory.init({

        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        name: {
            allowNull: false,
            type: DataTypes.STRING,
            validate: {
                notNull: {
                    msg: "Product Category name is required"
                },
                notEmpty: {
                    msg: "Product Category name cannot be empty"
                },
            }
        },
        desc: {
            allowNull: false,
            type: DataTypes.STRING,
            validate: {
                notNull: {
                    msg: "Product Category Description  is required"

                },
                notEmpty: {
                    msg: "Product Category Description cannot be empty"
                }
            }
        },
        count: {
            allowNull: false,
            type: DataTypes.INTEGER,
            validate: {
                notNull: {
                    msg: "Product Category Count  is required"

                },
                notEmpty: {
                    msg: "Product Category Count cannot be empty"
                },
                isNumeric: {
                    msg: "Product Category Count should be numeric value"
                }
            }
        },
        status: {
            allowNull: false,
            type: DataTypes.ENUM(['0', '1']),
            validate: {
                notNull: {
                    msg: "Product Category Status  is required"

                },
                notEmpty: {
                    msg: "Product Category Status cannot be empty"
                },
                isIn: {
                    args: [['0', '1']],
                    msg: "Product Category Status Must be 1 or 0"
                },
                isNumeric: {
                    msg: "Product Category Status should be numeric value"
                }
            }
        },

    }, {
        sequelize,
        tableName: 'tbl_product_cat',
        modelName: 'ProductCategory',
        timestamps: false
    });
    return ProductCategory;
};