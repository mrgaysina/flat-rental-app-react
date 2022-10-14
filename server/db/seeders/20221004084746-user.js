/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Users',
      [
        {
          username: 'John',
          email: 'john@gmail.com',
          password: 'jdf123',
          picture: '',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: 'Анна',
          email: 'anna@gmail.com',
          password: 'ann123',
          picture: '',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: 'Олег',
          email: 'oleg@gmail.com',
          password: 'orllksk543',
          picture: '',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: 'Кирилл',
          email: 'kir@gmail.com',
          password: 'kirjjh',
          picture: '',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: 'Сергей',
          email: 'serega@gmail.com',
          password: 'serega',
          picture: '',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: 'Демид',
          email: 'mexico@gmail.com',
          password: 'arriva',
          picture: '',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: 'Janpol',
          email: 'janpol@gmail.com',
          password: 'jannn123',
          picture: '',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: 'Jiro',
          email: 'ji@gmail.com',
          password: 'jiji009',
          picture: '',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: 'Roberto',
          email: 'rob@gmail.com',
          password: 'robber',
          picture: '',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: 'Margo',
          email: 'margo@gmail.com',
          password: 'mrmr',
          picture: '',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: 'Jenya',
          email: 'jenya@gmail.com',
          password: 'sombrero2000',
          picture: '',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: 'Andro',
          email: 'andronito@gmail.com',
          password: '500tequilas',
          picture: '',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: 'Evgen',
          email: 'chichipo@gmail.com',
          password: 'evgenito',
          picture: '',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: 'Otto',
          email: 'otto@gmail.com',
          password: 'otisto123',
          picture: '',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: 'Juan',
          email: 'Juan@gmail.com',
          password: 'juan123',
          picture: '',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: 'Oleg',
          email: 'yau7237@gmail.com',
          password: '123',
          picture: '',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: 'Margarita',
          email: 'mrgaysina@gmail.com',
          password: '123',
          picture: '',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: 'Evgeniy',
          email: 'Evgeniy3234@gmail.com',
          password: '123',
          picture: '',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  },
};
