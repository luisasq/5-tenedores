import firebase from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyChom0tq3o0c501uuXQ4HHoimJHg10wLWg",
  authDomain: "tenedores-defi.firebaseapp.com",
  databaseURL: "https://tenedores-defi.firebaseio.com",
  projectId: "tenedores-defi",
  storageBucket: "tenedores-defi.appspot.com",
  messagingSenderId: "479666373029",
  appId: "1:479666373029:web:3db5d35983720ee44a284c",
};

export const firebaseApp = firebase.initializeApp(firebaseConfig);
