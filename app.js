const express = require('express');
const app = express();
require('dotenv').config();
const methodOverride = require('method-override');
const { initSession } = require('./src/utils/session');
const session = require('express-session');
const MySQLStore = require('express-mysql-session')(session);


//const cors = require('cors');
//app.use(cors());



/* ----- Import de las rutas ----- */
const mainRoutes = require('./src/routes/mainRoutes');
const shopRoutes = require('./src/routes/shopRoutes');
const adminRoutes = require('./src/routes/adminroutes');
const authRoutes = require('./src/routes/authRoutes');
//const { notFound } = require('./src/utils/errorHandlers'); 

/* -- Definición de la carpeta de archivos estáticos -- */ 
app.use(express.static('public'));

/* Configuración del Template Engine - EJS */
app.set('view engine', 'ejs');
app.set('views', './src/views');


/* Creación de la sesión de usuario */
app.use(initSession());

/* Locals para indicar que el usuario inició sesión */
app.use((req, res, next) => {
    res.locals.isLogged = req.session.isLogged;
    res.locals.cart = req.session.cart;
    next();

});



/* --- Parsing de los datos recibidos por POST --- */ 
app.use(express.urlencoded());
app.use(express.json())

/* Sobreescritura de POST method para usar métodos PUT y DELETE */
app.use(methodOverride('_method'));



/* ----- Rutas de la aplicación -----*/
app.use('/', mainRoutes);
app.use('/shop', shopRoutes);
app.use('/admin', adminRoutes);
app.use('/auth/', authRoutes);
//app.use(notFound);



const PORT = process.env.NODEPORT || 3000;

app.listen(PORT, () => console.log(`Servidor corriendo en http://localhost:${PORT}`));