const { getProductById } = require('../services/productServices')

const mainControllers = {
    home: async (req, res) => {
        const id = req.params.id;
        const results = await getProductById(id);

        if (results.isError) {
            return res.status(500).send({
                message: 'Hemos tenido un error al consultar los datos',
                error: results.message
            
            });
        }


        //console.log("results data: ", results);

        res.send({
            info: 'Route for Home View',
            data: results 
        })
    },
    contact: (req, res) => res.send('Route for Contact View'),
    about: (req, res) => res.send('Route for About View'),
    faqs: (req, res) => res.send('Route for Faqs View')
}

module.exports = mainControllers;