const products = [
  {
    name: "Clay Burst Booster Pack (Sealed) | Korean [sv2D]",
    price: 200,
    image: "images/sv2d-clay-burst-pack.png",
    stock: true
  },
  {
    name: "InfernoX Booster Box (Sealed) | Korean",
    price: 4599,
    image: "images/inferno-booster-box.png",
    stock: true
  }
  {
  name: "tsareena ex sr 080/066 (sv4k ancient roar)",
  price: 400,
  image: "images/tsareena-ex-sv4k-080.png"",
  stock: true
}
{
  name: "Battle Partners Booster Pack Korean (Sealed)",
  price: 250,
  image: "images/battle-partners-sv9-korean.png",
  stock: true
}
];

const container = document.getElementById("productList");

products.forEach(p => {
  const card = document.createElement("div");
  card.className = "card";

  card.innerHTML = `
    <img src="${p.image}" alt="${p.name}">
    <h2>${p.name}</h2>
    <p class="price">₹${p.price}</p>
    ${
      p.stock
        ? `<a href="checkout.html?product=${encodeURIComponent(p.name)}&price=${p.price}">
             <button>Buy Now</button>
           </a>`
        : `<button disabled>Out of Stock</button>`
    }
  `;

  container.appendChild(card);
});
