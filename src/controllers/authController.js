const authControllers = {
    login: (req, res) => res.send('Route for Login View'),
    loginUser: (req, res) => res.send('Route for Login when a user has completed the login form and tries to login'),
    register: (req, res) => res.send('Route for Register View'),
    registerUser: (req, res) => res.send('Route for Register when a guest user has completed the register form and tries to create an account'),
    logout: (req, res) => res.send('Route for Logout when a user ends his session')


};

module.exports = authControllers;