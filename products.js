import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import {
  getFirestore,
  collection,
  getDocs
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

// FIREBASE CONFIG
const firebaseConfig = {
  apiKey: "AIzaSyB2YCszOAx2I5omg1GArDxFxxAz4xWUME",
  authDomain: "epic-pokemon-store.firebaseapp.com",
  projectId: "epic-pokemon-store",
  storageBucket: "epic-pokemon-store.appspot.com",
  messagingSenderId: "667844835352",
  appId: "1:667844835352:web:002a3d9018b449cfc4ab6d",
  measurementId: "G-ZDV918PN02"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const container = document.getElementById("productList");

async function loadProducts() {
  container.innerHTML = "";

  const snap = await getDocs(collection(db, "products"));

  snap.forEach(doc => {
    const p = doc.data();

    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <img src="images/${p.image}">
      <h3>${p.name}</h3>
      <p class="price">₹${p.price}</p>
      <div class="btns">
        <button class="cart" onclick="addToCart('${doc.id}')">Add to Cart</button>
        <button class="buy" onclick="buyNow('${doc.id}')">Buy Now</button>
      </div>
    `;

    container.appendChild(card);
  });
}

loadProducts();

// CART
window.addToCart = function (id) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push({ id, qty: 1 });
  localStorage.setItem("cart", JSON.stringify(cart));
  alert("Added to cart");
};

window.buyNow = function (id) {
  localStorage.setItem("cart", JSON.stringify([{ id, qty: 1 }]));
  window.location.href = "checkout.html";
};
