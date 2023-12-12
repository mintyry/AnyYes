const seedCategory = require('./category-seeds');
const seedListing = require('./listing-seeds');
const seedUser = require('./user-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');

  await seedUser();
  console.log('\n----- USERS SEEDED -----\n');

  await seedCategory();
  console.log('\n----- CATEGORIES SEEDED -----\n');

  await seedListing();
  console.log('\n----- LISTINGS SEEDED -----\n');



  // process.exit(0) ensures the Node.js process will terminate immediately and return the exit code to the operating system gracefully.
  process.exit(0);
};

seedAll();
