import styled from "styled-components";
import { device } from "../../styles/device";

export const FavoriteTitle = styled.h2`
  font-size: 32px;
  font-weight: 600;
  line-height: 1.18;

  @media ${device.tablet} {
    font-size: 56px;
  }

  @media ${device.desktop} {
    font-size: 64px;
  }
`;
