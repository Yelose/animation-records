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
    },
    {
        productName: "Peluche Hércules",
        category: "peluches",
        price: 14,
        image: "/images/hercules.jpg"
    },
    {
        productName: "Donald",
        category: "peluches",
        price: 18,
        image: "/images/donald.jpg"
    },
    {
        productName: "goofy",
        category: "peluches",
        price: 13,
        image: "/images/goofy.jpg"
    },
    {
        productName: "Mini",
        category: "peluches",
        price: 18,
        image: "/images/mini.jpg"
    },
    {
        productName: "vaiana",
        category: "peluches",
        price: 16,
        image: "/images/vaiana.jpg"
    },
];
console.table(products);

let htmlProducts = "";
let cartImage ="/images/basket.png";
let hortalizas = ["patatas", "zanahorias", "calabacines"];


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
