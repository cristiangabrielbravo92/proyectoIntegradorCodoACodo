const contactModel = require('../models/contactModel');

const enviarMensaje = async (params) => {
    return await contactModel.cargarContacto(params);
  }

  module.exports = {enviarMensaje}