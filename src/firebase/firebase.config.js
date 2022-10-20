// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC7JytOLLzFPvYMs08lpY7EcgvbsQvpD8M",
  authDomain: "dragon-news-serverr.firebaseapp.com",
  projectId: "dragon-news-serverr",
  storageBucket: "dragon-news-serverr.appspot.com",
  messagingSenderId: "435386723273",
  appId: "1:435386723273:web:2589777d47573ea25a1618"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;