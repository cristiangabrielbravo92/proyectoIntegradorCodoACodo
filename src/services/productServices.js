const productModel = require('../models/productModel')

const getProductById = async (id) => {
    return await productModel.getOne({product_id: id});
} 

module.exports = {
    getProductById
}