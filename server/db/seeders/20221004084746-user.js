/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [
      {
        username: 'John',
        email: 'john@gmail.com',
        password: 'jdf123',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: 'Анна',
        email: 'anna@gmail.com',
        password: 'ann123',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: 'Олег',
        email: 'oleg@gmail.com',
        password: 'orllksk543',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: 'Кирилл',
        email: 'kir@gmail.com',
        password: 'kirjjh',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: 'Сергей',
        email: 'serega@gmail.com',
        password: 'serega',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: 'Демид',
        email: 'mexico@gmail.com',
        password: 'arriva',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: 'Janpol',
        email: 'janpol@gmail.com',
        password: 'jannn123',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: 'Jiro',
        email: 'ji@gmail.com',
        password: 'jiji009',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: 'Roberto',
        email: 'rob@gmail.com',
        password: 'robber',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: 'Margo',
        email: 'margo@gmail.com',
        password: 'mrmr',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: 'Jenya',
        email: 'jenya@gmail.com',
        password: 'sombrero2000',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: 'Andro',
        email: 'andronito@gmail.com',
        password: '500tequilas',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: 'Evgen',
        email: 'chichipo@gmail.com',
        password: 'evgenito',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: 'Otto',
        email: 'otto@gmail.com',
        password: 'otisto123',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: 'Juan',
        email: 'Juan@gmail.com',
        password: 'juan123',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: 'Oleg',
        email: 'yau7237@gmail.com',
        password: '123',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: 'Evgeniya',
        email: 'shusha989@gmail.com',
        password: '123',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: 'Margarita',
        email: 'mrgaysina@gmail.com',
        password: '123',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: 'Evgeniy',
        email: 'Evgeniy3234@gmail.com',
        password: '123',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  },
};
