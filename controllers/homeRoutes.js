const router = require('express').Router();
const { Location, User, Category, Role, Tag, Application, SavedRole, RoleTag} = require('../models');
const withAuth = require('../utils/auth');
const { Op } = require('sequelize');

// homepage [route for showing list of featured jobs - as soon as you load the page]
router.get('/', async (req, res) => {
    try {
        const roleData = await Role.findAll({
            include: [
                {model: Location},
                {model: Category},
                //{model: Tag, through: RoleTag}
            ]
        })

        // shuffles the array to get random role records
        const shuffledRoles = roleData.sort(() => Math.random() - 0.5); //this line sorts the array randomly by using a comparator functin that generates random positive or negative values.

        // gets 8 random roles objects and puts them in an array called:
        const randomRoles = shuffledRoles.slice(0, 8);

        // Serializes data so the template can read it
        const featuredRoles = randomRoles.map((project) => project.get({plain:true}))

        // Passes serialized data and session flag into template
        //res.status(200).json(featuredRoles)
        
        res.render('homepage', {
            featuredRoles,      // featuredRoles = featuredRoles: [{role1}, {role2}, {role3}...]
            logged_in: req.session.logged_in
        })
    } catch(err){
        res.status(500).json(err)
    }
})


// individual role page [route for showing one role that was clicked on]
router.get('/role/:id', async (req,res) => {
    try {
        const roleData = await Role.findByPk(req.params.id, {
            include: [
                {
                    model: Location,
                    attributes: ['location_name']
                },
                {model: Category},
            ]
        })

        if(!roleData) {
            return res.status(404).json({message: 'No role found with this Id'})
        }

        const role = roleData.get({ plain: true });
       //res.status(200).json(role)
       
        res.render('role', {  //***
            role,   // role = role: {role row}   
            logged_in: req.session.logged_in
        })
    } catch(err){
        res.status(500).json(err)
    }
})

// search result page [route for what user clicks 'search' button on the homepage to get a list of jobs on the search result page that match their search]
router.get('/search-results', async(req, res) => {
    try {
        const query = {
            where: {},
            include: [{model: Location}]
        }
        const roleName = req.query.roleName
        const jobType = req.query.jobType
        const location = req.query.location
        
        
        if(roleName) {
            query.where = {
               role_name: { [Op.iLike]: `%${roleName}%` }
            };
        }

        if(jobType) {
            query.where = {
               job_type: { [Op.iLike]: `%${jobType}%` }
            };
        }

        if(jobType && roleName) {
            query.where = {
               job_type: { [Op.iLike]: `%${jobType}%` },
               role_name: { [Op.iLike]: `%${roleName}%` }
            };
        }

        if(location) {
            query.include.push({
                model: Location,
                where: {
                    location_name: { [Op.iLike]: `%${location}%` }
                }
            });
        }

        //if the user presses search w/o entering anything
        if(!jobType && !roleName && !location){
            const searchedRoles = []
            res.render('searchedRoles', {
                searchedRoles,
                logged_in: req.session.logged_in
            })
        }
       

        const roleData = await Role.findAll(query)

        const searchedRoles = roleData.map((project) => project.get({plain:true}))
        console.log(searchedRoles, 'searchedRoles')
        //res.status(200).json(searchedRoles)
        res.render('searchedRoles', {  //***
            searchedRoles,   // searchedRoles = searchedRoles: [{searchedrole 1}, {searchedrole 2}, {searchedrole 3}]
            logged_in: req.session.logged_in
        })


    } catch(err) {
        res.status(200).json(err)
    }
})



// profile page [route for getting current session's user's user record and their associated savedRoles and Applications to display on their profile page]
router.get('/profile', withAuth, async (req, res) =>{
    try {
        // Find the logged in user based on the session ID
        const userData = await User.findByPk(req.session.userId, {
            attributes: { exclude: ['password'] },
            include: [
                { model: Role,
                 through: { model: SavedRole },
                 as: 'SavedRoles',     //includes an array of all the SavedRole records associated with this user under an alias "SavedRoles"
                },    
                { model: Role,
                 through: { model: Application },
                 as: 'AppliedRoles',   //includes an array of all the Application records associated with this user under an alias "AppliedRoles"
                }
            ]
        })

        const user = userData.get({ plain: true });
       //res.status(200).json(user)

       res.render('profile', {
            user,     // user = user: {user row}
           logged_in: true
        })
    } catch(err){
        res.status(500).json(err)
    }
})



// application page [route for when you click 'apply' on a job it allows you to personalise the form by including the name of the role you're applying for (clicked on)]
router.get('/application/:id', withAuth, async (req, res) => {
    try {
        const roleData = await Role.findByPk(req.params.id, {
            include: [
                {
                    model: Location,
                    attributes: ['location_name']
                }
            ]
        })

        if(!roleData) {
            return res.status(404).json({message: 'No application found with this Id'})
        }

        // converts this sequalize model instance into a plain javascript object (removes metadata)
        const role = roleData.get({ plain: true });

        // If the user is already not logged in, redirect the request to the login page ****
        if (!req.session.logged_in) {
            res.redirect('/login');
            return;
        }

        //else show them the application page
        res.render('application', {  //***
          role,   // role = role: {role row}
          logged_in: true,
        })
    } catch(err){
        res.status(500).json(err)
    }
})

// login page [route for if the user is already loggedin, redirect the request to another route]
router.get('/login', (req, res) => {
    if (req.session.logged_in) {
        res.redirect('/profile')
        return
    }
    //else if you're not logged in it shows you the login page:
    res.render('login')
})


// signup page [route for if the user is already signedup (loggedin), redirect the request to another route]
router.get('/signup', (req, res) => {
    if (req.session.logged_in) {
        res.redirect('/profile')
        return
    }
    //else if youre not logged in it shows you the signup page:
    res.render('signup')//***
})


module.exports = router;


