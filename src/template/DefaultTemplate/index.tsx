import React from "react";
import { BrowserRouter } from "react-router-dom";
import Component02 from "../../components/Component02";
import GlobalStyles from "../../styles/GlobalStyles";
import SystemRoutes from "../../SystemRoutes";

import { Layout } from "./styles";

const DefaultTemplate: React.FC = () => {
  return (
    <BrowserRouter>
      <Layout>
        <SystemRoutes />
        <Component02 />
      </Layout>

      <GlobalStyles />
    </BrowserRouter>
  );
};

export default DefaultTemplate;
