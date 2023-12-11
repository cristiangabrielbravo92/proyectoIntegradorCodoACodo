const productServices = require('../services/productServices');
const ProductModel = require('../models/productModel'); //acá consulta al modelo directamente porque no puede traer getProductByID como función

const shopControllers = {
    //shop: (req, res) => res.send('Route for Shop View'),
    shop: async (req, res) => {
        const items = await productServices.getAllProducts();
        const { data } = items;
        res.render( './shop/shop',{
          view: {
            title: "Shop | Funkoshop"
          },
          items: data
        });
    },

    //item: (req, res) => res.send(`Route for find and retrieve a product from the ID: ${req.params.id}`),
    item: async (req, res) => {
        const id = req.params.id;
        //const item = await productServices.getProductByID;
        const item = await ProductModel.getOne({product_id: id}) //acá consulta al modelo directamente porque no puede traer getProductByID como función
        const { data } = item;
    
        /* if (!data[0]) {
          return res.status(404).send('No se pudo encontrar el producto del ID seleccionado');
        } */
    
        res.render('./shop/item', {
          view: {
            title: "Item | Funkoshop"
          },
          item: data[0],
          //enableGlide: true
        });
      },

    addItem: (req, res) => res.send(`Route for add the current item to the shop cart`),
    /* addItem: async (req, res) => {

    } */

    cart: (req, res) => res.send('Route for the Cart View'),
     


    checkout: (req, res) => res.send('Route for go to checkout page')


}; 

module.exports = shopControllers;