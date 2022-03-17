import styled from "styled-components";
// LA - Logo Area
// SA - Search Area
// SB - Side Bar Area
// CA - Content Area
// ST - Status Bar Area
export const Grid = styled.div`
  display: grid;

  grid-template-columns: 250px calc(100% - 250px);
  grid-template-rows: 55px calc(100% - 55px - 32px) 32px;

  grid-template-areas:
    "LA SA"
    "SB CA"
    "SB ST";

  height: 100%;
`;
