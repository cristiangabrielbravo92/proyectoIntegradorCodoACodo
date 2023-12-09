// import { getItems } from '../service/itemService';
const itemService = require('../service/itemService')
const path = require('path');
const fs = require('fs');


const mainController = {
    home:( req, res )=> {       
       itemService.getItems().then( items => {
           //console.log(items);
           res.render('home',{
            title: 'Home | FunkoShop',
            items                  
        });
       });
        
    },
    contact: ( req, res )=> {  
        res.send('Route for Contact View');
    },
    about:( req, res )=> {
      res.send('Route for About View');
    },
    faqs:( req, res )=>{ 
        res.send('Route for Faqs View');
    },
    shop: ( req, res )=> {   
     itemService.getItems().then( items => { 
            res.render('shop', {
                title: 'Shop | FunkoShop',
                items
            });
        });
    },

    getShopItemById: ( req, res )=> {      
        const data = fs.readFileSync(path.resolve(__dirname, '..', 'data', 'items.json') );
        const items = JSON.parse(data);
        const item = items.find( item => item.product_id == req.params.id);
       
       if (item) {
        console.log(item.product_id)
        res.render('item',{
            title: 'item | FunkoShop',
            item,
            items
        });
       } else {
        res.render('page_error');
       }
    
    },
    
    getShopItemByItem: ( req, res )=> {      
        const data = fs.readFileSync(path.resolve(__dirname, '..', 'data', 'items.json') );
        const items = JSON.parse(data);
      
        if(req.query.search) {
            const itemsFiltrados = items.filter(item => {
                return item.licence_name.toLowerCase().includes(req.query.search.toLowerCase())
            });
           res.render('shop', { 
            title: 'Shop',
            items: itemsFiltrados
         });
        } else {
            res.render('shop', { 
                title: 'Shop',
                items });
        }
   
    },

    postShopItemById:( req, res )=> {  
        const id = req.params.id;
        res.send( 'Route post for item id' +  id );
    },
    getCart:( req, res )=> { 
        res.render('carrito', {
            title: 'Carrito | FunkoShop'
        });
    },
    postCart:( req, res )=> { 
        res.send('Route for post cart view');
    },

   login:( req, res )=> {
        res.render('login', {
            title: 'Login | FunkoShop'
        });
       // res.sendFile(path.resolve(__dirname, '..' , 'pages', 'login.html' )); 
    },

    postLogin:( req, res )=> {
        res.send('route for login');
    },
    getRegister:( req, res )=> {
        res.render('register', {
            title: 'Registro | FunkoShop'
        });
    },
    postRegister:( req, res )=> {
        res.send('route for post register');
    },
    logout:( req, res )=> {
        res.render('login');
    },
    admin:( req, res )=> { 
        res.render('listadoProductos', {
            title: 'Listado | FunkoShop'
        });
       // res.sendFile(path.resolve(__dirname,  'listadoProductos.html' )); 
       //res.sendFile(path.resolve(__dirname, '..' , '..', 'public', 'pages', 'listadoProductos.html' )); 
    },
    
    poductList:( req, res ) => {
        res.render('listadoProductos');
    },
    
    getAdminCreate:( req, res )=> {
        //const id = req.params.id;
        res.render('create', {
            title: 'Crear | FunkoShop'
        });
   },
   postAdminCreate:( req, res)=> {
    //const id = req.params.id;
    res.send('route post create id');
   },
   getAdminEditById:( req, res )=> {   
    res.render('edit', {
        title: 'Editar | FunkoShop'
    });
    //res.send('Route for admin view by id' + id);
   },
   putAdminEditById:( req, res )=> {   
    res.send('Route for edit admin view by id');
   },
   deleteAdmById:( req, res )=> {   
    res.send('Route for delete admin view by id');
   },




}

module.exports = mainController;