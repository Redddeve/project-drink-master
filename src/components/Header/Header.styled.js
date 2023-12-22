import styled from 'styled-components';
import { device } from '../../styles/device';
import { darkTheme, lightTheme } from '../../styles/theme';

export const HeaderWrapper = styled.header`
  border-bottom: ${({ theme }) =>
    theme === 'dark'
      ? darkTheme.borderColor.main
      : lightTheme.borderColor.main};
`;

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;

  @media ${device.tablet} {
    padding: 20px 32px;
  }

  @media ${device.desktop} {
    justify-content: space-between;
    padding: 20px;
    margin-left: auto;
    margin-right: auto;
  }
`;
