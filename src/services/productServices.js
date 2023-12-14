const ProductModel = require('../models/productModel');
//const LicenceModel = require('../models/licenceModel')
//const licenceServices = require('../services/licenceServices');

const getAllProducts = async () => {
    return await ProductModel.getAll();
}

const getProductById = async (id) => {
    return await ProductModel.getOne({product_id: id});
} 

const getProductsByLicence = async (id) => {
  return await ProductModel.getOne({product_id: id});
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
      licence_id: item.licence,
      category_id: item.category
    }
    //console.log(itemSchema);
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
      image_front: '',
      image_back: '',
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
    getProductsByLicence,
    create: createProduct,
    edit: editProduct,
    delete: deleteProduct

}