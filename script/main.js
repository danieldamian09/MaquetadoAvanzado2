// cambiar el elemento progress de acuerdo al numero que ingrese el usuario
// revisar formula con respecto al value
var progressBar = document.querySelector('#progressBar');
var ingresar = document.querySelector('#miValor');

function actualizarProgreso() {
    progressBar.value = ingresar.value;
}


// dibujo simple en canvas minuto 37 de la clase
var canvas = document.querySelector('#lienzo');
var ctx = canvas.getContext('2d');
// Rectangulo a x=10 y=10 con width=50
ctx.fillStyle = 'rgb(200, 0, 0)';
ctx.fillRect(10, 10, 50, 50);
// Rectangulo a x=30 y=30 con width=50
ctx.fillStyle = 'rgba(0, 0, 200, 0.5)';
ctx.fillRect(30, 30, 50, 50);

// manipulacion del elemento video
var miVideo = document.querySelector('#miVideo');
var reproducir = document.querySelector('#reproducir');
var alternar = true;

function Reproducir() {
    if (alternar) {
        miVideo.play();
        reproducir.innerHTML = 'click pause';
        reproducir.style.color = '#eee';
        reproducir.style.backgroundColor = 'darkslateblue';
        alternar = false;
    }else{
        miVideo.pause();
        reproducir.innerHTML = 'click play';
        reproducir.style.color = '#ccc';
        reproducir.style.backgroundColor = 'slateblue';
        alternar = true;
    }
}
