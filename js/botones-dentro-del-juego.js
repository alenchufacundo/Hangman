//Iniciar nuevo juego
function nuevoJuego(){
    palabra = palabraRandom();
    reiniciar(palabra);
}

var btnNuevoJuego = document.querySelector(".nuevo-juego");

//Regresar al menu
function regresarMenu(){
    document.querySelector("#area-de-juego").classList.add("invisible");
    document.querySelector("#area-botones-inicio").classList.remove("invisible");
    document.querySelector(".titulo-principal").classList.remove("invisible"); 
    reiniciarPuntaje();
    return activarTeclas = false;
}

var btnRegresarMenu = document.querySelector(".regresar");

function rendirse(){
    erroresPermitidos = 0;
    reiniciarPuntaje()
    if(palabrasPropias.includes(palabra)){
         erroresActualesJuegoPropio();
     }
    else if(palabras.includes(palabra) ){
         erroresActuales();
    } 
}

var btnRendirse = document.querySelector("#rendirse");
btnRendirse.onclick = rendirse;

//REGRESA AL MENU
var btnVolver = document.querySelector("#volver-menu");
btnVolver.addEventListener("click",regresarMenu)


//limpia la zona de juego
function reiniciar(palabra){
    letraCorrecta = [];
    letraErronea = [];
    erroresPermitidos = 6;
    espacio = 10;
    letrasEncontradas = 0;
    activarTeclas = true;
    imagen.src = "images/ahorcado-plataforma.png"
    pincel.clearRect(0, 0, 1200, 600);
    dibujarGuiones();
}