const router = require('express').Router();
// Import the routes. This is how we make our routes modular.
const userRoutes = require('./userRoutes');
const applicationRoutes = require('./applicationRoutes')
const savedRoleRoutes = require('./savedRoleRoutes')
const projectRoutes = require('./projectRoutes');

// When a request is made to the /users or /projects path, it will be directed to the index.js in the /users or /projects folder.
router.use('/users', userRoutes);
router.use('/application', applicationRoutes);
router.use('/save-role', savedRoleRoutes);
router.use('/projects', projectRoutes);

module.exports = router;
