import styled from 'styled-components';
import { device } from '../../styles/device.js';
import { darkTheme, lightTheme } from '../../styles/theme.js';

export const StyledDrinkHero = styled.div`
  margin-bottom: 18px;

  @media ${device.tablet} {
    margin-bottom: 80px;
  }

  @media ${device.desktop} {
    display: flex;
    gap: 249px;
    margin-bottom: 100px;
  }
`;

export const StyledDrinkHeader = styled.h2`
  font-size: 32px;
  font-weight: 600;
  line-height: 1.19;
  margin-bottom: 8px;
  color: ${({ theme }) =>
    theme === 'dark' ? darkTheme.colors.main : lightTheme.colors.main};

  @media ${device.tablet} {
    font-size: 56px;
    line-height: 1.07;
  }

  @media ${device.desktop} {
    font-size: 64px;
  }
`;

export const StyledDrinkType = styled.p`
  color: ${({ theme }) =>
    theme === 'dark' ? darkTheme.colors.transp : lightTheme.colors.transp};
  font-size: 12px;
  line-height: 1.17;
  margin-bottom: 20px;

  @media ${device.tablet} {
    font-size: 16px;
    line-height: 1.25;
  }
`;

export const StyledDrinkDesc = styled.p`
  width: 335px;
  margin-bottom: 40px;
  color: ${({ theme }) =>
    theme === 'dark' ? darkTheme.colors.main : lightTheme.colors.main};

  @media ${device.tablet} {
    width: 600px;
  }
`;

export const StyledAddToFavButton = styled.button`
  position: relative;
  z-index: 1;

  display: flex;
  width: 222px;
  padding: 14px 40px;
  align-items: center;
  border-radius: 42px;
  background-color: ${({ theme }) =>
    theme === 'dark' ? darkTheme.colors.main : lightTheme.background.lightBg};
  color: ${({ theme }) =>
    theme === 'dark' ? darkTheme.background.main : lightTheme.background.main};
  border: 1px solid rgba(243, 243, 243, 0.2);

  font-weight: 600;
  line-height: 1.29;
  transition: var(--tran-fast);
  margin-bottom: 80px;

  @media ${device.tablet} {
    width: 260px;
    padding: 18px 44px;
    font-size: 16px;
    line-height: 1.12;
  }

  &:hover {
    cursor: pointer;
    background: transparent;
    border: 1px solid rgba(243, 243, 243, 0.2);
    color: #f3f3f3;
  }
`;

export const StyledDrinkImage = styled.img`
  width: 335px;
  height: 400px;
  object-fit: cover;

  @media ${device.tablet} {
    width: 704px;
    height: 400px;
  }

  @media ${device.desktop} {
    width: 400px;
  }
`;
