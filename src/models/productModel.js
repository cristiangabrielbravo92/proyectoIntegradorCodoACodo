const { conn } = require('../config/conn');

const getAll = async () => {
    try {
        const [rows] =  await conn.query('SELECT product.*, category.category_name, licence.licence_name FROM (product LEFT JOIN category ON product.category_category_id = category.category_id) LEFT JOIN licence ON product.licence_id = licence.licence_id;');
        //console.log("Model data: ", fields);
        const response = {
            isError: false,
            data: rows
        };
        return response;
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


//Para terminar la misión queda replicar la lógica de getOne haciendo la query con la información que le llega desde params y la query de insert
// update o delete en función de lo que está llegando
// HINT: crear es POST y actualizar es PUT teniendo en cuenta que en las ruta.s para poder escuchar put post y delete hay que instalar
// la librería "method-override" que se usa como middleware en app.js (a nivel aplicación) y cuando recibe una ruta con '_method' sobrescribe el método
// configurado en el formulario

const getOne = async (params) => {
    
    try {
        const [rows] =  await conn.query('SELECT product.*, category.category_name, licence.licence_name FROM (product LEFT JOIN category ON product.category_category_id = category.category_id) LEFT JOIN licence ON product.licence_id = licence.licence_id WHERE ?;', params);
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
}

const create = async (params) => {
    try {
        const [rows] = await conn.query('INSERT INTO product (product_name, product_description, price, stock, discount, sku, dues, image_front, image_back, licence_id, category_category_id) VALUES ?;', [params]);
        const response = {
            isError: false,
            data: rows
        };
        return response;
    }  catch (error) {
        const e = {
          isError: true,
          message: `Error al crear el registro: ${error}`
        };
    
        return e;
      } finally {
        await conn.releaseConnection();
      }
};

const edit = async (params, id) => {
    try {
        const [rows] = await conn.query('UPDATE product SET ? WHERE ?;', [params, id]);
        const response = {
            isError: false,
            message: `Producto modificado exitosamente.`,
            data: rows
        };
        return response;
    }  catch (error) {
        const e = {
          isError: true,
          message: `Error al modificar el registro: ${error}`
        };
    
        return e;
      } finally {
        await conn.releaseConnection();
      }
};

const deleteOne = async (params) => {
    try {
        const [rows] = await conn.query('DELETE FROM product WHERE ?;', params);
        const response = {
            isError: false,
            data: rows,
            message: `Producto eliminado exitosamente.`
        };
        return response;
    }  catch (error) {
        const e = {
          isError: true,
          message: `Error al eliminar el registro: ${error}`
        };
    
        return e;
      } finally {
        await conn.releaseConnection();
      }
};

module.exports = {
    getAll, getOne, create, edit, deleteOne
}