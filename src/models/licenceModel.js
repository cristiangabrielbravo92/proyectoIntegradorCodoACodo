const { conn } = require('../config/conn');

const getAll = async () => {
  try {
    //la siguiente es una consulta a la BD local
    //const [rows] = await conn.query('SELECT * FROM challenge_integrador.licence;');
    const [rows] = await conn.query('SELECT * FROM licence;');
    //console.log(rows);
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


/* const getLicenceIDByLicenceName = async (params) => {
    
  try {
      const [rows] =  await conn.query('SELECT challenge_integrador.licence.licence_id FROM challenge_integrador.licence WHERE challenge_integrador.licence.licence_name = ?;', params);
      const response = {
          isError: false,
          data: rows
      }
      return response;
      
  } catch (error) {
      const e = {
          isError: true,
          message: `Error al consultar el dato: ${error}`
      }
      return e;
  } finally {
      await conn.releaseConnection();
  }
} */


module.exports = {
  getAll //, 
  //getLicenceIDByLicenceName
}