const router = require('express').Router();
let user = require('../models/user.model');

//get users
router.route('/').get((req, res) => {
    //find is mongoose methodvto fetch all the users in the table
    user.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('error', + err))
})

//post
router.route('/add').post((req, res) => {
    const username = req.body.username;
    let newUser = new user({username});

    newUser.save()
    .then(()=> res.json('new user added'))
    .catch(err => res.status(400).json('error:' + err))
});

module.exports = router;

