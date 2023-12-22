import styled from 'styled-components';
import { device } from '../../styles/device';
import { NavLink } from 'react-router-dom';
import { darkTheme, lightTheme } from '../../styles/theme';

export const Title = styled.h2`
  font-size: 28px;
  font-weight: 600;
  line-height: 1.14em;
  margin-top: 40px;
  margin-bottom: 24px;
  color: ${({ theme }) =>
    theme === 'dark' ? darkTheme.colors.main : lightTheme.colors.main};

  @media ${device.tablet} {
    font-size: 40px;
    margin-top: 80px;
    margin-bottom: 40px;
  }
`;

export const OtherDrinksNavLink = styled(NavLink)`
  width: 163px;
  color: ${({ theme }) =>
    theme === 'dark' ? lightTheme.colors.main : darkTheme.colors.main};
  /* background: var(--white); */
  background-color: ${({ theme }) =>
    theme === 'dark'
      ? lightTheme.background.main
      : darkTheme.background.blackBg};
  font-weight: 600;
  line-height: 1.28em;
  padding: 14px 40px;
  margin: 60px auto 0;
  border-radius: 42px;
  display: flex;
  justify-content: center;
  white-space: nowrap;

  &:hover,
  &:focus {
    border: 2px solid rgba(64, 112, 205, 0.5);
    transition: var(--tran-fast);
  }

  @media ${device.tablet} {
    width: 183px;
    padding: 18px 44px;
    line-height: 1.12em;
    margin-top: 80px;
  }
`;
