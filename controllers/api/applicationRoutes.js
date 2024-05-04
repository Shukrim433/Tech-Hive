const router = require('express').Router();
const withAuth = require('../../utils/auth');
const { Application } = require('../../models');

// send application buttons  [routes for when user clicks send application on an application form and as a result a fetch POST request will be made to this route with the req.body being the details entered into the form AND the user_id and role_id for the foreign keys of the application model]
// /api/application/
router.post('/', withAuth, async (req,res) => {
    console.log(req.body) //**
    try {
        const applicationData = await Application.create({
            first_name: req.body.first_name,    
            last_name: req.body.last_name,
            email: req.body.email,
            phone_number: req.body.phone_number,
            cv_link: req.body.cv_link,
            role_id: req.body.role_id,
            user_id: req.session.userId,   // passes in the user_id column of the application table to the current session user's id
        })
        res.status(200).json(applicationData)
    } catch(err){
        console.log(err)//**
        res.status(500).json(err)
    }
})

// delete application button [routes for when user clicks delete on an applied role and as a result a fetch DELETE request will be made to this route with the req.body being the id of the application** (Application model's id column) that the delete button is in]
// /api/application/:id
router.delete('/:id', withAuth, async (req, res) => {
    try {
        const applicationData = await Application.destroy({
            // destroy the record whose id matches the id in the parameter of the request
            where: {
                id: req.params.id,        
                user_id: req.session.userId
            }
        })
        

        if(!applicationData) {
            res.status(404).json({message: 'no application with this id found'})
            return
        }

        //res.status(200).json(applicationData).redirect('/profile')

        // reloads the profile page after successfully deleting the 'applied role' to show updated applied role section
        // res.redirect('/profile');
        //res.status(200).json({ message: "Application deleted successfully." });
    } catch(err) {
        res.status(500).json(err)
    }
})


module.exports = router;