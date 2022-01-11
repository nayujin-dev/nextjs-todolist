import '../styles/global.css'
import firebase from 'firebase/compat/app';
import 'firebase/analytics';
import 'firebase/firestore';
import "firebase/compat/auth";
import { initializeApp } from "firebase/app";
import "firebase/compat/firestore";
import "firebase/compat/storage";
import "firebase/firestore"; 
import "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyDhm1g0ONyQCX6DCIlpmNIbyXpZktzuLFw",
    authDomain: "mytodolist-86c4c.firebaseapp.com",
    projectId: "mytodolist-86c4c",
    storageBucket: "mytodolist-86c4c.appspot.com",
    messagingSenderId: "543291764688",
    appId: "1:543291764688:web:366691147e8967dd11d3d5"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default function App({ Component, pageProps }) {
    return <Component {...pageProps} />
  }

export const firebaseInstance=firebase;
export const dbService=firebase.firestore();
export const storageService = firebase.storage(); 
export const authService = firebase.auth();
