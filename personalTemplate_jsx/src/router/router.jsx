// src/App.jsx
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import FilterAnt from "../views/Filter_ant";
import FilterRaw from "../views/Filter_raw";
import Selection from "../views/Selection";

import PaginatedPageAnt from "../views/PaginatedPage_ant";
import PaginationPageRaw from "../views/PaginatedPage_raw";

import SortAnt from "../views/Sort_ant";
import SortRaw from "../views/Sort_raw";

import FormAnt from "../views/Form_ant";
import FormRaw from "../views/Form_raw";

import PicUploadRaw from "../views/PicUpload_Raw";
import PicUploadAnt from "../views/PicUpload_Ant";
import SeleTable from "../components/SeleTable";
import Icons from "../views/Icons";
import DragdropAnt from "../views/Dragdrop_ant";
const App = () => (
  <BrowserRouter>
    <Routes>
      {/* 根路径渲染选择页面 */}
      <Route path="/" element={<Selection />} />
      <Route path="/:pageType" element={<SeleTable />} />
      <Route path="/icons" element={<Icons />} />
      {/* 点击后分别渲染两种筛选器 */}
      <Route path="/filter/filterAnt" element={<FilterAnt />} />
      <Route path="/filter/filterRaw" element={<FilterRaw />} />
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
      <Route path="/form/formAnt" element={<FormAnt />} />
      <Route path="/form/formRaw" element={<FormRaw />} />
      <Route path="/picupload/picuploadRaw" element={<PicUploadRaw />} />
      <Route path="/picupload/picuploadAnt" element={<PicUploadAnt />} />
      <Route path="/dragdrop/dragdropAnt" element={<DragdropAnt />} />
    </Routes>
  </BrowserRouter>
);

export default App;
