const { Application } = require("../models");

// Seed data for Applications
const applicationData = [
    {
        first_name: 'Alice',
      last_name: 'Johnson',
      email: 'alice@example.com',
      password: 'password123',
      phone_number: '1234567890',
      cv_link: 'https://example.com/alice_cv',
      user_id: 1, 
      role_id: 1, 
    },
    {
        first_name: 'Alice',
      last_name: 'Johnson',
      email: 'alice@example.com',
      password: 'password123',
      phone_number: '1234567890',
      cv_link: 'https://example.com/alice_cv',
      user_id: 1, 
      role_id: 9, 
    },
    {
     first_name: 'Bob',
      last_name: 'Smith',
        email: 'bob@example.com',
        password: 'password123',
        phone_number: '0987654321',
        cv_link: 'https://example.com/bob_cv',
      user_id: 2, 
      role_id: 2, 
    },
    {
        first_name: 'Bob',
         last_name: 'Smith',
           email: 'bob@example.com',
           password: 'password123',
           phone_number: '0987654321',
           cv_link: 'https://example.com/bob_cv',
         user_id: 2, 
         role_id: 12, 
       },
    // Add more application entries here...
  ];
  

  const seedApplications = () => Application.bulkCreate(applicationData);

  module.exports = seedApplications;