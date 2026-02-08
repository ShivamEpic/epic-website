// products.js (Firebase + Cart + Animation FIXED)

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import {
  getFirestore,
  collection,
  getDocs
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

/* ================= FIREBASE CONFIG ================= */
const firebaseConfig = {
  apiKey: "AIzaSyB2YCsZ0Ax2ISomg16rDFxXAz4XWUME",
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
    p.id = doc.id;
    card.addEventListener("click", () => {
  window.location.href = `product.html?id=${p.id}`;
});
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <img src="${p.image}" alt="${p.name}">
      <h3>${p.name}</h3>
      <p class="price">₹${p.price}</p>
      <div class="btns">
        <button class="cart">Add to Cart</button>
        <button class="buy">Buy Now</button>
      </div>
    `;

    card.querySelector(".cart").onclick = (e) => {
  e.stopPropagation();
  addToCart(p);
};

card.querySelector(".buy").onclick = (e) => {
  e.stopPropagation();
  buyNow(p);
};

    container.appendChild(card);
  });

  updateCartBadge();
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

  animateStar();
  updateCartBadge();
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

/* ================= CART BADGE ================= */
function updateCartBadge() {
  const badge = document.getElementById("cart-badge");
  if (!badge) return;

  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const count = cart.reduce((sum, item) => sum + item.qty, 0);

  badge.innerText = count;
  badge.classList.add("bump");
  setTimeout(() => badge.classList.remove("bump"), 300);
}

/* ================= STAR ANIMATION ================= */
function animateStar() {
  const star = document.createElement("div");
  star.className = "star";
  star.innerText = "⭐";

  star.style.left = (window.innerWidth - 40) + "px";
  star.style.top = (window.innerHeight - 90) + "px";

  document.body.appendChild(star);

  setTimeout(() => star.remove(), 1000);
}
