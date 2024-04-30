const { Category } = require('../models');

// Seed data for Categories
const categoryData = [
  { category_name: 'Software Development' },
  { category_name: 'Data Analysis' },
  { category_name: 'Design' },
  { category_name: 'Cloud Computing' },
  { category_name: 'Network Engineering' },
  { category_name: 'DevOps' },
  { category_name: 'Machine Learning' },
  { category_name: 'Cybersecurity' },
  { category_name: 'Database Administration' },
  { category_name: 'Product Management' },
  { category_name: 'IT Support' },
];

const seedCategories = () => Category.bulkCreate(categoryData);

module.exports = seedCategories;

