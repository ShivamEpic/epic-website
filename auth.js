// AUTH HELPERS

function getUser() {
  return JSON.parse(localStorage.getItem("user"));
}

function isLoggedIn() {
  return !!localStorage.getItem("user");
}

function logout() {
  localStorage.removeItem("user");
  window.location.href = "login.html";
}
