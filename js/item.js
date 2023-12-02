const agregar = document.getElementById('agregar');
const quitar = document.getElementById('quitar');
const quantity = document.getElementById('quantity');
//console.log(agregar, quitar,quantity);

agregar.addEventListener('click', ()=> {
    if (quantity.value < 255) { //para usar tipo de dato tinyint en la base de datos, el 255 es porque hasta el 254 se le puede agregar uno, en 255 daría 256
        quantity.value = Number(quantity.value) + 1;
        //console.log(quantity);
    }
});

quitar.addEventListener('click', ()=> {
    if(quantity.value > 0 ){ //porque no se puede pedir una cantidad negativa
        quantity.value = Number(quantity.value) -1;
    }
})