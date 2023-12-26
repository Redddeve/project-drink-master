import styled from 'styled-components';
import { device } from '../../../styles/device';
import { darkTheme, lightTheme } from '../../../styles/theme';

export const LogoGroup = styled.div`
  display: flex;
  gap: 8px;
  margin-right: auto;
  align-items: center;

  &:hover,
  &:focus {
    cursor: pointer;
  }

  @media ${device.tablet} {
    gap: 14px;
    align-items: flex-start;
  }

  @media ${device.desktop} {
    margin-right: 0;
  }
`;

export const Icon = styled.svg`
  fill: ${({ theme }) =>
    theme === 'dark' ? darkTheme.logo.main : lightTheme.logo.main};
  width: 22px;
  height: 22px;

  @media ${device.tablet} {
    width: 28px;
    height: 28px;
  }
`;

export const Name = styled.p`
  font-weight: 600;
  color: ${({ theme }) =>
    theme === 'dark' ? darkTheme.colors.main : lightTheme.colors.main};

  @media ${device.tablet} {
    font-size: 18px;
  }
`;
