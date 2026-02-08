const cartItems = document.getElementById("cartItems");
const totalEl = document.getElementById("total");

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
    total += Number(item.price) * Number(item.qty);

    const div = document.createElement("div");
    div.className = "item";

    div.innerHTML = `
      <img src="images/${item.image}">
      <div>
        <b>${item.name}</b><br>
        ₹${item.price} × ${item.qty}
        <br>
        <button onclick="changeQty(${index}, -1)">−</button>
        <button onclick="changeQty(${index}, 1)">+</button>
        <button onclick="removeItem(${index})">Remove</button>
      </div>
    `;

    cartItems.appendChild(div);
  });

  totalEl.innerText = total;
  localStorage.setItem("cart", JSON.stringify(cart));
}

window.changeQty = function (index, change) {
  cart[index].qty += change;
  if (cart[index].qty <= 0) cart.splice(index, 1);
  renderCart();
};

window.removeItem = function (index) {
  cart.splice(index, 1);
  renderCart();
};

renderCart();
