const { conn } = require('../config/conn');

const cargarContacto = async (params) => {
    try {
        console.log(params)
    }
    catch (error) {
        const e = {
            isError: true,
            message: `Error al consultar los datos: ${error}`
        }
        return e;
    } finally {
        await conn.releaseConnection();
    }
}

module.exports={cargarContacto};
