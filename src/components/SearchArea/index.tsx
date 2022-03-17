import React from "react";

import { Container, FormSearch, UserArea, UserIcon } from "./styles";

const SearchArea: React.FC = () => {
  return (
    <Container>
      <FormSearch>
        <input type="text" />
      </FormSearch>
      <UserArea>
        <span>Usuário</span>
        <UserIcon />
      </UserArea>
    </Container>
  );
};

export default SearchArea;
