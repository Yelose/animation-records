let cartQuantity = 0;
let addItemToCart = function() {
    cartQuantity ++
    document.querySelector(".cart-items-quantity").innerHTML = cartQuantity;
}
let substractItemFromCart = function() {
    cartQuantity --
    document.querySelector(".cart-items-quantity").innerHTML = cartQuantity;
}

let pluses = document.querySelectorAll(".plus-add-to-cart");
console.log (pluses);

for (let i = 0; i < pluses.length; i++) {
    const plus = pluses[i]
    plus.addEventListener("click", addItemToCart)
}

let minus = document.querySelectorAll(".minus-substract-from-cart");
console.log (minus);

for (let i = 0; i < minus.length; i++) {
    const substract = minus[i];
    substract.addEventListener("click", substractItemFromCart)
    
}
