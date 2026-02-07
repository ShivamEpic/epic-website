// products.js (Firestore + Cart fixed)

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import {
  getFirestore,
  collection,
  getDocs
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

/* ================= FIREBASE CONFIG ================= */
const firebaseConfig = {
  apiKey: "AIzaSyB2YCsZ0Ax2ISomg16rDxFXxAz4xUME",
  authDomain: "epic-pokemon-store.firebaseapp.com",
  projectId: "epic-pokemon-store",
  storageBucket: "epic-pokemon-store.appspot.com",
  messagingSenderId: "667844835352",
  appId: "1:667844835352:web:002a3d9018b449cf4ab6d",
  measurementId: "G-ZDV918PN02"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

/* ================= LOAD PRODUCTS ================= */
const container = document.getElementById("productList");

async function loadProducts() {
  if (!container) return;

  container.innerHTML = "";

  const snap = await getDocs(collection(db, "products"));

  snap.forEach(doc => {
    const p = doc.data();

    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <img src="images/${p.image}" alt="${p.name}">
      <h3>${p.name}</h3>
      <p class="price">₹${p.price}</p>
      <div class="btns">
        <button class="cart">Add to Cart</button>
        <button class="buy">Buy Now</button>
      </div>
    `;

    card.querySelector(".cart").onclick = () => addToCart(p);
    card.querySelector(".buy").onclick = () => buyNow(p);

    container.appendChild(card);
  });
}

loadProducts();

/* ================= CART LOGIC ================= */

function addToCart(product) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  const existing = cart.find(item => item.name === product.name);

  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({
      name: product.name,
      price: Number(product.price),
      image: product.image,
      qty: 1
    });
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  alert("Added to cart");
}

function buyNow(product) {
  const cart = [{
    name: product.name,
    price: Number(product.price),
    image: product.image,
    qty: 1
  }];

  localStorage.setItem("cart", JSON.stringify(cart));
  window.location.href = "checkout.html";
}
