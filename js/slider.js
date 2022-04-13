//Primero obtenemos y almacenamos todos los sliders.
const sliders = [...document.querySelectorAll('.slider_body')];

//Después obtenemos y almacenamos las flechas.
const arrowAfter = document.querySelector('#after');
const arrowBefore = document.querySelector('#before');
let value;

/*
Agrego un evento a la flecha after y otro a before.
Cada vez que ocurre el evento llamo a la función pasandole un número
en función de si hace clic para avanzar o para retorceder.
*/
arrowAfter.addEventListener('click', ()=>changePosition(1));
arrowBefore.addEventListener('click', ()=>changePosition(-1));



function changePosition(change) {

    //Obtengo y almaceno el elemento actual y su data-id.
    const currentElement = Number(document.querySelector('.slider_body--show').dataset.id);

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

    //Le quiero la clase al antiguo elemento actual y se la añado al nuevo elemento actual.
    sliders[currentElement-1].classList.toggle('slider_body--show');
    sliders[value-1].classList.toggle('slider_body--show');

}