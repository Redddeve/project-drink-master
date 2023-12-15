import styled from 'styled-components';
import { device } from '../../styles/device';

export const StyledWrapper = styled.div`
  margin: 0 auto;
  min-width: 335px;
  max-width: 375px;
  padding: 20px 20px 18px;

  @media ${device.tablet} {
    max-width: 768px;
    padding: 20px 32px 24px;
  }

  @media ${device.laptopL} {
    max-width: 1440px;
    padding: 20px 100px 24px;
  }
`;
export const StyledMain = styled.main`
  padding: 80px 0;

  @media ${device.tablet} {
    padding: 140px 0;
  }

  @media ${device.laptopL} {
    padding: 158px 0 140px;
  }
`;
