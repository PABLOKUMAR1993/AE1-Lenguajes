/**
 * Este Porgrama se ha creado para poder cambiar de diapositiva en el Slider de la web.
 * 
 * Primero con "querySelectorAll" obtenemos y almacenamos todos los elementos que tengan
 * la id ".slider-body". Seguidamente usando una función similar almacenamos la flecha
 * de retroceso y la de avance.
 * 
 * Ahora agrego un evento a la flecha after y otro a before.
 * Cada vez que ocurre el evento llamo a la función "changePosition()" pasandole un número
 * en función de si hace clic para avanzar o para retorceder.
 * 
 * El resto del programa lo explico en comentarios, creo que se sigue mejor.
 * 
 * 
 */

const sliders = [...document.querySelectorAll('.slider-body')];
const arrowAfter = document.querySelector('#after');
const arrowBefore = document.querySelector('#before');

let value;

arrowAfter.addEventListener('click', ()=>changePosition(1));
arrowBefore.addEventListener('click', ()=>changePosition(-1));

function changePosition(change) {

    //Obtengo y almaceno el elemento actual y su data-id.
    const currentElement = Number(document.querySelector('.slider-body-show').dataset.id);

    //Ahora quiero añadirle 1 o -1 al dataid actual para pasar de diapositiva. 
    value = currentElement;
    value += change;

    /*
    Si value es superior a la lóngitud de elementos que tenemos quiero que vuelva al primero.
    Si por el contrario es menor que el primer elemento quiero que se vaya a al último.
    Para así dar sensación de bucle infinito, del primero se va al ultimo y del ultimo al primero.
    */
    if(value === 0 || value == sliders.length+1) {
        value = value === 0 ? sliders.length : 1;
    }

    //Le quito la clase al antiguo elemento actual y se la añado al nuevo elemento actual.
    //Es por un tema de estilos.
    sliders[currentElement-1].classList.toggle('slider-body-show');
    sliders[value-1].classList.toggle('slider-body-show');

}