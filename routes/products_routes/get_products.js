const express = require('express')
const router = express.Router() 
const {productsList,addProduct,searchProducts} = require('./../../controller/product_controller.js')

router.get('/products/:name',productsList)
router.post('/add',addProduct)
router.get('/search-product/:searchkey',searchProducts)

module.exports = router