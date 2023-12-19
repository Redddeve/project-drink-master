import styled from 'styled-components';
import { device } from '../../styles/device';

export const EmptyMyCocktailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 205px;
  gap: 32px;
  margin: 90px auto 0;

  @media ${device.tablet} {
    margin: 100px auto 0;
    width: 261px;
  }

  @media ${device.desktop} {
    margin: 67px auto 0;
  }
`;

export const EmptyDescription = styled.p`
  text-align: center;
  font-weight: 500;
`;
