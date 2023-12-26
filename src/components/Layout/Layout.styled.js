import styled from 'styled-components';
import { device } from '../../styles/device';

export const StyledMain = styled.main`
  position: relative;
  margin: 0 auto;
  min-width: 335px;
  max-width: 375px;
  min-height: 500px;
  padding: 80px 20px;

  @media ${device.tablet} {
    max-width: 768px;
    padding: 140px 32px;
  }

  @media ${device.desktop} {
    max-width: 1440px;
    padding: 158px 100px 140px;
  }
`;
