const mongoose = require('mongoose');
const Schema = mongoose.Schema

const CommentSchema = new Schema({
    userId: {type: mongoose.Types.ObjectId, required:true, ref:"User"},
    content: {type: String, required:true},
    imageId: {type: Number, required:true},
},{
    timestamps: {type:Date}, //createdAt, updatedAt
});

module.exports = mongoose.model('Comment', CommentSchema);