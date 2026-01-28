// ===============================
// PRODUCTS DATA
// ===============================
const products = [
  {
    id: 1,
    name: "Clay Burst Booster Pack (Sealed) | Korean",
    price: 200,
    image: "sv2d-clay-burst-pack.png",
    description: "Original sealed Clay Burst booster pack imported from Korea."
  },
  {
    id: 2,
    name: "Infernox Booster Box (Sealed) | Korean",
    price: 4599,
    image: "infernox-booster-box.png",
    description: "Premium sealed booster box for serious Pokémon collectors."
  },
  {
    id: 3,
    name: "Tsareena ex SR 080/066 | Ancient Roar",
    price: 400,
    image: "tsareena-ex-sv4k-080.png",
    description: "Rare Tsareena ex SR card from Ancient Roar set."
  },
  {
    id: 4,
    name: "Battle Partners Booster Pack | Korean",
    price: 250,
    image: "battle-partners-sv9-korean.png",
    description: "High-demand Korean Battle Partners booster pack."
  },
  {
    id: 5,
    name: "Crimson Haze Booster Pack (Sealed) | Korean [sv5a]",
    price: 250,
    image: "Crimson_Haze_Korean_Booster.png",
    description: "Sealed Crimson Haze booster pack from sv5a expansion."
  }
];

// ===============================
// RENDER PRODUCTS
// ===============================
const container = document.getElementById("productList");

products.forEach((p) => {
  const card = document.createElement("div");
  card.className = "card";

  card.innerHTML = `
    <img src="${p.image}" alt="${p.name}" onclick="openProduct(${p.id})">
    <h2 onclick="openProduct(${p.id})">${p.name}</h2>
    <p class="price">₹${p.price}</p>

    <div class="btns">
      <button onclick="addToCart(${p.id})">Add to Cart</button>
      <button class="buy" onclick="buyNow(${p.id})">Buy Now</button>
    </div>
  `;

  container.appendChild(card);
});

// ===============================
// OPEN PRODUCT PAGE
// ===============================
function openProduct(id) {
  localStorage.setItem("selectedProduct", id);
  window.location.href = "product.html";
}

// ===============================
// ADD TO CART
// ===============================
function addToCart(id) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  const product = products.find(p => p.id === id);

  const existing = cart.find(item => item.id === id);

  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ ...product, qty: 1 });
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  alert("Added to cart ✅");
}

// ===============================
// BUY NOW DIRECT
// ===============================
function buyNow(id) {
  const product = products.find(p => p.id === id);

  const cart = [{
    ...product,
    qty: 1
  }];

  localStorage.setItem("cart", JSON.stringify(cart));
  window.location.href = "checkout.html";
}
