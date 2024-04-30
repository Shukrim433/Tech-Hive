const { User } = require('../models');
// Seed data for Users
const usersData = [
    {
      first_name: 'Alice',
      last_name: 'Johnson',
      email: 'alice@example.com',
      password: 'password123',
      phone_number: '1234567890',
      cv_link: 'https://example.com/alice_cv',
    },
    {
      first_name: 'Bob',
      last_name: 'Smith',
      email: 'bob@example.com',
      password: 'password123',
      phone_number: '0987654321',
      cv_link: 'https://example.com/bob_cv',
    },
    // Add more user entries here...
  ];

const seedUsers = () => User.bulkCreate(usersData);

module.exports = seedUsers;

