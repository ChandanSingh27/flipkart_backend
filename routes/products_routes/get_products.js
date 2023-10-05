const express = require('express')
const router = express.Router() 
const {productsList,addProduct,searchProducts,popularProductsList} = require('./../../controller/product_controller.js')

router.get('/products/',productsList)
router.get('/popular-product/',popularProductsList)
router.post('/add',addProduct)
router.get('/search/',searchProducts)

module.exports = router