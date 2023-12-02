const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, "Name is Required"]
    },
    userAge: {
        type: Number,
        required: [true, "Age is Required"]
    },
    saying:{
        type: String,
        required: [true, "Saying is Required"]
    }
},    {timestamps: true});

const User = mongoose.model('users', UserSchema);

module.exports = User;