const ProductService = require('../services/productServices');
const CategoryService = require('../services/categoryServices');
const LicenseService = require('../services/licenceServices');
//const ProductModel = require('../models/productModel'); //acá consulta al modelo directamente porque no puede traer editProduct como función

const adminControllers = {
    admin: async (req, res) => {
        const { data } = await ProductService.getAllProducts();
        res.render( './admin/admin',
        {
            view: {
                title: 'List of Products | Admin Funkoshop'
            },
            items: data
        });
    },
    
    create:  async (req, res) => {
        const { data: categories } = await CategoryService.getAllItemsCategories();
        const { data: licences } = await LicenseService.getAllItemsLicences();
        
        res.render('./admin/create', {
            view: {
                title: 'Create Product | Admin Funkoshop'
              },
              categories,
              licences
        });
    },

    createItem: async (req, res) => {
        const item = req.body; 
        const files = req.files;
        //console.log(item);
        await ProductService.create(item, files);
        res.redirect('/admin');    
    },

    edit: async (req, res) => {
        const id = req.params.id;
        //console.log(id);
        const { data: categories } = await CategoryService.getAllItemsCategories();
        const { data: licences } = await LicenseService.getAllItemsLicences();
        const { data } = await ProductService.getProductById(id);
        res.render('./admin/edit', {
            view: {
                title: `Edit Product | Admin Funkoshop`
              },
              item: data[0],
              categories,
              licences
        });
    },

    editItem: async (req, res) => {
        const {id} = req.params.id;
        //console.log(id);
        const item = req.body;
        //await ProductModel.edit(item, id);
        await ProductService.edit(item, id);
        res.redirect('./admin');
    },

    deleteItem: async (req, res) => {
        const id = req.params.id;
        //console.log(id);
        await ProductService.delete(id);
        //await ProductModel.deleteOne({product_id: id});
        res.redirect('/admin');
    }
    

};


module.exports = adminControllers;