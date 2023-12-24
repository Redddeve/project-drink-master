import styled from "styled-components";
import { device } from '../../../../styles/device';

export const DropdownContainer = styled.div`
  position: absolute;
  z-index: 10;
  top: 54px;
  right: 0;
  width: 177px;
  padding: 18px;
  border-radius: 8px;
  background-color: $accentColor;

 @media ${device.tablet} {
    top: 67px;
  }
`;

export const Heading = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 38px;
  font-size: $mainFontSize;
`;

export const EditProfileButton = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  border: none;
  outline: none;
  background-color: transparent;

  transition-property: transform;
  transition-duration: $transitionDuration;
  transition-timing-function: $transitionTimingFunction;

  @media ${device.tablet}  {
    gap: 14px;
  }

  &:hover,
  &:focus {
    transform: scale(1.1);
  }
`;

export const PenIcon = styled.svg`
  width: 14px;
  height: 14px;
`;
