// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCaHauAw94APKvK5_vI_EmoPWl6NUHZJIQ",
  authDomain: "react-dragon-news-ddef2.firebaseapp.com",
  projectId: "react-dragon-news-ddef2",
  storageBucket: "react-dragon-news-ddef2.appspot.com",
  messagingSenderId: "263022240227",
  appId: "1:263022240227:web:ffa2b050c06a51fdf240d6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
