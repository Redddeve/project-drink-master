import styled from "styled-components";
import { device } from '../../../../styles/device';

export const LogoutContainer = styled.div`
  position: absolute;
  z-index: 10;
  top: 54px;
  right: -70px;
  width: 335px;
  padding: 50px 25px;
  border-radius: 8px;
  text-align: center;
  background-color: $accentColor;
  font-size: $mainFontSize;

  @media ${device.tablet} {
    top: 67px;
    width: 500px;
    padding: 50px;
    font-size: 18px;
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 14px;
  right: 14px;
  display: flex;
  align-items: center;
  gap: 8px;
  border: none;
  outline: none;
  background-color: transparent;

  transition-property: transform;
  transition-duration: $transitionDuration;
  transition-timing-function: $transitionTimingFunction;

 @media ${device.tablet} {
    gap: 14px;
  }

  &:hover,
  &:focus {
    transform: scale(1.1);
  }
`;

export const CloseIcon = styled.svg`
  width: 24px;
  height: 24px;
  stroke: $mainBtnBackgroundColor;
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 8px;
  margin-top: 25px;

 @media ${device.tablet} {
    gap: 12px;
    margin-top: 37px;
  }
`;
