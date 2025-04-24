// src/App.jsx
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FilterSele from "../views/FilterSele";
import FilterAnt from "../views/Filter_ant";
import FilterRaw from "../views/Filter_raw";
import Selection from "../views/Selection";
import PaginatedpageSele from "../views/PaginatedPageSele";
import PaginatedPageAnt from "../views/PaginatedPage_ant";
import PaginationPageRaw from "../views/PaginatedPage_raw";
import SortSele from "../views/SortSele";
import SortAnt from "../views/Sort_ant";
import SortRaw from "../views/Sort_raw";

const App = () => (
  <BrowserRouter>
    <Routes>
      {/* 根路径渲染选择页面 */}
      <Route path="/" element={<Selection />} />
      <Route path="/filter" element={<FilterSele />} />
      <Route path="/paginatedpage" element={<PaginatedpageSele />} />
      <Route path="/sort" element={<SortSele />} />
      {/* 点击后分别渲染两种筛选器 */}
      <Route path="/filter/ant" element={<FilterAnt />} />
      <Route path="/filter/raw" element={<FilterRaw />} />
      <Route
        path="/paginatedpage/paginatedpageAnt"
        element={<PaginatedPageAnt />}
      />
      <Route
        path="/paginatedpage/paginatedpageRaw"
        element={<PaginationPageRaw />}
      />
      <Route path="/sort/sortAnt" element={<SortAnt />} />
      <Route path="/sort/sortRaw" element={<SortRaw />} />
    </Routes>
  </BrowserRouter>
);

export default App;
