import styled from 'styled-components';
import { device } from '../../../styles/device';
import { darkTheme, lightTheme } from '../../../styles/theme';

export const Nav = styled.nav`
  position: absolute;
  z-index: 10;
  top: 98px;
  bottom: 0;
  left: 0;
  right: 0;
  display: grid;
  background-color: ${({ theme }) =>
    theme === 'dark' ? darkTheme.background.main : lightTheme.background.main};
  color: ${({ theme }) =>
    theme === 'dark' ? darkTheme.colors.main : lightTheme.colors.main};

  @media ${device.desktop} {
    position: static;
    display: block;
    border: none;
  }

  & a {
    padding: 8px 16px;
    border: ${({ theme }) =>
      theme === 'dark'
        ? darkTheme.borderColor.main
        : lightTheme.borderColor.main};
    border-radius: 40px;
    color: ${({ theme }) =>
      theme === 'dark' ? darkTheme.colors.main : lightTheme.colors.main};
  }

  & a.active {
    padding: 8px 16px;
    color: ${({ theme }) =>
      theme === 'dark' ? lightTheme.colors.main : darkTheme.colors.main};
    background-color: ${({ theme }) =>
      theme === 'dark'
        ? lightTheme.background.main
        : darkTheme.background.main};
  }
`;

export const List = styled.ul`
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  margin: 20% auto 0 auto;

  @media ${device.desktop} {
    display: flex;
    flex-direction: row;
    margin: 0;
  }
`;

export const Item = styled.li`
  display: flex;
  border: 1px solid rgba(243, 243, 243, 0.2);
  border-radius: 40px;
  font-size: 14px;
  font-weight: 500;

  transition-property: transform;
  transition: 0.3s ease;

  &:hover,
  &:focus {
    transform: scale(1.1);
    color: #f3f3f3;
  }
`;
