const router = require('express').Router();
// Import the routes. This is how we make our routes modular.
const userRoutes = require('./userRoutes');
const applicationRoutes = require('./applicationRoutes')
const savedRoleRoutes = require('./savedRoleRoutes')
const categoryRoutes = require('./categoryRoutes');
/*const roleRoutes = require('./roleRoutes');*/
const tagRoutes = require('./tagRoutes');


// When a request is made to the /users or /projects path, it will be directed to the index.js in the /users or /projects folder.
router.use('/users', userRoutes);
router.use('/application', applicationRoutes);
router.use('/savedRole', savedRoleRoutes);
router.use('/categories', categoryRoutes);
/*router.use('/roles', roleRoutes);*/
router.use('/tags', tagRoutes);

module.exports = router;
