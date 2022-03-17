import React from "react";
import LogoArea from "../../components/LogoArea";
import SearchArea from "../../components/SearchArea";
import GlobalStyles from "../../styles/GlobalStyles";

import { Grid } from "./styles";

const TemplateDefault: React.FC = () => {
  return (
    <>
      <Grid>
        <LogoArea />
        <SearchArea />
      </Grid>
      <GlobalStyles />
    </>
  );
};

export default TemplateDefault;
