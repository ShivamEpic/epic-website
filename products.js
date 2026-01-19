const products = [
  {
    name: "Clay Burst Booster Pack (Sealed) | Korean",
    price: 200,
    image: "sv2d-clay-burst-pack.png"
  },
  {
    name: "InfernoX Booster Box (Sealed) | Korean",
    price: 4599,
    image: "inferno-booster-box.png"
  },
  {
    name: "Tsareena ex SR 080/066 | Ancient Roar",
    price: 400,
    image: "tsareena-ex-sv4k-080.png"
  },
  {
    name: "Battle Partners Booster Pack | Korean",
    price: 250,
    image: "battle-partners-sv9-korean.png"
  }
];

const container = document.getElementById("productList");

products.forEach((p, index) => {
  const card = document.createElement("div");
  card.className = "card";

  card.innerHTML = `
    <img src="${p.image}">
    <h3>${p.name}</h3>
    <p class="price">₹${p.price}</p>
    <button onclick="addToCart(${index})">Add to Cart</button>
  `;

  container.appendChild(card);
});

function addToCart(index) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push({ ...products[index], qty: 1 });
  localStorage.setItem("cart", JSON.stringify(cart));
  alert("Added to cart ✅");
  document.getElementById("cartCount").innerText = cart.length;
}
