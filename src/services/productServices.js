const ProductModel = require('../models/productModel')

const getAllProducts = async () => {
    return await ProductModel.getAll();
}

const getProductById = async (id) => {
    return await productModel.getOne({product_id: id});
} 

const createProduct = async (item, files) => {
    const itemSchema = {
      product_name: item.name,
      product_description: item.description,
      price: item.price,
      stock: item.stock,
      discount: item.discount,
      sku: item.sku,
      dues: item.dues,
      image_front: '/'+files[0].filename,
      image_back: '/'+files[1].filename,
      licence_id: item.collection,
      category_id: item.category
    }
    return await ProductModel.create([Object.values(itemSchema)]);
  }

const editProduct = async (item, id) => {
    const itemSchema = {
      product_name: item.name,
      product_description: item.description,
      price: item.price,
      stock: item.stock,
      discount: item.discount,
      sku: item.sku,
      dues: item.dues,
      image_front: '/imagen_front',
      image_back: '/imagen_front',
      licence_id: item.collection,
      category_id: item.category
    }
  
    return await ProductModel.edit(itemSchema, {product_id: id});
  }

const deleteProduct = async (id) => {
    return await ProductModel.deleteOne({product_id: id});
  }

module.exports = {
    getAllProducts,
    getProductById,
    create: createProduct,
    edit: editProduct,
    delete: deleteProduct

}