import React from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import MainPage from "./pages/MainPage";
import "./reset.css";
import DevicePage from "./pages/DevicePage";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<MainPage />}
        />
        <Route
          path="/device"
          element={<DevicePage />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
