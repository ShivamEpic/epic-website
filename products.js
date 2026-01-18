const products = [
  {
    name: "Clay Burst Booster Pack (Sealed) | Korean [sv2D]",
    price: 170,
    image: "https://static.wixstatic.com/media/25c29c_91b0000b075348c4a340e1898297e7ed~mv2.png/v1/fill/w_560,h_560,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/25c29c_91b0000b075348c4a340e1898297e7ed~mv2.png",
    stock: true
  },
  {
    name: "Booster Box – InfernoX Booster Box (Sealed) | Korean [m2]
",
    price: 4599,
    image: "https://static.wixstatic.com/media/25c29c_10deb9c0868c4eb59734d91801be103e~mv2.png/v1/fill/w_420,h_420,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/25c29c_10deb9c0868c4eb59734d91801be103e~mv2.png",
    stock: true
  },
  {

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
