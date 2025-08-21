import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Layout from "..src/layout/Layout.jsx";

import { AuthProvider } from "./auth/AuthContext";
import { ApiProvider } from "./api/ApiContext";
// import { PageProvider } from "./layout/PageContext";
import { BrowserRouter, Routes, Route } from "react-router";
import Navbar from "./layout/Navbar.jsx";
import Register from "./auth/Register.jsx";
import Login from "./auth/Login.jsx";

createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <ApiProvider>
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<Layout />}></Route>
          <Route path="/Navbar" element={<Navbar />}></Route>
          <Route path="/Register" element={<Register />}></Route>
          <Route path="/Login/:id" element={<Login />}></Route> */}
        </Routes>
      </BrowserRouter>
    </ApiProvider>
  </AuthProvider>
);
