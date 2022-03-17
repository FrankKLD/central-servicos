import styled from "styled-components";
import { PersonFill } from "styled-icons/bootstrap";

export const Container = styled.div`
  grid-area: SA;
  background: var(--THEME_COLOR_001);

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  padding: 0 12px;
`;

export const FormSearch = styled.form``;

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