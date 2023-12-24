import styled, { keyframes } from 'styled-components';

const blindEffect = keyframes`
  0% {
    background-color: rgba(255, 0, 0, 0.5);
  }
  25% {
    background-color: rgba(0, 255, 0, 0.5);
  }
  50% {
    background-color: rgba(0, 0, 255, 0.5);
  }
  75% {
    background-color: rgba(255, 0, 255, 0.5);
  }
  100% {
    background-color: rgba(255, 255, 0, 0.5);
  }
`;
export const ComponentStyle = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 11;
  animation: ${blindEffect} 1s infinite;
`;
