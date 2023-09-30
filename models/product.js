const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema({
        productName: String,
        price: Number,
        description: String,
        category: String,
        productImage: String,
        brand: String,
        rating: Number
})

const Products = mongoose.model("Product",ProductSchema)

module.exports = Products
