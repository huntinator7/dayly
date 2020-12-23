import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { Routes } from "./router";
import { StoreProvider } from "./store";
import { FirebaseAppProvider } from "reactfire";

const firebaseConfig = {
  apiKey: "AIzaSyBL8IRD8GhGBspf98CUT6SmARyXmUcWWng",
  authDomain: "dayly-4ae8d.firebaseapp.com",
  projectId: "dayly-4ae8d",
  storageBucket: "dayly-4ae8d.appspot.com",
  messagingSenderId: "1065971006324",
  appId: "1:1065971006324:web:47ef350895d8d23b55ca21",
  measurementId: "G-8CMFGRW0VW",
};

// @ts-ignore
ReactDOM.unstable_createRoot(
  document.getElementById("root") as HTMLElement
).render(
  <React.StrictMode>
    <FirebaseAppProvider firebaseConfig={firebaseConfig}>
      <StoreProvider>
        <Routes />
      </StoreProvider>
    </FirebaseAppProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
