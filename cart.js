const cartItemsDiv = document.getElementById("cartItems");
const totalPriceDiv = document.getElementById("totalPrice");

let cart = JSON.parse(localStorage.getItem("cart")) || [];

function renderCart() {
  cartItemsDiv.innerHTML = "";

  if (cart.length === 0) {
    cartItemsDiv.innerHTML = "<p>Your cart is empty</p>";
    totalPriceDiv.innerText = "";
    return;
  }

  let total = 0;

  cart.forEach((item, index) => {
    total += item.price * item.qty;

    const div = document.createElement("div");
    div.className = "cart-item";

    div.innerHTML = `
      <img src="${item.image}" alt="${item.name}">
      <div class="cart-info">
        <h4>${item.name}</h4>
        <p>₹${item.price}</p>

        <div class="qty-controls">
          <button onclick="decreaseQty(${index})">−</button>
          <span>${item.qty}</span>
          <button onclick="increaseQty(${index})">+</button>
        </div>
      </div>
    `;

    cartItemsDiv.appendChild(div);
  });

  totalPriceDiv.innerText = "Total: ₹" + total;
}

function increaseQty(index) {
  cart[index].qty += 1;
  updateCart();
}

function decreaseQty(index) {
  cart[index].qty -= 1;

  if (cart[index].qty <= 0) {
    cart.splice(index, 1);
  }

  updateCart();
}

function updateCart() {
  localStorage.setItem("cart", JSON.stringify(cart));
  renderCart();
}

renderCart();
