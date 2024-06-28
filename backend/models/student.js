const mongoose = require('mongoose');

const studentSchema = mongoose.Schema({
    name: String,
    grade: String,
    progress: String
});

module.exports = mongoose.model('Student', studentSchema);
