var products = [
<<<<<<< HEAD
  {
    productName: "Peluche Ariel",
    category: "peluches",
    price: 1,
    image: "/images/ariel.jpg",
    url: "",
  },
  {
    productName: "Peluche Dama",
    category: "peluches",
    price: 18,
    image: "/images/dama.jpg",
  },
  {
    productName: "Peluche Panda Rojo",
    category: "peluches",
    price: 11,
    image: "/images/Peluche-Red.jpg",
    url: "product.html",
  },
  {
    productName: "Peluche Hércules",
    category: "peluches",
    price: 18,
    image: "/images/hercules.jpg",
  },
=======
    {
        productName: "Peluche Ariel",
        category: "peluches",
        price: 1,
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
        price: 18,
        image: "/images/hercules.jpg"
    },
    {
        productName: "Peluche Bella",
        category: "peluches",
        price: 12,
        image: "/images/bella.jpg"
    },
    {
        productName: "Peluche Goofy",
        category: "peluches",
        price: 18,
        image: "/images/goofy.jpg"
    },
    {
        productName: "Peluche Micky",
        category: "peluches",
        price: 14,
        image: "/images/micky.jpg"
    },
    {
        productName: "Peluche Donald",
        category: "peluches",
        price: 17,
        image: "/images/donald.jpg"
    },

>>>>>>> 674aed4a45dae1ca6abf4b472808e6b4cf3a2974
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
                <img class="image-cart-in-product-gallery" src="${cartImage}">
                <p class"minus-remove-from-cart">-</p>
            </div>
        </div>
    `;
}
document.querySelector(".gallery-products-show").innerHTML = htmlProducts;
