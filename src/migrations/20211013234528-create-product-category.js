'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('tbl_product_cat', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      desc: {
        type: Sequelize.STRING
      },
      count: {
        type: Sequelize.INTEGER
      },
      status: {
        type: Sequelize.INTEGER
      }

    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('ProductCategories');
  }
};