const seedCategories = require('./category-seeds');
const seedRoles = require('./role-seeds');
const seedTags = require('./tag-seeds');
const seedRoleTags = require('./role-tag-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');
  await seedCategories();
  console.log('\n----- CATEGORIES SEEDED -----\n');

  await seedRoles();
  console.log('\n----- ROLES SEEDED -----\n');

  await seedTags();
  console.log('\n----- TAGS SEEDED -----\n');

  await seedRoleTags();
  console.log('\n----- ROLE TAGS SEEDED -----\n');

  process.exit(0);
};

seedAll();

