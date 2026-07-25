 import { initializeApp } from "firebase/app";
  import { getAnalytics } from "firebase/analytics";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyAITvoQMbkBuoJ2USX8jqOIczsepz_RmOo",
    authDomain: "truth-audit.firebaseapp.com",
    databaseURL: "https://truth-audit-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "truth-audit",
    storageBucket: "truth-audit.firebasestorage.app",
    messagingSenderId: "80008930086",
    appId: "1:80008930086:web:c85415dbb88fb658e097e7",
    measurementId: "G-VSZ08EGQER"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);