const productServices = require('../services/productServices');
const ProductModel = require('../models/productModel'); //acá consulta al modelo directamente porque no puede traer getProductByID como función

const shopControllers = {
    //shop: (req, res) => res.send('Route for Shop View'),
    shop: async (req, res) => {
        const items = await productServices.getAllProducts();
        const { data } = items;
        /* req.session.cart = [
          {
            product_id: 15,
            image: '/img/one-piece/luffy-gear4-1.webp',
            product_name: 'Luffy Gear 4 Snakeman',
            licence_name: 'One Piece',
            product_description: 'Figura coleccionable de Monkey D. Luffy',
            quantity: 3,
            price: 1800
          },
          {
            product_id: 15,
            image: '/img/one-piece/luffy-gear4-1.webp',
            product_name: 'Luffy Gear 4 Snakeman',
            licence_name: 'One Piece',
            product_description: 'Figura coleccionable de Monkey D. Luffy',
            quantity: 3,
            price: 1800
          },
          {
            product_id: 15,
            image: '/img/one-piece/luffy-gear4-1.webp',
            product_name: 'Luffy Gear 4 Snakeman',
            licence_name: 'One Piece',
            product_description: 'Figura coleccionable de Monkey D. Luffy',
            quantity: 3,
            price: 1800
          }
        ]; */
        //console.log(req.session.cart);
        res.render( './shop/shop',{
          view: {
            title: "Shop | Funkoshop"
          },
          items: data
        });
    },

    shopFilteredByLicence: async (req, res) => {
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

    }

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

    //addItem: (req, res) => res.send(`Route for add the current item to the shop cart`),
    addItem: async (req, res) => {
      const product_id = req.params.id;
      //console.log(product_id);
      const { quantity } = req.body; 
      //console.log(quantity);

      if (!req.session.cart) {
        req.session.cart = [];
      }

      req.session.cart.push({ 
        product_id: product_id, 
        quantity: quantity 
      });

      //console.log(req.session.cart)

      res.redirect('/shop');

      
    },

    //cart: (req, res) => res.send('Route for the Cart View'),
    cart: async (req, res) => {
      const cartItems = req.session.cart;
      const {data: products} = await productServices.getAllProducts();
      //const { products: products } = items;

      //console.log(cartItems);
      //console.log(products);
      res.render( './shop/carrito',{
        view: {
          title: "Carrito | Funkoshop"
        },
        cartItems,
        products
      });

    },
     


    checkout: (req, res) => res.send('Route for go to checkout page')


}; 

module.exports = shopControllers;