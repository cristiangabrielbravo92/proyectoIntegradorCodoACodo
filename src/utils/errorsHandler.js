const path = require('path');


module.exports = {
    notFound: ( req,res, next) => {
       //res.status(404).sendFile(path.resolve(__dirname ,'../../public/pages/404.html')); 
       res.status(404).sendFile(res.render( 'page_error')); 
       //  res.status(404).res.render('404');
    }
}
// no se puede usar asi la ruta hay que usar el componenet path proopio de js

/*module.export = {
    notFound: ( req,res, next) => {
        res.status(404).sendFile(__dirname + '/public/pages/404.html'); // no se puede usar asi la ruta hay que usar el componenet path proopio de js
    }
}*/