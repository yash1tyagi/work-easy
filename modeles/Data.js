const mongoose = require('mongoose');
const  Schema  = mongoose.Schema
const DataSchema = new Schema({
    notes:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'notes'
    },
title:{
type: Number,
//minimum:0
optional: ''
},
titleLess:{
    type: Number,
    // minimum:0
    optional: ''
    },
    remark:{
        type: String,
        
        optional: ''
    },
date:{
type: Date,
default: Date.now
},
});
//  module.exports = mongoose.model('data',DataSchema);
const Data =  mongoose.model('data', DataSchema);
// Data.createIndexes();
module.exports = Data 
