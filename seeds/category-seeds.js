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
  { category_name: 'Artificial Intelligence Research' },
  { category_name: 'Blockchain Development' },
  { category_name: 'Game Development' },
  { category_name: 'Internet of Things (IoT)' },
  { category_name: 'Embedded Systems' },
  { category_name: 'Quantum Computing' },
  { category_name: 'Augmented Reality (AR)' },
];

const seedCategories = () => Category.bulkCreate(categoryData);

module.exports = seedCategories;

