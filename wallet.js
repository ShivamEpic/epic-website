<script>
/* WALLET STORAGE */
function getWallet() {
  return Number(localStorage.getItem("walletBalance")) || 0;
}

function setWallet(amount) {
  localStorage.setItem("walletBalance", amount);
}

/* ADMIN ADD BALANCE (manual approval) */
function adminAddBalance() {
  const amount = Number(document.getElementById("addAmount").value);
  if (amount <= 0) {
    alert("Enter valid amount");
    return;
  }
  const newBalance = getWallet() + amount;
  setWallet(newBalance);
  updateWalletUI();
  alert("Wallet balance added successfully");
}

/* UPDATE UI */
function updateWalletUI() {
  document.getElementById("walletBalance").innerText = "₹" + getWallet();
}

window.onload = updateWalletUI;
</script>
