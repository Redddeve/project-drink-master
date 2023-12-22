import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { device } from '../../styles/device';
import { darkTheme, lightTheme } from '../../styles/theme';

export const HeroSection = styled.section`
  margin-bottom: 112px;

  @media ${device.tablet} {
    margin-bottom: 123px;
  }

  @media ${device.desktop} {
    display: flex;
    flex-direction: row;
    gap: 130px;
    margin-bottom: 160px;
  }
`;

export const HeroInfo = styled.div`
  margin-bottom: 47px;

  @media ${device.tablet} {
    width: 641px;
    margin-bottom: 54px;
  }

  @media ${device.desktop} {
    width: 715px;
    margin-bottom: 0;
    margin-top: 57px;
    height: 330px;
  }
`;

export const HeroText = styled.p`
  line-height: 1.42em;
  margin-bottom: 32px;
  color: ${({ theme }) =>
    theme === 'dark' ? darkTheme.colors.main : lightTheme.colors.main};

  @media ${device.tablet} {
    width: 619px;
    font-size: 18px;
    line-height: 1.33em;
    margin-bottom: 48px;
  }

  @media ${device.desktop} {
    width: 500px;
    margin-bottom: 40px;
  }
`;

export const AddDrinksNavLink = styled(NavLink)`
  color: ${({ theme }) =>
    theme === 'dark' ? lightTheme.colors.main : darkTheme.colors.main};
  font-weight: 600;
  line-height: 1.28em;
  padding: 14px 40px;
  border-radius: 42px;
  background-color: ${({ theme }) =>
    theme === 'dark'
      ? lightTheme.background.main
      : darkTheme.background.blackBg};
  display: inline-block;

  &:hover,
  &:focus {
    border: 2px solid rgba(64, 112, 205, 0.5);
    transition: var(--tran-fast);
  }

  @media ${device.tablet} {
    padding: 18px 44px;
    line-height: 1.12em;
  }
`;

export const HeroImg = styled.div`
  width: 252px;
  height: 313px;
  margin: 0 auto;

  @media ${device.tablet} {
    width: 359px;
    height: 445px;
  }
`;
