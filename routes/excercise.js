const router = require('express').Router();
//const excercise = require('../models/excercise.model');
let exercise = require('../models/excercise.model');

//routes- get
router.route('/').get((req, res) => {
    //mongodb method
    exercise.find()
    .then(excercises => res.json(excercises))
    .catch(err => res.status(400).json('error:' + err))
})
router.route('/:id').get((req, res) =>{
    exercise.findById(req.params.id)
    .then(excercise => res.json(excercise))
    .catch(err => res.status(400).json('error:' + err))
})
router.route('/:id').delete((req, res) =>{
    exercise.findByIdAndDelete(req.params.id)
    .then(excercise => res.json(excercise))
    .catch(err => res.status(400).json('error:' + err))
})
router.route('/update/:id').put((req, res) =>{
    exercise.findById(req.params.id)
    .then(excercise => {
        excercise.username = req.body.username;
        excercise.description = req.body.description;
        excercise.duration = Number(req.body.duration);
        excercise.date = Date.parse(req.body.date);

        excercise.save()
        .then(() => res.json('exercise updated'))
        .catch(err => res.status(400).json('error:' + err))
    })
    .catch(err => res.status(400).json('error:' + err))
})
//router-post
router.route('/add').post((req, res) => {
    const username = req.body.username;
    const description = req.body.description;
    const duration = Number(req.body.duration);
    const date = Date.parse(req.body.date);

    const newExcercise = new exercise({
        username,
        description,
        duration,
        date   
    })

    newExcercise.save()
    .then(newExcercises => res.json('newExcercises added'))
    .catch(err => res.status(400).json('error:' + err))
})

module.exports = router;