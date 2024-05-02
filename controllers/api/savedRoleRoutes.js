const router = require('express').Router();

const { SavedRole } = require('../../models');
const withAuth = require('../../utils/auth');

// save buttons  [routes for when user clicks save on a role and as a result a fetch POST request will be made to this route with the req.body being the role that the save button is in]
// /api/savedRole/
router.post('/', withAuth, async (req,res) => {
    try {
        const savedRoleData = await SavedRole.create({
            role_id: req.body.role_id,
            user_id: req.session.userId
            //userId: req.session.userId,   // current session user's id
        })
        res.status(200).json(savedRoleData)
    } catch(err){
        res.status(500).json(err)
    }
})

// delete buttons [routes for when user clicks delete on a saved role and as a result a fetch DELETE request will be made to this route with the /:id being id of the savedRole that the delete button is in (ie the id of the SavedRole)]
// /api/savedRole/:id
router.delete('/:id', withAuth, async (req, res) => {
    try {
        const savedRoleData = await SavedRole.destroy({
            where: {
                id: req.params.id,
                userId: req.session.userId
            }
        })

        if(!savedRoleData) {
            res.status(404).json({message: 'no saved role with this id found'})
            return
        }

        res.redirect('/profile')
    } catch(err) {
        res.status(500).json(err)
    }
})


module.exports = router;