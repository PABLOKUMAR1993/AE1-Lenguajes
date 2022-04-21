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