// FIREBASE IMPORT
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

// CONFIG
const firebaseConfig = {
  apiKey: "AIzaSyCiP50WPzxYhTO0guptT64PpWLWSnq0aVs",
  authDomain: "felix-dev-aa428.firebaseapp.com",
  projectId: "felix-dev-aa428",
  storageBucket: "felix-dev-aa428.firebasestorage.app",
  messagingSenderId: "206240559196",
  appId: "1:206240559196:web:a2726c34e79f5f8beb7699"
};

// INIT
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// ADD PROJECT
window.addProject = async function () {
  let title = document.getElementById("title").value;
  let desc = document.getElementById("desc").value;

  if (!title || !desc) {
    alert("Fill all fields");
    return;
  }

  await addDoc(collection(db, "projects"), { title, desc });

  alert("Saved!");
  loadProjects();
};

// LOAD PROJECTS
async function loadProjects() {
  let container = document.getElementById("projects");
  container.innerHTML = "";

  let snapshot = await getDocs(collection(db, "projects"));

  snapshot.forEach(doc => {
    let data = doc.data();

    container.innerHTML += `
      <div class="card">
        <h3>${data.title}</h3>
        <p>${data.desc}</p>
      </div>
    `;
  });
}

loadProjects();

// CONTACT
window.openWhatsApp = function () {
  window.open("https://wa.me/2347049138962", "_blank");
};

window.makeCall = function () {
  window.location.href = "tel:07049138962";
};

window.sendEmail = function () {
  window.location.href = "mailto:felixemmanuel8279@gmail.com";
};
