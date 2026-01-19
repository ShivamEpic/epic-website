const products = [
  {
    name: "Clay Burst Booster Pack (Sealed) | Korean [sv2D]",
    price: 200,
    image: "sv2d-clay-burst-pack.png",
    stock: true
  },
  {
    name: "InfernoX Booster Box (Sealed) | Korean",
    price: 4599,
    image: "inferno-booster-box.png",
    stock: true
  },
  {
    name: "Tsareena ex SR 080/066 | Ancient Roar [SV4K]",
    price: 400,
    image: "tsareena-ex-sv4k-080.png",
    stock: true
  },
  {
    name: "Battle Partners Booster Pack Korean (Sealed)",
    price: 250,
    image: "battle-partners-sv9-korean.png",
    stock: true
  }
];

const container = document.getElementById("productList");

products.forEach((p, index) => {
  const card = document.createElement("div");
  card.className = "card";

  card.innerHTML = `
    <img src="${p.image}" alt="${p.name}">
    <h2>${p.name}</h2>
    <p class="price">₹${p.price}</p>
    ${
  p.stock
    ? `
      <button onclick="addToCart(${index})">Add to Cart</button>
      <a href="checkout.html?product=${encodeURIComponent(p.name)}&price=${p.price}">
        <button>Buy Now</button>
      </a>
    `
    : `<button disabled>Out of Stock</button>`
    }

  container.appendChild(card);
});
// 🛒 ADD TO CART FUNCTION
function addToCart(index) { 
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
cart.push(products[index]);
localStorage.setItem("cart", JSON.stringify(cart));
alert(products[index].name + " added to cart 🛒");
}
