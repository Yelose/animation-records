var products = [
    {
        productName: "Peluche Red Panda",
        category: "peluches",
        price: 11,
        image: "/images/Peluche-red.jpg",
        url: "product.html"
    },
    {
        productName: "Peluche Ratatouille",
        category: "peluches",
        price: 12,
        image: "/images/ratatouille.jpg",
        url: "underconstruction.html"
    },
    {
        productName: "Peluche Dory",
        category: "peluches",
        price: 11,
        image: "/images/dory.png",
        url: "underconstruction.html"
    },
    {
        productName: "Peluche Dama",
        category: "peluches",
        price: 18,
        image: "/images/dama.jpg",
        url: "underconstruction.html"
    },
    {
        productName: "Peluche Hércules",
        category: "peluches",
        price: 18,
        image: "/images/hercules.jpg",
        url: "underconstruction.html"
    },
    {
        productName: "Peluche Galleta",
        category: "peluches",
        price: 30,
        image: "/images/galleta.jpg",
        url: "underconstruction.html"
    },
    {
        productName: "Peluche Ariel",
        category: "peluches",
        price: 18,
        image: "/images/ariel.jpg",
        url: "underconstruction.html",
    },
    {
        productName: "Peluche Mudito",
        category: "peluches",
        price: 18,
        image: "/images/mudito.jpg",
        url: "underconstruction.html"
    },
    {
        productName: "Peluche Goofy",
        category: "peluches",
        price: 30,
        image: "/images/goofy.jpg",
        url: "underconstruction.html"
    },
    {
        productName: "Peluche Minnie",
        category: "peluches",
        price: 11,
        image: "/images/mini.jpg",
        url: "underconstruction.html"
    },
    {
        productName: "Peluche Vaiana",
        category: "peluches",
        price: 18,
        image: "/images/vaiana.jpg",
        url: "underconstruction.html"
    },
    {
        productName: "Peluche Mickie",
        category: "peluches",
        price: 30,
        image: "/images/micky.jpg",
        url: "underconstruction.html"
    },
    {
        productName: "Peluche Dumbo",
        category: "peluches",
        price: 23,
        image: "/images/dumbo.jpg",
        url: "underconstruction.html"
    },
    {
        productName: "Peluche Bella",
        category: "peluches",
        price: 23,
        image: "/images/bella.jpg",
        url: "underconstruction.html"
    },
    {
        productName: "Peluche Donald",
        category: "peluches",
        price: 31,
        image: "/images/donald.jpg",
        url: "underconstruction.html"
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
let cartImage = "/images/basket.png";
let hortalizas = ["patatas", "zanahorias", "calabacines"];

for (let i = 0; i < products.length; i++) {
  const product = products[i];
  htmlProducts += `
        <div class="product-container" style="background-image: url(${
          product.image
        })">
            <a class="link-to-detail-container" href="${product.url}">
                <div class="product-name">${product.productName.toLowerCase()}</div>
                <div class="product-price">${product.price}€</div>
            </a>
            <div class="buttons-add-to-cart">
                <p class"plus-add-to-cart">+</p>
                
                <img class="image-cart-in-product-gallery" src="${cartImage}">
                <p class"minus-remove-from-cart">-</p>
            </div>
        </div>
    `;
}
document.querySelector(".gallery-products-show").innerHTML = htmlProducts;
