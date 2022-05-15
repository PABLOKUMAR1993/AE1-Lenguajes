/**
 * Cada vez que el usuario pulsa el botón de boscar llama a la función searchPics().
 * 
 * Almaceno en una variable lo que ha escrito el usuario en la barra de busqueda,
 * seguidamente formateo el resultado del buscado a "" porque si no, no lo puedes
 * sobreescribir después.
 * 
 * Ahora hago una llamada a la api de unsplash y metida en la URL de llamada le meto
 * la query de busqueda, que es la misma palabra que ha escrito el usuario, así me
 * devuelve resultados con esa palabra.
 * 
 * El mensaje recibido en JSON lo parseo para convertirlo a un objeto literal de JS.
 * Ahora leo ese objeto con un bucle for para mostrar todas las URLs que me haya devuelto
 * y mediante el DOM los muestro en la web.
 * 
 * 
 */

function searchPics() {

    let query = document.getElementById("searchQuery").value;
    document.getElementById("random-pics-grid").innerHTML = "";
    
    fetch(`https://api.unsplash.com/search/photos?client_id=69ScLUi1fTgxSB5LdFbXTCbOZAnIjDlIBfF8bvBSa7c&query=${query}&orientation=portrait`)
        .then( function recivePics(pics1) {
            return pics1.json();
        } ).then( function showPics(pics2) {
            for (let i = 0; i < pics2.results.length; i++) {

                document.getElementById("random-pics-grid").innerHTML +=
                `
                <figure class="random-pics-box-left">
                    <img class="random-pics-img"
                        src="${pics2.results[i].urls.regular}"
                        alt="imagen">
                </figure>
                `
            }
        } ) 

}