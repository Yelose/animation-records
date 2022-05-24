let principalimagen = document.getElementById("principal-imagen-product");

function changeImage (imagen) {
   principalimagen.src = imagen.src;
}


var like = 0;

function changeImagenLike (imagen) {

    let likeimagen = document.getElementById("like");
    
    if (like==1) {
        likeimagen.src = "/images/like-icon-0pink.png";
        like=0;
    }

    else {
        likeimagen.src = "/images/like-icon-0.png";
        like=1;
    }
}