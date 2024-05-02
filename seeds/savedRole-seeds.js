const { SavedRole } = require('../models');
// Seed data for Saved Roles
const savedRolesData = [
    {
      user_id: 1, // user 1
      role_id: 2, //saved role 2
    },
    {
      user_id: 1, // user 1
      role_id: 3, //saved role 9
    },
    {
      user_id: 2, // user 2
      role_id: 1, // saved role 1
    },
    {
      user_id: 2, // user 2
      role_id: 12, // saved role 1
    },
    // Add more saved role entries here...
  ];


const seedSavedRoles = () => SavedRole.bulkCreate(savedRolesData);

module.exports = seedSavedRoles;