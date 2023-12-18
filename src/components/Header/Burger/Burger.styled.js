import styled from "styled-components";
import { device } from "../../../styles/device";


export const BurgerMenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const BurgerIcon = styled.div`
  stroke: #F3F3F3;
  width: 32px;
  height: 32px;


  @media ${device.tablet} {
    width: 38px;
    height: 38px;
  }

  @media ${device.desktop} {
    display: none;
  }
`;
