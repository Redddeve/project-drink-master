import styled from "styled-components";
import { device } from '../../../../styles/device';

export const LogoutContainer = styled.div`
  position: absolute;
  z-index: 10;
  top: 58px;
  right: -100%;
  width: 335px;
  padding: 50px 25px;
  border-radius: 8px;
  text-align: center;
  background-color: #161F37;
  font-size: 14px;

  @media ${device.tablet} {
    top: 70px;
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
  stroke: #F3F3F3;
  cursor: pointer;
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 8px;
  margin-top: 25px;
  align-items: center;
  justify-content: center;

 @media ${device.tablet} {
    gap: 12px;
    margin-top: 37px;
  }
`;

export const LogoutBtn = styled.button`
display: inline-flex;
width: 140px;
padding: 16px 35px;
align-items: flex-start;
gap: 10px;
border-radius: 42px;
font-size: 16px;
font-style: normal;
font-weight: 600;
color: #161F37; 
background: var(--white);
cursor: pointer;

@media ${device.tablet}  {
    gap: 14px;
  }

  &:hover,
  &:focus {
    transform: scale(1.1);
  }
`;

export const CancelBtn = styled.button`
display: inline-flex;
width: 140px;
padding: 16px 37px;
align-items: flex-start;
gap: 10px;
border-radius: 42px;
font-size: 16px;
font-style: normal;
font-weight: 600;
color: #F3F3F3; 
background: #434D67;
cursor: pointer;

@media ${device.tablet}  {
    gap: 14px;
  }

  &:hover,
  &:focus {
    transform: scale(1.1);
  }
`;