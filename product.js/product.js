let principalimagen = document.getElementById("principal-imagen-product");

function changeImage (imagen) {
   principalimagen.src = imagen.src;
}


let likeimagen = document.getElementById("like");


function changeImagenLike (imagen) {
    
    if (likeimagen.src = imagen.src) {
        likeimagen.src = "/images/like-icon-0pink.png"
    }

    else {
        likeimagen.src = document.getElementById("like").innerHTML;
    }
}