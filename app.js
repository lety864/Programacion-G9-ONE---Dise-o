//con querySelector podemos usar elementos (componentes o etiquetas) de HTML 
// let parrafo = document.querySelector('p');
// parrafo.innerHTML = 'Ingresa un número entre 1 y 10';
//console.log(numeroUsuario === numeroSecreto); //regresa un booleano "true" o "false"

//gestion de eventos
let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto){ //funcion generica para reutilizar
    let elemntoHTML = document.querySelector(elemento);
    elemntoHTML.innerHTML = texto;
}

function verificarInteto(){
    let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);
    //triple igual, compara tanto el valor como el tipo de dato
    if(numeroUsuario === numeroSecreto){
        asignarTextoElemento('p',`Acertaste el numero en ${intentos} ${(intentos ==1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        //El usuario no acerto
        if(numeroUsuario > numeroSecreto){
            asignarTextoElemento('p','El numero secreto es menor');
        }else{
            asignarTextoElemento('p','El numero secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }
} 


function limpiarCaja(){
    document.querySelector('#valorUsuario').value = ''; //limpiar el input 
}

function generarNumeroSecreto(){
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //Si ya sorteamos todos los numeros
    if(listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento('p','Ya se asignaron todos los elementos posibles');
    }else{
        //Si el numero generado esta en la lista
        if(listaNumerosSorteados.includes(numeroGenerado)){
            //llamarse a si misma para generar otro numero aleatorio
            return generarNumeroSecreto();
        }else{
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function condicionesIniciales(){
    asignarTextoElemento('h1', '¡Juego del numero secreto!');
    asignarTextoElemento('p',`Ingresa un numero entre 1 y ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    console.log(numeroSecreto);
    intentos = 1;
}

function reiniciarJuego(){
    //limpiar la caja
    limpiarCaja();
    //indicar el mensaje de intervalo de numeros
    //generar numero aleatorio
    //incializar el numero de intentos 
    condicionesIniciales();
    //Deshabilitar el boton de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled', true);
}

condicionesIniciales();




