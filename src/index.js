import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import { SearchProvider } from "./context/SearchContext";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <SearchProvider>
        <Routes>
          <Route exact path="*" element={<App />} />
        </Routes>
      </SearchProvider>
    </BrowserRouter>
  </React.StrictMode>
);
