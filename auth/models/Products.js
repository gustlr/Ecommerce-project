const mongoose = require('mongoose'), Schema = mongoose.Schema;

const ProductSchema = mongoose.Schema({
    productCode:String,
    productName:String,
    productDetail:String,
    productImage: String,
    productPrice:Number,
    companyId:String
})

module.exports = mongoose.model('product', ProductSchema);
