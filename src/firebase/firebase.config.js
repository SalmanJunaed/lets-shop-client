// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    // apiKey: "AIzaSyCdsWh7XwSr2udlH1lAXf4hVUUHXdWK49w",
    // authDomain: "lets-shop-ecommerce.firebaseapp.com",
    // projectId: "lets-shop-ecommerce",
    // storageBucket: "lets-shop-ecommerce.appspot.com",
    // messagingSenderId: "259526951232",
    // appId: "1:259526951232:web:f046f1707ecce1e5c53aa5"

    apiKey: import.meta.env.VITE_apiKey,
    authDomain: import.meta.env.VITE_authDomain,
    projectId: import.meta.env.VITE_projectId,
    storageBucket: import.meta.env.VITE_storageBucket,
    messagingSenderId: import.meta.env.VITE_messagingSenderId,
    appId: import.meta.env.VITE_appId,
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);