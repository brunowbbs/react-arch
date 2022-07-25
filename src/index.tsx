import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./core/imports.css";
import GlobalStyles from "./core/globalStyles";

import { Contact } from "./app/views/Contact.view";
import { Home } from "./app/views/Home.view";
import { NotFound } from "./app/views/NotFound404.view";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
    <GlobalStyles />
  </React.StrictMode>
);
