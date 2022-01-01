const mongoose = require('mongoose');

// user schema
const userSchema = mongoose.Schema({
    email: String,
    password: String,
    token: String
});

// user model
const User = mongoose.model('User', userSchema);

module.exports = User;