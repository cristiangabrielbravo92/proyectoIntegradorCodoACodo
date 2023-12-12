const ProductModel = require('../models/productModel');
//const LicenceModel = require('../models/licenceModel')
//const licenceServices = require('../services/licenceServices');

const getAllProducts = async () => {
    return await ProductModel.getAll();
}

const getProductById = async (id) => {
    return await ProductModel.getOne({product_id: id});
} //este no hace falta que esté acá pero lo dejo como referencia

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
      licence_id: item.licence,
      category_id: item.category
    }
    //console.log(itemSchema);
    return await ProductModel.create([Object.values(itemSchema)]);
  }

const editProduct = async (id, item) => {
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
      licence_id: item.licence,
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