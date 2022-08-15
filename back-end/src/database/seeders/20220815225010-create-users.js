'use strict';

module.exports = {
  async up (queryInterface, _Sequelize) {
     await queryInterface.bulkInsert('Users', [
      {
        name: 'John Doe',
        email: 'john@doe.com',
        password: '0659c7992e268962384eb17fafe88364', // -> "abc123456" <-
        status: 'Ativo',
      },
      {
        name: 'Jane Doe',
        email: 'jane@doe.com',
        password: 'b0635aee709ab0a9368595476e53858b', // -> "def654321" <-
        status: 'Pendente',
      }
     ]);
  },

  async down (queryInterface, _Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
