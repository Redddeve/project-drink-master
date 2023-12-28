import styled, { keyframes } from 'styled-components';
import { device } from '../../../styles/device';

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

const rightAnimation = keyframes`
  0% {
    transform: scale(1) rotate(-2deg);
  }
  50% {
    transform: scale(1.08) rotate(10deg);
  }
  50% {
    transform: scale(0.8rotate(-5deg));
  }
  50% {
    transform: scale(1.08)rotate(5deg);
  }
  100% {
    transform: scale(1)rotate(0deg);
  }
`;

const leftAnimation = keyframes`
  0% {
    transform: scaleX(-1) translateX(-50%) scale(1) rotate(2deg);
  }
  50% {
    transform: scaleX(-1) translateX(-50%) scale(1.08) rotate(10deg);
  }
  50% {
    transform: scaleX(-1) translateX(-50%) scale(0.8) rotate(-5deg);
  }
  50% {
    transform: scaleX(-1) translateX(-50%) scale(1.08) rotate(5deg);
  }
  100% {
    transform: scaleX(-1) translateX(-50%) scale(1) rotate(0deg);
  }
`;

export const ComponentStyle = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  overflow-y: hidden;
  top: 0;
  left: 0;
  z-index: 11;
  animation: ${blindEffect} 1s infinite;
`;

export const SpeakerLeft = styled.svg`
  position: absolute;
  transform: scaleX(-1);
  top: calc(50% - 198px);
  left: calc(50% - 199px);
  width: 100px;
  height: 175px;
  fill: black;
  transition: var(--tran-fast);
  animation: ${leftAnimation} 1.5s infinite;

  @media ${device.tablet} {
    top: calc(50% - 186px);
    left: calc(50% - 308px);
    width: 170px;
    height: 170px;
  }

  @media ${device.desktop} {
    top: calc(50% - 300px);
    left: calc(50% - 546px);
    width: 325px;
    height: 425px;
  }
`;

export const SpeakerRight = styled.svg`
  position: absolute;
  top: calc(50% - 198px);
  right: calc(50% - 158px);
  width: 100px;
  height: 175px;
  fill: black;
  transition: var(--tran-fast);
  animation: ${rightAnimation} 1.5s infinite;

  @media ${device.tablet} {
    top: calc(50% - 186px);
    right: calc(50% - 240px);
    width: 170px;
    height: 170px;
  }

  @media ${device.desktop} {
    top: calc(50% - 300px);
    right: calc(50% - 387px);
    width: 325px;
    height: 425px;
  }
`;
