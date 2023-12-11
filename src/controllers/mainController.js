const { getProductById } = require('../services/productServices')
const licenceServices = require('../services/licenceServices')

const mainControllers = {

    home: async (req, res) => {
        //console.log(req.session);
        const licences = await licenceServices.getAllItemsLicences();
        console.log(licences)
        res.render('home', {
            view: {
                title: 'Home | FunkoShop'
            },
            collections: licences.data,
            //enableGlide: true

        });
    },

    
    contact: (req, res) => res.send('Route for Contact View'),
    about: (req, res) => res.send('Route for About View'),
    faqs: (req, res) => res.send('Route for Faqs View')
}

module.exports = mainControllers;