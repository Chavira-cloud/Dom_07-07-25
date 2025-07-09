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
const navegacion = document.querySelector('.navegacion');
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
/*
const btnEnviar = document.querySelector('.boton--primario');
btnEnviar.addEventListener('click', function(e){
    console.log(e);
    e.preventDefault();

    // validar un formulario

    console.log('enviando formulario');
});
*/

//eventos de los inputs y textarea

const datos = {
    nombre: '',
    email: '',
    mensaje: ''
}

const nombre = document.querySelector('#nombre');
const email = document.querySelector('#email');
const mensaje = document.querySelector('#mensaje');
const formulario = document.querySelector('.formulario')

email.addEventListener('input', leerTexto);
mensaje.addEventListener('input', leerTexto);

//El evento de submit
formulario.addEventListener('submit', function(e){
    e.preventDefault();

    //validas el formulario
    const {nombre, email, mensaje} = datos;

    if(nombre === '' || email === '' || mensaje === ''){
        mostraAlerta('Todos los campos SON OBLIGATORIOS','error')
        return; // Corta la ejecución del código   
    }
    
    // crear una alerta para el Envio correctamente
    mostraAlerta('Mensaje enviado correctamente')
        
    console.log('Enviando formulario');
});

function leerTexto(e){
    //console.log(e.target.value);
    datos[e.target.id] = e.target.value;

   //console.log(datos);   
}

function mostraAlerta(mensaje, error = null){
    const alerta = document.createElement('P')
    alerta.textContent = mensaje;

    if(error){
        alerta.classList.add('error')
    }else{
        alerta.classList.add('frmcontact');
    }

    formulario.appendChild(alerta);

    setTimeout(() =>{
        alerta.remove();
    },5000)
}

/*
function mostrarMensaje(mensaje){
    const alerta = document.createElement('P')
    alerta.textContent = mensaje;
    alerta.classList.add('frmcontact');
    formulario.appendChild(alerta)

    setTimeout(()=>{
        alerta.remove();
    },5000)
}

// Muestra un erro en pantalla
function mostrarError(mensaje){
    const error = document.createElement('P');
    error.textContent = mensaje;
    error.classList.add('error')
    formulario.appendChild(error)

    //Desaparezca en despues de 5 seg
    setTimeout(()=>{
        error.remove();
    },5000);
}
*/