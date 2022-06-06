const mongoose = require('mongoose');

const schema = mongoose.Schema;

const excerciseSchema = new schema(
    {
        username:{type: String, required: true},
        description:{type: String, required: true},
        duration:{type: Number, required: true},
        date:{type: Date, required: true}
    },
    {
     timestamps: true
    });

    const excercise = mongoose.model('excercise', excerciseSchema);

    module.exports = excercise;