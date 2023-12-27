import styled from 'styled-components';
import { device } from '../../../../styles/device';

export const LogoutContainer = styled.div`
  position: absolute;
  z-index: 10;
  top: 58px;
  right: -50%;
  width: 335px;
  padding: 50px 25px;
  border-radius: 8px;
  text-align: center;
  background-color: #161f37;
  font-size: 14px;
  box-shadow: ${({ theme }) =>
    theme === 'dark' ? '-3px 3px 7px 1px #161718' : '-3px 3px 7px 1px gray'};

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
  stroke: #f3f3f3;
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
  align-items: center;
  justify-content: center;
  gap: 10px;
  border-radius: 42px;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  border: none;
  color: #161f37;
  background: var(--white);
  cursor: pointer;

  @media ${device.tablet} {
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
  align-items: center;
  justify-content: center;
  gap: 10px;
  border-radius: 42px;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  color: #f3f3f3;
  background: #434d67;
  cursor: pointer;
  border: none;

  @media ${device.tablet} {
    gap: 14px;
  }

  &:hover,
  &:focus {
    transform: scale(1.1);
  }
`;
