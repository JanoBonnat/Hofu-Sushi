const progreso = document.getElementById('progreso');
const anterior = document.getElementById('anterior');
const siguiente = document.getElementById('siguiente');
const circulos = document.querySelectorAll('.circulo');
const texto = document.getElementById('texto');

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

    progreso.style.width = ((actives.length -1) / (circulos.length -1))*100 + '%'; //aumneta el tamaño de la barra de progreso

    /*if(currentActive === 1){
        anterior.disabled = true;
    }else if(currentActive === circulos.length){
        siguiente.disabled = true;
        anterior.disabled = false
    }else{
        siguiente.disabled = false;
        anterior.disabled = false;
    }*/

    if(currentActive === 1){
        anterior.disabled = true;
        siguiente.disabled = false;
        texto.textContent = `<h1>HOLA</H1>`;
    }else if(currentActive === 2){
        
        anterior.disabled = false;
        siguiente.disabled = false;
    }else if(currentActive === 3){
        
        anterior.disabled = false;
        siguiente.disabled = false;
    }else if(currentActive === circulos.length){
        anterior.disabled = false;
        siguiente.disabled = true;
    }
}
