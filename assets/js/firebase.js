import {
    getFirestore,
    collection,
    onSnapshot,
    query,
  } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-firestore.js";
  
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
  import { getAuth } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";
  
  const firebaseConfig = {
    apiKey: "AIzaSyCkNGpTMBMTbqdCF3_wWdDDMswyk_7QRs0",
    authDomain: "spck-phucha.firebaseapp.com",
    projectId: "spck-phucha",
    storageBucket: "spck-phucha.appspot.com",
    messagingSenderId: "498782284138",
    appId: "1:498782284138:web:c8470d5430e3bc84c05d13",
    measurementId: "G-5LWZEZYEHS"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  export const db = getFirestore(app);
  export const auth = getAuth(app);
  // console.log(firebase.app().name);10:22/-strong/-heart:>:o:-((:-h
