import styled from "styled-components";
import { Link } from "react-router-dom";
import { device } from "../../styles/device.js";

export const StyledDrinkCard = styled.div`
  width: 335px;

  @media screen and ${device.tablet} {
    width: 342px;
  }

  @media screen and ${device.laptopL} {
    width: 400px;
  }
`;

export const StyledDrinkImage = styled.img`
  width: 100%;
  height: 360px;
  border-radius: 8px;

  @media screen and ${device.laptopL} {
    height: 400px;
  }
`;

export const StyledTextContainerSmall = styled.div`
  width: 100%;
  margin-top: 14px;
  display: flex;
  justify-content: space-between;
`;

export const StyledSeeMoreSmall = styled(Link)`
  color: var(--transp-white);
  cursor: pointer;
`;
