const progreso = document.getElementById('progreso');
const anterior = document.getElementById('anterior');
const siguiente = document.getElementById('siguiente');
const circulos = document.querySelectorAll('.circulo');

let currentActive = 1; //variable para saber a qué nivel de los pasos vamos

siguiente.addEventListener('click', () => { //escucha el click y ejecuta una funcion
    currentActive++;

    if(currentActive > circulos.length) {
        currentActive = circulos.length;   //con este if la variable currentActive nunca va a ser mayor a la cantidad de circulos
    }

    update();

} );

anterior.addEventListener('click', () => {
    currentActive--;

    if(currentActive < 1) {
        currentActive = 1;
    }
    
    update();

} );

function update(){
    circulos.forEach( (circulo, index) => {
        if (index < currentActive) {
            circulo.classList.add('active');   //agregar clase activo
        } else {
            circulo.classList.remove('active'); //remover clase activo
        }

    } );

    const actives = document.querySelectorAll('.active');
}
