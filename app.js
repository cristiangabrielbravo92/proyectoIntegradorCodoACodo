const express = require('express');
const app = express();

app.use(express.static('public_html'));

app.get('/home', (req, res) => res.sendFile(__dirname + '/public_html/index.html'));
//hasta acá son 38:23 del video de la mission 4  https://www.youtube.com/watch?v=U0HfMPfS5cI&list=PLfiFSbj15P0tHOxqs1cICi5dacXrtetTg&index=7

app.get('/ping', (req, res) => res.send('pong'));



app.listen(4000, () => console.log(`Servidor corriendo en http://localhost:4000`));
//las comillas `` se hacen con alt+96