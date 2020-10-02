import React from "react";
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";

firebase.initializeApp({
  apiKey: "AIzaSyDwUuBDXVDqOA3b2YkqasGuwxId5kffLtA",
  authDomain: "avoid-app-team.firebaseapp.com",
  databaseURL: "https://avoid-app-team.firebaseio.com",
  projectId: "avoid-app-team",
  storageBucket: "avoid-app-team.appspot.com",
  messagingSenderId: "173295052367",
  appId: "1:173295052367:web:75087a1446ef33bca66c3a",
  measurementId: "G-BSKXP4N9CQ",
});

const auth = firebase.auth();
const firestore = firebase.firestore();

const Chat = () => {
  const [user] = useAuthState(auth);

  return (
    <div className="app">
      <header></header>

      <section></section>
    </div>
  );
};
