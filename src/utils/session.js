const session = require('express-session');
require('dotenv').config();

const { connection } = require('../config/conn');
const MySQLStore = require('express-mysql-session')(session);


const sessionStore = new MySQLStore(connection);


function initSession() {
  return session({
    secret: process.env.SESSION_NAME,
    resave: false,
    saveUninitialized: true,
    rolling: true
  });
};


module.exports = {
    initSession
}

// session({
//   secret: "funkoSession",
//   resave: false,
//   saveUnitialized: true
// })