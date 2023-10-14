// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import firebaseConfig from "../../keys/firebase_key.json"; // Adjust the path to where your config.json file is


const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth()

export { app, auth, db }
