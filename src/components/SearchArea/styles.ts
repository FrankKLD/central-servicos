import styled from "styled-components";
import { PersonFill, Search } from "styled-icons/bootstrap";

export const Container = styled.div`
  grid-area: SA;
  background: var(--THEME_COLOR_001);

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  padding: 0 12px;
`;

export const FormSearch = styled.form`
  display: flex;
  flex-direction: row;
  width: 40%;

  background: var(--THEME_COLOR_002);
  padding: 8px 16px;
  border-radius: 8px;
`;

export const FormInputSearch = styled.input`
  display: flex;
  background: none;
  border-right: 1px solid var(--THEME_COLOR_005);
  width: calc(100% - 25px);
`;

export const SearchIcon = styled(Search)`
  width: 18px;
  color: var(--THEME_COLOR_005);
  margin-left: 7px;
`;

export const UserArea = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: var(--THEME_COLOR_002);

  > span {
    margin-right: 12px;
    font-size: 12.8px;
  }
`;

export const UserIcon = styled(PersonFill)`
  width: 22px;
`;
