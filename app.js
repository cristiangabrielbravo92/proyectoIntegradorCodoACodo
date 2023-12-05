const express = require('express');
const app = express();
require('dotenv').config();

const mainRoutes = require('./src/routes/mainRoutes');
const shopRoutes = require('./src/routes/shopRoutes');
const adminRoutes = require('./src/routes/adminroutes');
const authRoutes = require('./src/routes/authRoutes');

app.use(express.static('public_html'));

app.use('/', mainRoutes);
app.use('/shop', shopRoutes);
app.use('/admin', adminRoutes);
app.use('/auth/', authRoutes);


PORT = process.env.NODEPORT;

app.listen(PORT, () => console.log(`Servidor corriendo en http://localhost:${PORT}`));