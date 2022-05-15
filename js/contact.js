/**
 * El formlario de contacto funciona gracias a la API de formspree.
 * Este código no es necesario para que funcione el formulario, pero por defecto al
 * darle a enviar recarga la página de contacto mostrando un mensaje de publicidad
 * de formspree, para evitar ese evento he creado el siguiente codigo.
 * 
 * Este programa almacena en una constante el formulario, para seguidamente indicarle
 * que cada vez que ocurra el evento "submit" en el formlario, quiero seguidamente llamar
 * a la función "handleSubmit", la cual es la que impide la recarga de la página.
 * 
 * la función handelSubmit almacena en una constante la respuesta de la llamda a la API,
 * si la respuesta es un OK.202 entonces quiero primero resetear la operación por defecto
 * del formulario actual, que es recargar la página mostrando publicidad y seguidamente
 * quiero cambiarlo por un mensaje de agradecimiento.
 * 
 */

const $form = document.querySelector('#form');

$form.addEventListener('submit', hundleSubmit);

async function hundleSubmit(event) {
    event.preventDefault()
    const form = new FormData(this);
    const response = await fetch(this.action, { 
        method: this.method,
        body: form,
        headers: {
            'Accept': 'application/json'
        }
    })

if (response.ok) {
    this.reset
    document.getElementById("response").innerHTML =
    `
    <h3>Gracias!</h3>
    <p>He recibido tu correo correctamente, pronto me pondré en contacto contigo.</p>
    `
}

}