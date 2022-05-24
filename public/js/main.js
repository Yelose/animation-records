var products = [
    {
        productName: "Peluche Red Panda",
        category: "peluches",
        price: 11,
        image: "/images/Peluche-red.jpg"
    },
    {
        productName: "Peluche Ratatouille",
        category: "peluches",
        price: 12,
        image: "/images/ratatouille.jpg"
    },
    {
        productName: "Peluche Dory",
        category: "peluches",
        price: 11,
        image: "/images/dory.png"
    },
    {
        productName: "Peluche Dama",
        category: "peluches",
        price: 18,
        image: "/images/dama.jpg"
    },
    {
        productName: "Peluche Hércules",
        category: "peluches",
        price: 18,
        image: "/images/hercules.jpg"
    },
    {
        productName: "Peluche Galleta",
        category: "peluches",
        price: 30,
        image: "/images/galleta.jpg"
    },
    {
        productName: "Peluche Ariel",
        category: "peluches",
        price: 18,
        image: "/images/ariel.jpg"
    },
    {
        productName: "Peluche Mudito",
        category: "peluches",
        price: 18,
        image: "/images/mudito.jpg"
    },
    {
        productName: "Peluche Goofy",
        category: "peluches",
        price: 30,
        image: "/images/goofy.jpg"
    },
    {
        productName: "Peluche Minnie",
        category: "peluches",
        price: 11,
        image: "/images/mini.jpg"
    },
    {
        productName: "Peluche Vaiana",
        category: "peluches",
        price: 18,
        image: "/images/vaiana.jpg"
    },
    {
        productName: "Peluche Mickie",
        category: "peluches",
        price: 30,
        image: "/images/micky.jpg"
    },
    {
        productName: "Peluche Dumbo",
        category: "peluches",
        price: 23,
        image: "/images/dumbo.jpg"
    },
    {
        productName: "Peluche Bella",
        category: "peluches",
        price: 23,
        image: "/images/bella.jpg"
    },
    {
        productName: "Peluche Donald",
        category: "peluches",
        price: 31,
        image: "/images/donald.jpg"
    },
];
console.table(products);

let htmlProducts = "";
let cartImage = "/images/basket.png";
let hortalizas = ["patatas", "zanahorias", "calabacines"];

for (let i = 0; i < products.length; i++) {
  const product = products[i];
  htmlProducts += `
        <div class="product-container" style="background-image: url(${
          product.image
        })">
            <div class="product-name">${product.productName.toLowerCase()}</div>
            <div class="product-price">${product.price}€</div>
            <div class="buttons-add-to-cart">
                <p class"plus-add-to-cart">+</p>
                <a>
                <img class="image-cart-in-product-gallery" src="${cartImage}"></a>
                <p class"minus-remove-from-cart">-</p>
            </div>
        </div>
    `;
}
document.querySelector(".gallery-products-show").innerHTML = htmlProducts;
