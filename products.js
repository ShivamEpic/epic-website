const products = [
  {
    name: "Clay Burst Booster Pack (Sealed) | Korean [sv2D]",
    price: 170,
    image: "https://i.ebayimg.com/images/g/1bUAAOSwTlVg3Juu/s-l1600.jpg",
    stock: true
  },
  {
    name: "InfernoX Booster Box (Sealed) | Korean",
    price: 4599,
    image: "https://i.ebayimg.com/images/g/AdoAAOSw2I1g3JqN/s-l1600.jpg",
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
