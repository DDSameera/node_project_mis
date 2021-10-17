'use strict';
/******************************
 * Seeder : Product Category
 /****************************/

module.exports = {
    up: async (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('tbl_product_cat', [
            {
                name: 'Plastic Goods',
                desc: 'Imported Genuine',
                count: 100,
                status: 1
            },
            {
                name: 'Fiber Material',
                desc: 'Local Products',
                count: 45,
                status: 1
            }
        ]);
    },

    down: async (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('tbl_product_cat', {}, null)
    }
};
