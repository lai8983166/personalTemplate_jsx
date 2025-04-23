// src/App.jsx
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FilterSele from "../views/FilterSele";
import FilterAnt from "../views/Filter_ant";
import FilterRaw from "../views/Filter_raw";

const App = () => (
  <BrowserRouter>
    <Routes>
      {/* 根路径渲染选择页面 */}
      <Route path="/" element={<FilterSele />} />
      {/* 点击后分别渲染两种筛选器 */}
      <Route path="/filter/ant" element={<FilterAnt />} />
      <Route path="/filter/raw" element={<FilterRaw />} />
    </Routes>
  </BrowserRouter>
);

export default App;
