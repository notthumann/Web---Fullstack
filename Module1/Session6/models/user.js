const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema= new Schema({
    name: {type: String, required:true},
    dob: Date,
    passwords: {type: String, required:true},
    location: String,
    account: {type: String, required:true, unique:true},
    gender: String,
});

module.exports = mongoose.model('User', UserSchema);