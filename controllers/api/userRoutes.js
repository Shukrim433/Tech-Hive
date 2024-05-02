const router = require('express').Router();
// Import the User model from the models folder
const { User } = require('../../models');

// signup page [route for creating a user/signing up after user clicks 'signup' button]
router.post('/signup', async (req, res) => {
  try {
    const userData = await User.create(req.body)    //the encryption of the password entered is done by the Hooks in the User model

    // creates a session object for this user once they successfully sign up:
    req.session.save(() => {
      req.session.userId = userData.id   //userData.id = the current logged in user's id is saved to the session
      req.session.logged_in = true

      res.status(200).json(userData)
    })
  } catch(err) {
    console.log(err)
    res.status(400).json(err)
      // 400 = bad request from the user, ie if theyre signing up and they dont enter an email
  }
})


// login page [route for when a user clicks the 'login' button - retrieving a user record based on the email they entered when loging in ]
router.post('/login', async (req, res) => {
  try {
    const userData = await User.findOne({ where: {email: req.body.email}})

    // in case there is no user record associated with the email entered
    if(!userData) {
      res.status(400).json({message: 'incorrect email or password, please try again'})
      return
    }

    // uses the instance method in the User model to check the user entered the correct password
    const validPassword = await userData.checkPassword(req.body.password)

    if(!validPassword) {
      res.status(400).json({message: 'incorrect email or password, please try again'})
      return
    }

    req.session.save(() => {
      req.session.userId = userData.id
      req.session.logged_in = true

      res.json({user: userData, message: 'you are now logged in!'})
    })
  } catch(err) {
    res.status(400).json(err)
  }
})

// logout button [route for when the user clicks 'logout' and the session object that was created for them when they logged/signed in is destroyed]
router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end()          // 204 = "No Content." It means that the server has successfully processed the request and is not returning any content in the response body. 
    })
  } else {
    res.status(404).end()           // 404 = "Not Found." If the user is not logged in, the server responds with 404 meaning the requested resource (the session) could not be found 
  }
})

module.exports = router;
