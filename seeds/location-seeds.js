const { Location } = require('../models');
// Seed data for Locations
const locationData = [
    { location_name: 'San Francisco' },
    { location_name: 'New York' },
    { location_name: 'Los Angeles' },
    { location_name: 'London' },
    { location_name: 'Paris' },
    { location_name: 'Berlin' },
    { location_name: 'Manchester' },
    { location_name: 'Amsterdam' },
    { location_name: 'Madrid' },
    { location_name: 'Barcelona' },
    { location_name: 'Dublin' },
    { location_name: 'Edinburgh' },
    { location_name: 'Rome' },
    { location_name: 'Milan' },
    { location_name: 'Munich' },
    // Add more location entries here...
];


const seedLocations = () => Location.bulkCreate(locationData);

module.exports = seedLocations;