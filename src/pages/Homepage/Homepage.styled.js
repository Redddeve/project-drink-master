import styled from 'styled-components';
import { device } from '../../styles/device';

export const CircleTwo = styled.div`
  display: none;

  @media ${device.desktop} {
    position: absolute;
    display: block;
    top: 370px;
    right: 180px;
    width: 387px;
    height: 381px;
    border-radius: 381px;

    background: ${({ theme }) =>
      theme === 'dark'
        ? 'rgba(188, 230, 210, 0.3)'
        : 'rgba(188, 230, 210, 0.4)'};
    filter: blur(104.8543701171875px);
  }
`;
