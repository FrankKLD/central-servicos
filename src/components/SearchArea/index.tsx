import React from "react";

import {
  Container,
  FormInputSearch,
  FormSearch,
  SearchIcon,
  UserArea,
  UserIcon,
} from "./styles";

const SearchArea: React.FC = () => {
  return (
    <Container>
      <FormSearch>
        <FormInputSearch placeholder="Pesquisar Ticket" type="text" />
        <SearchIcon />
      </FormSearch>
      <UserArea>
        <span>José da Silva</span>
        <UserIcon />
      </UserArea>
    </Container>
  );
};

export default SearchArea;
