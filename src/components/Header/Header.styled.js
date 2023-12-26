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
  display: grid;
  grid-template-columns: 1fr auto auto;
  align-items: center;
  padding: 20px;

  //====== circle ==============
  &::before {
    content: '';
    display: block;
    position: absolute;
    z-index: 0;
    top: 100px;
    left: -400px;
    width: 520px;
    height: 550px;
    border-radius: 550px;

    filter: blur(104.8543701171875px);
    background: ${({ theme }) =>
      theme === 'dark' ? 'rgba(64, 112, 205, 0.5)' : 'rgba(64, 112, 205, 0.1)'};
  }
  @media ${device.tablet} {
    &::before {
      left: -625px;
      width: 784px;
      height: 830px;
      border-radius: 830px;
    }
  }
  @media ${device.desktop} {
    padding-right: 100px;
    padding-left: 100px;
    grid-template-columns: 1.2fr 2fr auto auto;
    &::before {
      top: 20px;
      left: -685px;
      height: 849px;
      border-radius: 849px;
    }
  }
  //================================

  @media ${device.tablet} {
    padding: 20px 32px;
  }

  @media ${device.desktop} {
    justify-content: space-between;
    padding: 20px 100px;
    margin-left: auto;
    margin-right: auto;
  }
`;
