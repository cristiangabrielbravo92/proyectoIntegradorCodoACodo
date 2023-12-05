const { conn } = require('../config/conn');

const getAll = async () => {
    try {
        const [rows] =  await conn.query('SELECT * FROM product;');
        //console.log("Model data: ", fields);
        return rows;
    } catch (error) {
        const e = {
            isError: true,
            message: `Error al consultar los datos: ${error}`
        }
        return e;
    } finally {
        await conn.releaseConnection();
    }
}

// Video clase 37 repaso de modelos y servicios en 1:38:30
//Para terminar la misión queda replicar la lógica de getOne haciendo la query con la información que le llega desde params y la query de insert
// update o delete en función de lo que está llegando
// HINT: crear es POST y actualizar es PUT teniendo en cuenta que en las rutas para poder escuchar put post y delete hay que instalar
// la librería "method-override" que se usa como middleware en app.js (a nivel aplicación) y cuando recibe una ruta con '_method' sobrescribe el método
// configurado en el formulario

const getOne = async (params) => {
    
    try {
        const [rows] =  await conn.query(`SELECT * FROM product WHERE ?;`, params);
        return rows;
        
    } catch (error) {
        const e = {
            isError: true,
            message: `Error al consultar los datos: ${error}`
        }
        return e;
    } finally {
        await conn.releaseConnection();
    }


}

module.exports = {
    getAll, getOne
}