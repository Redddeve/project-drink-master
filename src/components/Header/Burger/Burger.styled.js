import styled from "styled-components";


export const BurgerMenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const BurgerIcon = styled.div`
  width: 32px;
  height: 32px;
  

  @media screen and (min-width: 768px) {
    width: 38px;
    height: 38px;
  }

  @media screen and (min-width: 1024px) {
    display: none;
  }
`;
