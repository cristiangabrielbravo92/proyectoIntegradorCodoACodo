const userCredentials = {
    email: 'admin@funkoshop.com',
    password: 'oneRingToRuleThemAll'
}

const authControllers = {
    //login: (req, res) => res.send('Route for Login View'),
    login: (req, res) => res.render('./auth/login', {
        view: { 
            title: 'Login | Funkoshop'
        }
    }),
    
    //loginUser: (req, res) => res.send('Route for Login when a user has completed the login form and tries to login'),
    loginUser: (req, res) => {
        const {email, password } = req.body;
        const emailValidation = email == userCredentials.email;
        const passwordValidation = password == userCredentials.password;
        req.session.isLogged = emailValidation && passwordValidation ? true : false;

        if (req.session.isLogged) {
            return res.redirect('/admin');
        }

        return res.status(401).send('Las credenciales ingresadas son inválidas.');



    },
    
    //register: (req, res) => res.send('Route for Register View'),
    register: (req, res) => res.render('./auth/register', {
        view: {
            title: 'Register | Funkoshop'
        }
    }),

    registerUser: (req, res) => res.send('Route for Register when a guest user has completed the register form and tries to create an account'),
    
    //logout: (req, res) => res.send('Route for Logout when a user ends his session')
    logout: (req, res) => res.redirect('/')


};

module.exports = authControllers;











/*
const userCredentials = {
    email: 'superadmin@funkoshop.com',
    password: 'admin1234'
}

const authControllers = {
    //login: (req, res) => res.send('Route for Login View'),
    login: (req, res) => res.render('./auth/login', {
        view: { 
            title: 'Login | Funkoshop'
        }
    }),

    //loginUser: (req, res) => res.send('Route for Login when a user has completed the login form and tries to login'),
    loginUser: (req, res) => {
        const { email, password } = req.body;
        const emailValidation = userCredentials.email == email;
        const passwordValidation = userCredentials.password == password;

        req.session.isLogged = emailValidation && passwordValidation ? true : false;

        if (req.session.isLogged) {
            res.locals.isLogged = true;
            return res.redirect('/admin');
        }
        
        return res.status(401).send('Credenciales inválidas');
    },

    //register: (req, res) => res.send('Route for Register View'),
    register: (req, res) => res.render('./auth/register', {
        view: {
            title: 'Register | Funkoshop'
        }
    }),
    
    registerUser: (req, res) => res.send('Route for Register when a guest user has completed the register form and tries to create an account'),
    //logout: (req, res) => res.send('Route for Logout when a user ends his session')
    logout: (req, res) => {
        req.session.isLogged = false;
        res.send('Sesión finalizada.')
    }

};

module.exports = authControllers;

*/