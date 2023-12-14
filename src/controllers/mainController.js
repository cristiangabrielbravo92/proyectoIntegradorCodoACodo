const { getProductById } = require('../services/productServices');
const licenceServices = require('../services/licenceServices');
const path = require('path');
const contactServices = require('../services/contactServices');

const mainControllers = {

    home: async (req, res) => {
        //console.log(req.session);
        const licences = await licenceServices.getAllItemsLicences();
        //console.log(licences);
        res.render('home', {
            view: {
                title: 'Home | FunkoShop'
            },
            collections: licences.data,
            //enableGlide: true

        });
    },

    contact: (req, res) => {
        res.render(path.resolve(__dirname, '../views/contact'), {
            view: {
                title: 'Contacto | FunkoShop',
            }
        });
    },
    enviarMensaje: async (req, res) => {
        const mensaje = req.body;
        await contactServices.enviarMensaje(mensaje);
        res.redirect('/mensajeEnviado');
    }, 
    
    // res.send('Enviando mensaje por buho de Harry Potter'),

    mensajeEnviado: (req, res) => {
        const mensaje = req.body;
        console.log(mensaje);
        res.render(path.resolve(__dirname, '../views/mensajeEnviado'), {
            view: {
                title: 'Mensaje enviado | FunkoShop',
            }
        });

    },
    about: (req, res) => res.send('Route for About View'),
    faqs: (req, res) => res.send('Route for Faqs View'),
    page_error: (req, res) => {
        res.render(path.resolve(__dirname, '../views/page_error'), {
            view: {
                title: 'Recurso no encontrado | FunkoShop',
            }
        });
    },
}


module.exports = mainControllers;