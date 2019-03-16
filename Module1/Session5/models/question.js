const mongoose = require('mongoose');
const model = mongoose.model;
const Schema = mongoose.Schema;

const QuestionSchema = new Schema({
    content: {type: String, required: true, default: 'Question'},
    yes: {type: Number, default:0},
    no: {type: Number, default:0},
});


module.exports = model('question', QuestionSchema);