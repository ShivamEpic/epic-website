const cartItems = document.getElementById("cartItems");
const totalEl = document.getElementById("total");

// Load cart from localStorage
let cart = JSON.parse(localStorage.getItem("cart")) || [];

function renderCart() {
  cartItems.innerHTML = "";
  let total = 0;

  if (cart.length === 0) {
    cartItems.innerHTML = "<p>Your cart is empty</p>";
    totalEl.innerText = "0";
    return;
  }

  cart.forEach((item, index) => {
    const price = Number(item.price) || 0;
    const qty = Number(item.qty) || 1;
    total += price * qty;

    const div = document.createElement("div");
    div.className = "cart-item";

    div.innerHTML = `
      <img src="${item.image}" alt="${item.name}">
      <div class="cart-info">
        <h4>${item.name}</h4>
        <p>₹${price} × ${qty}</p>

        <div class="cart-actions">
          <button onclick="changeQty(${index}, -1)">−</button>
          <span>${qty}</span>
          <button onclick="changeQty(${index}, 1)">+</button>
          <button onclick="removeItem(${index})">Remove</button>
        </div>
      </div>
    `;

    cartItems.appendChild(div);
  });

  totalEl.innerText = total;
  localStorage.setItem("cart", JSON.stringify(cart));
}

// Change quantity
window.changeQty = function (index, change) {
  cart[index].qty = (Number(cart[index].qty) || 1) + change;

  if (cart[index].qty <= 0) {
    cart.splice(index, 1);
  }

  renderCart();
};

// Remove item
window.removeItem = function (index) {
  cart.splice(index, 1);
  renderCart();
};

// Initial render
renderCart();
