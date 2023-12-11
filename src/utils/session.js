const session = require('express-session');
require('dotenv').config();

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
//   secret: "sessionAdmin",
//   resave: false,
//   saveUnitialized: true
// })