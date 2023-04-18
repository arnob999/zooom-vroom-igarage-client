// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAT3anEdVz4isNT8_qSkpoQk6rL4qxmKFo",
    authDomain: "zooom-vrooom.firebaseapp.com",
    projectId: "zooom-vrooom",
    storageBucket: "zooom-vrooom.appspot.com",
    messagingSenderId: "406682360704",
    appId: "1:406682360704:web:28cb9a6e768857da957f65"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;