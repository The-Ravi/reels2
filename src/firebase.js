import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/storage';
import 'firebase/compat/firestore';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAguFVuh--Sj6B13n8Rsij7VXd_0HitXPE",
  authDomain: "reels2-134ce.firebaseapp.com",
  projectId: "reels2-134ce",
  storageBucket: "reels2-134ce.appspot.com",
  messagingSenderId: "317492311139",
  appId: "1:317492311139:web:6d94cc55536b04ffd57456"
};

// Initialize Firebase
//const app = initializeApp(firebaseConfig);
 firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();

const firestore = firebase.firestore();
export const database = {
    users : firestore.collection('users'),
    posts : firestore.collection('posts'),
    comments : firestore.collection('comments'),
    getTimeStamp : firebase.firestore.FieldValue.serverTimestamp,
}

export const storage = firebase.storage()