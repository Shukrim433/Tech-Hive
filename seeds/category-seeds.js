const { Category } = require('../models');

const categoryData = [
  {
    category_name: 'Development',
  },
  {
    category_name: 'Design',
  },
  {
    category_name: 'Security',
  },
  {
    category_name: 'AI',
  },
  {
    category_name: 'Systems',
  },
  {
    category_name: 'Operations',
  },
  {
    category_name: 'Project Management',
  },
];

const seedCategories = () => Category.bulkCreate(categoryData);

module.exports = seedCategories;
