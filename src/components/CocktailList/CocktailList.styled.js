import styled from "styled-components";
import { device } from "../../styles/device";

export const ListStyled = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 40px;
  margin-top: 40px;

  @media ${device.tablet} {
    column-gap: 20px;
    row-gap: 80px;
    margin-top: 60px;
  }

  @media ${device.desktop} {
    margin-top: 60px;
  }
`;
