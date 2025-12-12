const firebaseConfig = {
  apiKey: "AIzaSyAHm_YmTUTBpvcJ5FmFU4Te3frUCOTcMHk",
  authDomain: "mess-6faa7.firebaseapp.com",
  databaseURL: "https://mess-6faa7-default-rtdb.firebaseio.com",
  projectId: "mess-6faa7",
  storageBucket: "mess-6faa7.appspot.com",
  messagingSenderId: "189384550340",
  appId: "1:189384550340:web:13a4ae7b6c4cc978a2a691"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.database();

function login() {
  const user = document.getElementById("username").value;
  const pass = document.getElementById("password").value;

  const email = user + "@chat.com";

  auth.signInWithEmailAndPassword(email, pass)
    .catch(() => {
      return auth.createUserWithEmailAndPassword(email, pass);
    });
}

auth.onAuthStateChanged(user => {
  if (user) {
    document.getElementById("login").style.display = "none";
    document.getElementById("chat").style.display = "block";
    loadMessages();
  }
});

function sendMessage() {
  const msg = document.getElementById("msg").value;
  const user = auth.currentUser.email.split("@")[0];

  db.ref("messages").push({
    user,
    msg,
    time: Date.now()
  });

  document.getElementById("msg").value = "";
}

function loadMessages() {
  db.ref("messages").limitToLast(100).on("child_added", snap => {
    const data = snap.val();
    const div = document.createElement("div");
    div.className = "msg";
    div.innerHTML = `<b>${data.user}:</b> ${data.msg}`;
    document.getElementById("messages").appendChild(div);
  });
}
