const session = require('cookie-session');
//esto es para la sesión de express-session en local, ver comentario más abajo
//const session = require('express-session'); 
require('dotenv').config();

function initSession() {
  return session({
    secret: process.env.SESSION_NAME,
    resave: false,
    saveUninitialized: true,
    rolling: true
  });
};

/* 
Esto es de la sesión de express session pero no funciona en vercel
function initSession() {
  return session({
    secret: process.env.SESSION_NAME,
    resave: false,
    saveUninitialized: true,
    rolling: true
  });
};
 */
module.exports = {
    initSession
}

// session({
//   secret: "funkoSession",
//   resave: false,
//   saveUnitialized: true
// })