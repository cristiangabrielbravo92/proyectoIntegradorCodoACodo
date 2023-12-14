const { conn } = require('../config/conn');

const getAll = async () => {
    try {
        const [rows] =  await conn.query('SELECT product.*, category.category_name, licence.licence_name FROM (product LEFT JOIN category ON product.category_category_id = category.category_id) LEFT JOIN licence ON product.licence_id = licence.licence_id;');
        //console.log(rows)
        const response = {
            isError: false,
            data: rows
        };
        //console.log(response);
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




const getOne = async (params) => {
    //console.log(params);
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

const getAllByLicence = async (licence_id) => {
    try {
        const [rows] =  await conn.query('SELECT * FROM `product` WHERE ?;', licence_id);
        //console.log(rows)
        const response = {
            isError: false,
            data: rows
        };
        //console.log(response);
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



const edit = async (id, params) => {
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
        //const [rows] = await conn.query('DELETE FROM `challenge_integrador`.`product` WHERE ?;', params);
        await conn.query('DELETE FROM `challenge_integrador`.`product` WHERE ?;', params);
        //DELETE FROM `challenge_integrador`.`product` WHERE (`product_id` = '18');
        //'DELETE FROM product WHERE ?;'
        const response = {
            isError: false,
            //data: rows,
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
    getAll, getOne, getAllByLicence, create, edit, deleteOne
}