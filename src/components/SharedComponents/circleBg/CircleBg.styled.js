import styled from 'styled-components';
import { device } from '../../../styles/device';

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
    top: 385px;
    right: -300px;
  }
`;
