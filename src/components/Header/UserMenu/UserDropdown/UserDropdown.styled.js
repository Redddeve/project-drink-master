import styled from 'styled-components';
import { device } from '../../../../styles/device';

export const DropdownContainer = styled.div`
  position: absolute;
  z-index: 10;
  top: 58px;
  right: 0;
  width: 177px;
  padding: 18px;
  border-radius: 8px;
  background-color: var(--black);
  box-shadow: ${({ theme }) =>
    theme === 'dark' ? '-3px 3px 7px 1px #161718' : '-3px 3px 7px 1px gray'};

  @media ${device.tablet} {
    top: 70px;
  }
`;

export const Heading = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 38px;

  p {
    cursor: pointer;
  }
`;

export const EditProfileButton = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  border: none;
  outline: none;
  background-color: transparent;
  cursor: pointer;

  @media ${device.tablet} {
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
  stroke: var(--white);
`;

export const StyledLogoutButton = styled.button`
  display: inline-flex;
  width: 141px;
  padding: 12px 39px;
  align-items: center;
  justify-content: center;
  gap: 10px;
  border-radius: 42px;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
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
