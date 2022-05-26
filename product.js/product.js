<<<<<<< HEAD
let principalimagen = document.getElementById("principal-imagen-product");

function changeImage (imagen) {
   principalimagen.src = imagen.src;
}


let likeimagen = document.getElementById("like");


function changeImagenLike (imagen) {
    
    if (likeimagen.src = imagen.src) {
        likeimagen.src = "/images/like-icon-0pink.png"
    }
    function changeImagenLike (imagen) {
    
        if (likeimagen.src = imagen.src) {
            likeimagen.src = "/images/like-icon-0.png"
        }
        
    }

}

=======
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
>>>>>>> develop
