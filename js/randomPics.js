/**
 * Este programa hacer una llamada a la API de Unsplash.
 * La propia URL se compone del ID del cliente, después la cantidad de imagenes y finalmente la orientación de las fotos.
 * más info en: https://unsplash.com/documentation#get-a-random-photo
 * 
 * Cómo las llamadas tardan algunas fracciones de segundo en responder,
 * por la propia comunicación de las redes de inter se produce un tiempo
 * en el cual el programa no hace nada, para ello usamos las funciones
 * then().
 * 
 * Usamos dos funciones, la primera (recivePics) recibe un archivo JSON y con la funcion
 * .json() la parseamos para poder acceder a su información cómo un objeto de JS.
 * La siguiente (showPics) lo que hace es mediante un bucle for y gracias al DOM
 * mostrar en el navegador todas las fotos que ha devuelto la llamada, leyendo
 * en el objeto de la función anterior las URLs.
 * 
 * El if es por temas de CSS, necesito que las imagenes de la izquierda tengan la clase left
 * y las de la derecha tengan la clase right, para poder aplicar bien las separaciones dentro del grid.
 * 
 */

let sw;

fetch("https://api.unsplash.com/photos/random?client_id=69ScLUi1fTgxSB5LdFbXTCbOZAnIjDlIBfF8bvBSa7c&count=20&lang=es&orientation=portrait")
    .then(function recivePics(pics1) {
        return pics1.json();
    }).then(function showPics(pics2) {
        for (let i = 0; i < pics2.length; i++) {
            sw = 0;
            if (sw === 0) {
                document.getElementById('random-pics-grid').innerHTML+=
                `
                <figure class="random-pics-box-left">
                    <img class="random-pics-img"
                        src="${pics2[i].urls.regular}"
                        alt="imagen">
                </figure>
                `
                sw = 1;
            } else {
                document.getElementById('random-pics-grid').innerHTML+=
                `
                <figure class="random-pics-box-right">
                    <img class="random-pics-img"
                        src="${pics2[i].urls.regular}"
                        alt="imagen">
                </figure>
                `
                sw = 0;
            }
        }
    })