const mongoose = require('mongoose');

const schema = mongoose.Schema;

const userSchema = new schema(
    {
        username: {
            type: String,
            require: true,
            unique: true,
            trim: true,
            minlength:3
        }
    },
    {
        timestamps: true
    })

    const user = mongoose.model('User', userSchema);

    module.exports = user;