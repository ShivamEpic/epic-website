const products = [
  {
    name: "Scarlet & Violet Booster Pack",
    price: 399,
    image: "images/sv-booster-pack.jpg",
    stock: true
  },
  {
    name: "Booster Box – Scarlet & Violet",
    price: 4999,
    image: "https://m.media-amazon.com/images/I/81WDYOQ-MZL._SX679_.jpg",
    stock: false
  },
  {
    name: "Rare Pokémon Card",
    price: 499,
    image: "https://assets.pokemon.com/assets/cms2/img/cards/web/SV01/SV01_EN_1.png",
    stock: true
  }
];

const container = document.getElementById("productList");

products.forEach(p => {
  const card = document.createElement("div");
  card.className = "card";

  card.innerHTML = `
    <img src="${p.image}">
    <h2>${p.name}</h2>
    <p class="price">₹${p.price}</p>
    ${
      p.stock
        ? `<a href="checkout.html?product=${encodeURIComponent(
            p.name
          )}&price=${p.price}">
             <button>Buy Now</button>
           </a>`
        : `<button disabled>Out of Stock</button>`
    }
  `;
  container.appendChild(card);
});
