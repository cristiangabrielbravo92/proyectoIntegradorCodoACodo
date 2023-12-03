const adminControllers = {
    admin: (req, res) => res.send('Route for Admin View'),
    create: (req, res) => res.send('Route for Create View'),
    createItem: (req, res) => res.send('Route for Create that adds a New Item in DB'),
    edit: (req, res) => res.send('Route for Edit View'),
    editItem: (req, res) => res.send('Route for Edit that Update an existing Item in DB'),
    deleteItem: (req, res) => res.send('Route for Delete that Deletes an existing Item in DB')

}


module.exports = adminControllers;