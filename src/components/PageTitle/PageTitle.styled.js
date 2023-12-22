import styled from 'styled-components';
import { device } from '../../styles/device';
import { darkTheme, lightTheme } from '../../styles/theme';

export const StyledPageTitle = styled.h1`
  font-size: 32px;
  font-weight: 600;
  line-height: 38px;
  margin-bottom: ${props => props.$mbMobile || '40'}px;
  color: ${({ theme }) =>
    theme === 'dark' ? darkTheme.colors.main : lightTheme.colors.main};

  @media ${device.tablet} {
    font-size: 56px;
    line-height: 60px;
    margin-bottom: ${props => props.$mbTablet || '60'}px;
    color: ${({ theme }) =>
      theme === 'dark' ? darkTheme.colors.main : lightTheme.colors.main};
  }

  @media ${device.desktop} {
    font-size: 64px;
    line-height: 68px;
    margin-bottom: ${props => props.$mbDesktop || '60'}px;
    color: ${({ theme }) =>
      theme === 'dark' ? darkTheme.colors.main : lightTheme.colors.main};
  }
`;
