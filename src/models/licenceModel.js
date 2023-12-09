const { conn } = require('../config/conn');

const getAll = async () => {
  try {
    const [rows] = await conn.query('SELECT * FROM licence;');
    const response = {
      isError: false,
      data: rows
    };

    return response;
  } catch (error) {
    const e = {
      isError: true,
      message: `Error al realizar la consulta: ${error}.`
    };

    return e;
  } finally {
    await conn.releaseConnection();
  }
}

module.exports = {
  getAll
}