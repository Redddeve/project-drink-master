import styled from 'styled-components';
import { device } from '../../styles/device.js';

export const StyledHeader = styled.h2`
  margin-bottom: 40px;
  color: var(--white);
  font-size: 32px;
  font-weight: 600;
  line-height: 1.19;

  @media ${device.tablet} {
    margin-bottom: 60px;
    font-size: 56px;
    font-weight: 600;
    line-height: 1.07;
  }

  @media ${device.desktop} {
    margin-bottom: 80px;
    font-size: 64px;
  }
`;
