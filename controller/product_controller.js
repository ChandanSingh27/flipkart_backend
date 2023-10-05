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
const popularProductsList = async (req,res) => {
        try{
                const data = await Products.find({
                        "rating":{$gt:4.3}
                })
                res.json(data)
        }catch(error) {
                console.log(error)
        }
}
const searchProducts = async (req,res)=> {
        try{
                let searchKey = req.query.q

                let products = await Products.find({ $or: searchKeyword(searchKey,"productName") });
                if(products.length != 0) return res.json(products)

                products = await Products.find({ $or: searchKeyword(searchKey,"description") });
                if(products.length != 0) return res.json(products)

                products = await Products.find({ $or: searchKeyword(searchKey,"category") });
                if(products.length != 0) return res.json(products)

                products = await Products.find({ $or: searchKeyword(searchKey,"brand") });
                if(products.length != 0) return res.json(products)

                products = await Products.find({});
                return res.json(products)


        }catch(error) {
                console.log(error);
        }
}

const searchKeyword = (searchKey,searchParameter) => {
        const keywords = searchKey.split(' ');
        const searchConditions = keywords.map((keyword) => ({
                [searchParameter]: { $regex: new RegExp(keyword, 'i') },
        }));
        return searchConditions
}

const addProduct = async (req,res) => {
        try{
                
                const data = await Products.insertMany(list)
                res.json(data)
        }catch(error) {
                console.log(error)
        }
}

const wishListProduct = async (req,res) => {
        try{
                let id = req.body.ids
                console.log(id);
                const data = await Products.find({_id: {$in: id}})
                res.json(data)
        }catch(error) {
                console.log(error)
        }
}

module.exports = {productsList,addProduct,searchProducts,popularProductsList,wishListProduct}