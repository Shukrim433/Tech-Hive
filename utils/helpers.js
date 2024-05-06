const Handlebars = require('handlebars');

// Define a helper function to format numbers with commas
Handlebars.registerHelper('formatNumberWithCommas', function(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
});