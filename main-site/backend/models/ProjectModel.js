const mongoose = require('mongoose');
const User = require('./UserModel');

// project schema
const projectSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: User
    },
    name: String,
    view: String,
    code: String,
    preview: String
});

// project model
const Project = mongoose.model('Project', projectSchema);

module.exports = Project;