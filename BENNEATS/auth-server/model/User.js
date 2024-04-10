const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const validator = require('validator');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please enter your name'],
        maxLength: [30, 'Your name cannot exceed 30 characters']
    },
    email: {
        type: String,
        required: [true, 'Please enter your email'],
        unique: true,
        validate: [validator.isEmail, 'Please enter a valid email address']
    },
    password: {
        type: String,
        required: [true, 'Please enter your password'],
        minlength: [6, 'Your password must be longer than 6 characters'],
        select: false
    },
    passwordConfirm: {
        type: String,
        required: [true, 'Please enter your password'],
        minlength: [6, 'Your password must be longer than 6 characters'],
        select: false,
        validate: {
            validate: function(el) {
                return el === this.password
            },
            message: 'Passwords are not the same'
        },
    },

    isVerified:{
        type:Boolean,
        default:false,
        select:false,
    },
    otp:{
        type:Number,
        required:true,
    },
    role:{
        type:String,
        enum:['user','admin'],
        default:'user'
    },
    profileImage:{
        type:String,
        required:true,
    },
},
    {
        timestamps: true,
    },

);
module.exports = mongoose.model('User', userSchema);