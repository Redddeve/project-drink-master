import styled from 'styled-components';
import { device } from '../../../styles/device';
import { darkTheme, lightTheme } from '../../../styles/theme';

export const BurgerMenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;
`;

export const BurgerIcon = styled.div`
  stroke: ${({ theme }) =>
    theme === 'dark' ? darkTheme.colors.main : lightTheme.colors.main};
  width: 32px;
  height: 32px;

  &.scroll-locked {
    overflow: hidden;
  }

  @media ${device.tablet} {
    width: 38px;
    height: 38px;
  }

  @media ${device.desktop} {
    display: none;
  }
`;
