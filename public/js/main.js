var products = [
    {
        productName: "Peluche Ariel",
        category: "peluches",
        price: 18,
        image: "/images/ariel.jpg"
    },
    {
        productName: "Peluche Dama",
        category: "peluches",
        price: 18,
        image: "/images/dama.jpg"
    },
    {
        productName: "Peluche Panda Rojo",
        category: "peluches",
        price: 11,
        image: "/images/Peluche-Red.jpg"
    }
];
console.table(products);
let htmlProducts = "";
let cartImage ="/images/basket.png"
for (let i = 0; i < products.length; i++) {
    const product = products[i];
    htmlProducts += `
        <div class="product-container" style="background-image: url(${product.image})">
            <div class="product-name">${product.productName.toLowerCase()}</div>
            <div class="product-price">${product.price}€</div>
            <div class="buttons-add-to-cart">
                <p class"plus-add-to-cart">+</p>
                <img class="image-cart-in-product-gallery" src="${cartImage}">
                <p class"minus-remove-from-cart">-</p>
            </div>
        </div>
    `
}
document.querySelector(".gallery-products-show").innerHTML = htmlProducts;