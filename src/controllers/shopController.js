const shopControllers = {
    shop: (req, res) => res.send('Route for Shop View'),
    item: (req, res) => res.send(`Route for find and retrieve a product from the ID: ${req.params.id}`),
    addItem: (req, res) => res.send(`Route for add the current item to the shop cart`),
    cart: (req, res) => res.send('Route for the Cart View'),
    checkout: (req, res) => res.send('Route for go to checkout page')


}; 

module.exports = shopControllers;