// querySelector
const heading = document.querySelector('.header__texto h2') // 0  o 1 Elements
heading.textContent ='Nuevo heading'
console.log(heading)

//querySelectorAll
const enlaces = document.querySelectorAll('.navegacion a'); // te retorna todos los que concuerden con el selector
console.log(enlaces[0]);
enlaces[0].textContent = 'Nuevo texto para enlace';
// enlaces[1].href= 'https://google.com'
enlaces[0].classList.add('nueva-clase');
//enlaces[0].classList.remove('navegacion__enlace');

// getElementById
/*
const  heading2 = document.getElementById('heading');
console.log(heading2);
*/

// generar un nuevo enlace
const nuevoEnlace =  document.createElement('A')

// Agregar el href
nuevoEnlace.href= 'nuevo-enlace.html'

// Agregar el texto
nuevoEnlace.textContent='nuevo enlace';

//Agregar la clase
nuevoEnlace.classList.add('navegacion__enlace');

//Agregarlo en el documento
const navegacion =document.querySelector('.navegacion');
navegacion.appendChild(nuevoEnlace);

console.log(nuevoEnlace);



//eventos 
console.log(1);

window.addEventListener('load', function(){  //load espera a que el js y los archivos que dependen del HTML esten listos
    console.log(2);
})

window.onload = function(){
    console.log(3);
}

document.addEventListener('DOMContentLoaded', function(){ // solo espera por el html, pero no espera css o imagenes 
 console.log(4);
});

console.log(5);

//Seleccionar elementos y asociarlos a un evento

const btnEnviar = document.querySelector('.boton--primario');
btnEnviar.addEventListener('click', function(e){
    console.log(e);
    e.preventDefault();

    // validar un formulario

    console.log('enviando formulario');
});