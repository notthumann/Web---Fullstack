const mongoose = require('mongoose');
const model = mongoose.model;
const Schema = mongoose.Schema;

const GameSchema = new Schema({
    p1:{name:{type:String}, roundScore:{type:Array, default : [0]}},
    p2:{name:{type:String}, roundScore:{type:Array, default : [0]}},
    p3:{name:{type:String}, roundScore:{type:Array, default : [0]}},
    p4:{name:{type:String}, roundScore:{type:Array, default : [0]}},
    
});

module.exports = model('Game', GameSchema)