const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ImagesSchema = new Schema({
    links: {type : String, required:true},
    views: {type : Number, required:true, default:0},
    like: {type: Number, required:true, default:0},
    description: String, 
    titles: String, 
    author: {type : mongoose.Types.ObjectId, required:true, ref:"User"},
}, {
    timestamps: {type:Date}, //createdAt, updatedAt
});

module.exports = mongoose.model('Image', ImagesSchema);