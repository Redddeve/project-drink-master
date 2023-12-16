import styled from "styled-components";

export const ListStyled = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 40px;
  margin-top: 40px;

  @media screen and (min-width: 768px) {
    column-gap: 20px;
    row-gap: 80px;
    margin-top: 60px;
  }

  @media screen and (min-width: 1280px) {
    margin-top: 60px;
  }
`;
