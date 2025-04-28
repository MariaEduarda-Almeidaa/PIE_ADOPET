// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD6x-so3CpztL8yWmumQsBmh126ubcdmIY",
  authDomain: "adopet-d40c4.firebaseapp.com",
  projectId: "adopet-d40c4",
  storageBucket: "adopet-d40c4.firebasestorage.app",
  messagingSenderId: "1008850469859",
  appId: "1:1008850469859:web:9415d6445ffc369ef256d6"
};

// Inicializa o app
const app = initializeApp(firebaseConfig);

// Exporta a autenticação e o provedor do Google
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();