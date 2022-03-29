import styled from "styled-components";

export const Layout = styled.div`
  display: grid;

  grid-template-columns: 300px calc(100% - 500px) 200px;
  grid-template-rows: 90px calc(100% - 190px) 100px;

  grid-template-areas:
    "c11 c12 c13"
    "c21 c22 c23"
    "c31 c32 c33";

  height: 100%;
`;
