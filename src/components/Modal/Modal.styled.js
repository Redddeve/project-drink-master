import styled from 'styled-components';
import { device } from '../../styles/device';

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow-y: auto;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(1.5px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

export const ModalContent = styled.div`
  width: 375px;
  height: 812px;
  padding: 272px 38px 271px;
  background-repeat: no-repeat;
  background-size: cover;
  z-index: 1001;
  background-image: url(${props => props.background || ''});

  @media ${device.tablet} {
    width: 500px;
    height: 500px;
    padding: 218px 116px 40px;
    border-radius: 32px;
    background-image: url(${props => props.background || ''});
  }
`;

export const MessageBox = styled.div`
  width: 299px;
  height: 269px;
  padding: 50px 30px 14px;
  background: rgba(217, 217, 217, 0.14);
  backdrop-filter: blur(27.976364135742188px);

  @media ${device.tablet} {
    width: 268px;
    height: 242px;
    padding: 32px 18px 14px;
  }
`;

export const MessageText = styled.h2`
  text-align: center;
  font-size: 28px;
  font-weight: 500;
  line-height: 1.14em;
  letter-spacing: -0.56px;
  margin-bottom: 20px;
`;

export const CloseModalBtn = styled.button`
  width: 48px;
  height: 48px;
  padding: 10px;
  margin: 0 auto;
  border-radius: 58px;
  border: none;
  background: var(--black);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;
