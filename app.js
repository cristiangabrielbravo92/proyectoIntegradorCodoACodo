const express = require('express');
const app = express();
//const cors = require('cors');
require('dotenv').config();

//app.use(cors());

/* ----- Import de las rutas ----- */
const mainRoutes = require('./src/routes/mainRoutes');
const shopRoutes = require('./src/routes/shopRoutes');
const adminRoutes = require('./src/routes/adminroutes');
const authRoutes = require('./src/routes/authRoutes');
//const { notFound } = require('./src/utils/errorHandlers'); 

/* -- Definición de la carpeta de archivos estáticos -- */ 
app.use(express.static('public_html'));

/* --- Parsing de los datos recibidos por POST --- */ 
app.use(express.urlencoded());
app.use(express.json())

/* ----- Rutas de la aplicación -----*/
app.use('/', mainRoutes);
app.use('/shop', shopRoutes);
app.use('/admin', adminRoutes);
app.use('/auth/', authRoutes);
//app.use(notFound);


const PORT = process.env.NODEPORT;

app.listen(PORT, () => console.log(`Servidor corriendo en http://localhost:${PORT}`));