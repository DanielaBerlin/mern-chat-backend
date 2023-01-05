const mongoose = require('mongoose');
const {} = require('validator');
const bcrypt = require('bcrypt');

const UserSchema = new mongoose.Schema({
    name:{
        type: String,
        require: [ true, "can't be blank"]
    },
    email: {
        type: String,
        lowercase: true,
        unique: true,
        require: [ true, "can't be blank"],
        index: true,
        validate: [isEmail, "invalid email"]
    },

    password: {
        type: String,
        required: [true, "can't be black"]
    },
    picture:{
        type: String,
    },
    newMessage: {
        type: Object,
        default: {}
    },
    status: {
        type: String,
        default: 'online'
    }
}, {minimize: false})

const User = mongoose.model('User', UserSchema)

module.exports = User