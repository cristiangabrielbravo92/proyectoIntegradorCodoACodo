const mysql = require('mysql2');
// creamos una instancia de una coneccion individual no puedo hacer consultas simultaneas
/*const connection = mysql.createConnection({  
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'characteres'
});*/

// creamos una instancia de una coneccion individual no puedo hacer consultas simultaneas
const pool = mysql.createPool({  
    host: 'localhost',
    user: 'sa',
    password: 'admin123',
    database: 'latiendita',
    port: 3366,
    waitForConnetions: true,
    connectionLimit: 10,
    queueLimit: 0,
});

/*connection.connect();
module.exports = connection;*/

pool.getConnection((error, connection)=>{
    if( error) {
        console.log('Hubo un error de conexion:', error );
    } else {
        console.log('conexion exitosa');
        connection.release();
    }
});
//se exporta como una promesa 

module.exports = {
    conn: pool.promise()
}

