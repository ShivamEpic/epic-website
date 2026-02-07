// ===============================
// FIREBASE IMPORTS
// ===============================
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

// ===============================
// FIREBASE CONFIG (YOUR PROJECT)
// ===============================
const firebaseConfig = {
  apiKey: "AIzaSyB2YCsZOAxa2ISomg1eY1Zz0jXXXXXXX",
  authDomain: "epic-pokemon-store.firebaseapp.com",
  projectId: "epic-pokemon-store",
  storageBucket: "epic-pokemon-store.appspot.com",
  messagingSenderId: "667844835352",
  appId: "1:667844835352:web:002a3cXXXXXXX"
};

// ===============================
// INIT FIREBASE
// ===============================
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// ===============================
// ADD PRODUCT
// ===============================
window.addProduct = async function () {
  const name = document.getElementById("name").value.trim();
  const price = Number(document.getElementById("price").value);
  const image = document.getElementById("image").value.trim();
  const description = document.getElementById("desc").value.trim();

  if (!name || !price || !image) {
    alert("Fill all required fields");
    return;
  }

  try {
    await addDoc(collection(db, "products"), {
      name,
      price,
      image,
      description,
      createdAt: Date.now()
    });

    alert("Product added successfully");
    location.reload();
  } catch (e) {
    alert("Error adding product");
    console.error(e);
  }
};

// ===============================
// LOAD PRODUCTS
// ===============================
const list = document.getElementById("list");

async function loadProducts() {
  list.innerHTML = "";

  const snapshot = await getDocs(collection(db, "products"));

  snapshot.forEach(docSnap => {
    const p = docSnap.data();
    const id = docSnap.id;

    list.innerHTML += `
      <div class="card">
        <img src="${p.image}" />
        <h3>${p.name}</h3>
        <p>₹${p.price}</p>
        <button onclick="deleteProduct('${id}')">Delete</button>
      </div>
    `;
  });
}

loadProducts();

// ===============================
// DELETE PRODUCT
// ===============================
window.deleteProduct = async function (id) {
  if (!confirm("Delete this product?")) return;

  await deleteDoc(doc(db, "products", id));
  location.reload();
};
