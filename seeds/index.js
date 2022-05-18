const seedBooks = require('./book-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('--------------');
  
  await seedBooks();
  console.log('--------------');

  process.exit(0);
};

seedAll();
