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

export const Circle = styled.div`
  display: none;

  @media ${device.tablet} {
    position: absolute;
    display: block;
    top: 465px;
    right: -425px;
    width: 549px;
    height: 543px;
    border-radius: 549px;

    background: ${({ theme }) =>
      theme === 'dark' ? 'rgba(64, 112, 205, 0.5)' : 'rgba(64, 112, 205, 0.1)'};
    filter: blur(104.8543701171875px);
  }
  @media ${device.desktop} {
    top: 425px;
    right: -300px;
  }
`;
