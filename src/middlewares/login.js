const isLogged = (req, res, next) => {
    if (req.session.isLogged) {
     return next();
    }
  
    return res.status(401).send('Inicio de sesión requerido');
  }
  
  module.exports = {
    isLogged
  }