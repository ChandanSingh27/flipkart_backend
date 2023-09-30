const Products = require('../models/product.js')
const list = require('../products.js')

const productsList = async (req,res) => {
        try{
                const data = await Products.find(req.query)
                res.json(data)
        }catch(error) {
                console.log(error)
        }
}

const searchProducts = async (req,res)=> {
        try{
                let searchKey = req.params.searchkey
                const phoneName = ['mobiles','mobile','mobile phone','mobile phones','Cell Phones','smartphones','android phone']
                if(phoneName.includes(searchKey.toLowerCase())) searchKey = "phone"
                let searchProducts = await Products.find(
                {
                        $or: [
                                {productName: {$regex: searchKey,$options:"i"},},
                                {brand: {$regex: searchKey,$options:"i"},}
                        ]
                }
                )
                if(searchProducts.length == 0) {
                        searchProducts = await Products.find()
                }
                res.json(searchProducts)
        }catch(error) {
                console.log(error);
        }
}

const addProduct = async (req,res) => {
        try{
                
                const data = await Products.insertMany(list)
                res.json(data)
        }catch(error) {
                console.log(error)
        }
}
module.exports = {productsList,addProduct,searchProducts}