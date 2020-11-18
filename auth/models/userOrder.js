const User = require('./User');

const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const UserOrder = new Schema({
    
    userId:String,
    cartInProducts:[],
    totlePrice:Number
    
})

module.exports = mongoose.model('userOrder', UserOrder);