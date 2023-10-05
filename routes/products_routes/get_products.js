const express = require('express')
const router = express.Router() 
const {productsList,addProduct,searchProducts,popularProductsList,wishListProduct} = require('./../../controller/product_controller.js')

router.get('/products/',productsList)
router.get('/popular-product/',popularProductsList)
router.get('/search/',searchProducts)
router.post('/wishlist/',wishListProduct)
router.post('/add',addProduct)

module.exports = router