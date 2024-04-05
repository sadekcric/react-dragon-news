import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import router from "./Routs/Routs";
import { RouterProvider } from "react-router-dom";
import AuthProvider from "./Routs/AuthProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
