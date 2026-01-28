const products = [
  {
    id: 1,
    name: "Clay Burst Booster Pack (Sealed) | Korean",
    price: 200,
    image: "sv2d-clay-burst-pack.png",
    description: "Sealed Korean Clay Burst booster pack."
  },
  {
    id: 2,
    name: "InfernoX Booster Box (Sealed) | Korean",
    price: 4599,
    image: "inferno-booster-box.png",
    description: "High-demand sealed InfernoX booster box."
  },
  {
    id: 3,
    name: "Tsareena ex SR 080/066 | Ancient Roar",
    price: 400,
    image: "tsareena-ex-sv4k-080.png",
    description: "Rare Tsareena ex SR card from Ancient Roar."
  },
  {
    id: 4,
    name: "Battle Partners Booster Pack | Korean",
    price: 250,
    image: "battle-partners-sv9-korean.png",
    description: "Battle Partners Korean booster pack."
  },
  {
    id: 5,
    name: "Crimson Haze Booster Pack (Sealed) | Korean [sv5a]",
    price: 250,
    image: "Crimson_Haze_Korean_Booster.png",
    description: "Sealed Crimson Haze booster pack."
  }
];

const container = document.getElementById("productList");

products.forEach(p => {
  const card = document.createElement("div");
  card.className = "card";

  card.innerHTML = `
    <img src="${p.image}" onclick="openProduct(${p.id})">
    <h3 onclick="openProduct(${p.id})">${p.name}</h3>
    <p class="price">₹${p.price}</p>

    <div class="btns">
      <button class="cart" onclick="addToCart(${p.id})">Add to Cart</button>
      <button class="buy" onclick="buyNow(${p.id})">Buy Now</button>
    </div>
  `;

  container.appendChild(card);
});

function openProduct(id) {
  localStorage.setItem("selectedProduct", id);
  window.location.href = "product.html";
}

function addToCart(id) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  const product = products.find(p => p.id === id);
  const existing = cart.find(i => i.id === id);

  if (existing) existing.qty += 1;
  else cart.push({ ...product, qty: 1 });

  localStorage.setItem("cart", JSON.stringify(cart));
  <div id="toast">Added to cart</div>
}

function buyNow(id) {
  const product = products.find(p => p.id === id);
  localStorage.setItem("cart", JSON.stringify([{ ...product, qty: 1 }]));
  window.location.href = "checkout.html";
}
