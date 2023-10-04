const express = require('express')
const router = express.Router() 
const {productsList,addProduct,searchProducts,popluarProductsList} = require('./../../controller/product_controller.js')

router.get('/products/',productsList)
router.get('/popular-product/',popluarProductsList)
router.post('/add',addProduct)
router.get('/search-product/:searchkey',searchProducts)

module.exports = router