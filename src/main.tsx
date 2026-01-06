import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Home, Report } from "./pages";
import { Layout } from "./components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UnderMaintenance from "./pages/Home/UnderMaintenance";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="report" element={<Report />} />
          <Route path="maintenance" element={<UnderMaintenance />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);

