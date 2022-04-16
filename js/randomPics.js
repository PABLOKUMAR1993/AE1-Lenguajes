fetch("https://api.unsplash.com/photos/random?client_id=69ScLUi1fTgxSB5LdFbXTCbOZAnIjDlIBfF8bvBSa7c&count=3&lang=es&orientation=portrait")
    .then(function recivePics(pics1) {
        return pics1.json();
    }).then(function showPics(pics2) {
        console.log(pics2);
        for (let i = 0; i < pics2.length; i++) {
        document.getElementById('random-pics-grid').innerHTML+=
        `
        <figure class="random-pics-box-left">
            <img class="random-pics-img"
                src="${pics2[i].urls.regular}"
                alt="imagen">
        </figure>
        `
        }
    })