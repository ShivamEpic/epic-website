import { initializeApp } from 
"https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";

import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  signOut
} from 
"https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

/* YOUR FIREBASE CONFIG */
const firebaseConfig = {
  apiKey: "AIzaSyB2YCsZOAxa2ISomg16ArDxFVxAz4WXUME",
  authDomain: "epic-pokemon-store.firebaseapp.com",
  projectId: "epic-pokemon-store",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const provider = new GoogleAuthProvider();

document.getElementById("googleBtn").onclick = async () => {
  await signInWithPopup(auth, provider);
};

onAuthStateChanged(auth, (user) => {
  if (user) {
    document.getElementById("userInfo").innerHTML =
      "Logged in as: " + user.email +
      "<br><br><button onclick='logout()'>Logout</button>";
  }
});

window.logout = async function () {
  await signOut(auth);
  location.reload();
};
