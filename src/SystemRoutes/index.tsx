import React from "react";
import { Route, Routes } from "react-router-dom";
import NotFound from "../views/NotFound";
import View01 from "../views/View01";
import View02 from "../views/View02";

const SystemRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/c3" element={<View02 />} />
      <Route path="/" element={<View01 />} />

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default SystemRoutes;
