const seedCategories = require('./category-seeds');
const seedRoles = require('./role-seeds');
const seedTags = require('./tag-seeds');
const seedRoleTags = require('./role-tag-seeds');
const seedUsers = require('./user-seeds');
const seedApplications = require('./application-seeds');
const seedLocations = require('./location-seeds')
const seedSavedRoles = require('./savedRole-seeds')


const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');

  await seedLocations();
  console.log('\n----- LOCATIONS SEEDED -----\n');

  await seedCategories();
  console.log('\n----- CATEGORIES SEEDED -----\n');
  
  await seedTags();
  console.log('\n----- TAGS SEEDED -----\n');

  await seedRoles();
  console.log('\n----- ROLES SEEDED -----\n');

  await seedRoleTags();
  console.log('\n----- ROLE TAGS SEEDED -----\n');

  await seedUsers();
  console.log('\n----- USERS SEEDED -----\n');

  await seedApplications();
  console.log('\n----- APPLICATIONS SEEDED -----\n');


  await seedSavedRoles();
  console.log('\n-----  SAVED ROLES SEEDED -----\n');

  process.exit(0);
};

seedAll();

