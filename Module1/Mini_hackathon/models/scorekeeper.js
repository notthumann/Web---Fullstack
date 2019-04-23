const mongoose = require('mongoose');
const model = mongoose.model;
const Schema = mongoose.Schema;

const scoreSchema = new Schemad({
    name1 : {type:String,require:true,default:'Player1'}
    score1: {type:Number,default:0}
    name2 : {type:String,require:true,default:'Player2'}
    score2: {type:Number,default:0}    
    name3 : {type:String,require:true,default:'Player3'}
    score3: {type:Number,default:0}
    name4 : {type:String,require:true,default:'Player4'}
    score4: {type:Number,default:0}
})

module.exports = model('score',scoreSchema);