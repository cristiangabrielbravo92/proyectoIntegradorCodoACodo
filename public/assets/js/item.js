const agregar = document.getElementById('agregar');
const quitar = document.getElementById('quitar');
const quantity = document.getElementById('quantity');
//console.log(agregar, quitar,quantity);

agregar.addEventListener('click', ()=> {
    quantity.value = Number(quantity.value) + 1;
    console.log(quantity);
});

quitar.addEventListener('click', ()=> {
    if(quantity.value > 0 ){
        quantity.value = Number(quantity.value) -1;
    }
})