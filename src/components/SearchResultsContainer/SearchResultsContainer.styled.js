import styled from 'styled-components';
import { device } from '../../styles/device.js';

export const StyledCardsContainer = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 28px;
  list-style: none;

  @media ${device.tablet} {
    flex-direction: row;
    flex-wrap: wrap;
    gap: 20px;
    row-gap: 40px;
  }

  @media ${device.desktop} {
    row-gap: 80px;
  }
`;
