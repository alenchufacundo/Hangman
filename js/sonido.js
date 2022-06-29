const audio = document.querySelector("#audio");
const audioActivo = document.querySelector("#activo");
const audioInactivo = document.querySelector("#no-activo");
const botonSonido = document.querySelector("#boton-sonido");
let contador = 0

//funcionalidad para play y pause de audio
botonSonido.addEventListener("click", function(){
    console.log("click");
    if (contador == 0){
        contador = 1;
        audio.play();
        audioActivo.style.display = "inline";
        audioInactivo.style.display = "none";
    } else {
        contador = 0;
        audio.pause();
        audioActivo.style.display = "none"
        audioInactivo.style.display = "inline";
    }
})

