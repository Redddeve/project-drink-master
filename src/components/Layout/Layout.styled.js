import styled from 'styled-components';
import { device } from '../../styles/device';

export const StyledMain = styled.main`
  margin: 0 auto;
  min-width: 335px;
  max-width: 375px;
  padding: 80px 20px;

  @media ${device.tablet} {
    max-width: 768px;
    padding: 140px 32px;
  }

  @media ${device.desktop} {
    max-width: 1440px;
    padding: 158px 100px 140px;
  }
  ::before {
    content: '';
    display: block;
    position: absolute;
    top: 100px;
    left: -400px;
    width: 520px;
    height: 550px;
    border-radius: 550px;
    background: rgba(64, 112, 205, 0.5);
    filter: blur(104.8543701171875px);
  }
  ::after {
    content: '';
    display: block;
    position: absolute;
    bottom: -200px;
    right: -400px;
    width: 549px;
    height: 543px;
    border-radius: 549px;
    background: rgba(64, 112, 205, 0.5);
    filter: blur(104.8543701171875px);
  }
`;
