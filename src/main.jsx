// src/main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

// Monkey patch untuk production
// if (import.meta.env.PROD) {
//   const originalPush = window.history.pushState;
//   window.history.pushState = function (state, title, url) {
//     if (url && typeof url === "string" && !url.startsWith("/doo-web") && url !== "/") {
//       url = "/doo-web" + url;
//     }
//     return originalPush.call(this, state, title, url);
//   };
// }

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
