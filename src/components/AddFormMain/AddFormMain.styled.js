import styled from 'styled-components';
import { device } from '../../styles/device';
import { darkTheme, lightTheme } from '../../styles/theme';
export const StyledFileInput = styled.input`
  display: none;
`;
export const StyledForm = styled.form`
  max-width: 850px;
`;
export const StyledFileLabel = styled.label`
  position: relative;
  z-index: 1;

  width: 335px;
  height: 320px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  background-color: ${({ theme }) =>
    theme === 'dark'
      ? darkTheme.background.darkBg
      : lightTheme.background.lightBg};
  margin-bottom: 40px;
  background-repeat: no-repeat;
  background-size: cover;
  @media ${device.tablet} {
    min-width: 320px;
    margin-bottom: 0;
  }
  @media ${device.desktop} {
    min-width: 400px;
  }
`;
export const StyledInfoDiv = styled.div`
  @media ${device.tablet} {
    display: flex;
    gap: 32px;
    padding-bottom: 80px;
    max-width: 833px;
  }
`;

export const StyledRadioLabel = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin-bottom: 80px;
  input[type='radio']:checked + p {
    color: ${({ theme }) =>
      theme === 'dark' ? darkTheme.colors.main : lightTheme.colors.main};
    &::before {
      content: '';
      background-color: white;
      border: ${({ theme }) =>
        theme === 'dark'
          ? '1px solid var(--transp-white)'
          : '1px solid var(--black)'};
    }
    &::after {
      content: '';
      display: flex;
      border-radius: 50%;
      top: 3px;
      left: 3px;
      /* border: 2.9px solid black; */
      border: ${({ theme }) =>
        theme === 'dark' ? '1px solid var(--black)' : '2px solid var(--black)'};
      width: 12px;
      height: 12px;
      opacity: 1;
      position: absolute;
      z-index: 3;
      /* background-color: black; */
      background-color: ${({ theme }) =>
        theme === 'dark' ? 'var(--white)' : 'var(--black)'};
    }
  }
  position: relative;
  :hover {
    text-shadow: 0px 0px 12px white;
    transition: var(--tran-fast);
  }

  input[type='radio'] {
    opacity: 0;
  }
  input[type='radio'] + p {
    padding-left: 15px;
    &::before {
      content: '';
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 50%;
      border: unset;
      border: ${({ theme }) =>
        theme === 'dark'
          ? '2px solid var(--transp-white)'
          : '2px solid var(--transp-dark)'};
      width: 18px;
      height: 18px;
      opacity: 1;
      position: absolute;
      z-index: 2;
      top: 0;
      left: 0;
    }
  }
`;
export const StyledRadioLabelDiv = styled.label`
  display: flex;
  gap: 30px;
  align-items: center;
  position: relative;

  @media ${device.tablet} {
    padding-top: 80px;
    max-height: 32px;
  }
  @media ${device.desktop} {
    padding-top: 50px;
  }
`;

export const StyledInputSelectText = styled.p`
  color: ${({ theme }) =>
    theme === 'dark' ? darkTheme.colors.transp : lightTheme.colors.transp};
`;

export const StyledSelectLabel = styled.label`
  width: 335px;
  position: relative;
  height: 35px;
  align-items: center;
  padding-bottom: 14px;
  display: flex;
  margin-bottom: 31px;
  justify-content: space-between;
  border-bottom: ${({ theme }) =>
    theme === 'dark' ? '1px solid var(--white)' : '1px solid var(--dark)'};
  color: ${({ theme }) =>
    theme === 'dark' ? darkTheme.colors.transp : lightTheme.colors.transp};
  padding-left: 3px;
  @media ${device.tablet} {
    padding-bottom: 18px;
    width: 352px;
  }

  .css-1rh15wy-option:hover {
    color: ${({ theme }) =>
      theme === 'dark' ? 'var(--white)' : 'var(--dark)'};
    cursor: pointer;
  }

  .css-1diu2n5-indicatorContainer {
    color: ${({ theme }) =>
      theme === 'dark' ? 'var(--white)' : 'var(--dark)'};
  }

  .css-1u9des2-indicatorSeparator {
    background-color: ${({ theme }) =>
      theme === 'dark' ? 'var(--dark)' : 'var(--white)'};
  }

  .css-1dimb5e-singleValue {
    color: ${({ theme }) =>
      theme === 'dark' ? 'var(--white)' : 'var(--black)'};
  }

  .css-tj5bde-Svg {
    fill: ${({ theme }) =>
      theme === 'dark' ? 'var(--white)' : 'var(--black)'};
  }

  .css-14re6nr-menu {
    background-color: ${({ theme }) =>
      theme === 'dark' ? 'var(--light-theme-bg)' : 'var(--white)'};
  }

  .css-1rh15wy-option {
    color: ${({ theme }) =>
      theme === 'dark' ? 'var(--transp-white)' : 'var(--transp-dark)'};
  }

  .css-1y6kdfa-option {
    color: ${({ theme }) =>
      theme === 'dark' ? 'var(--white)' : 'var(--dark)'};
  }

  .css-1y6kdfa-option {
    background-color: none;
  }
`;
export const StyledTitleInput = styled.input`
  width: 335px;
  position: relative;
  height: 35px;
  background-color: transparent;
  outline: none;
  border: none;
  border-bottom: ${({ theme }) =>
    theme === 'dark' ? '1px solid var(--white)' : '1px solid var(--dark)'};
  padding-bottom: 14px;
  margin-bottom: 31px;
  color: ${({ theme }) =>
    theme === 'dark' ? darkTheme.colors.main : lightTheme.colors.main};
  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
    -webkit-background-clip: text;
    -webkit-text-fill-color: ${({ theme }) =>
      theme === 'dark' ? darkTheme.colors.main : lightTheme.colors.main};
    -webkit-background-color: transparent !important;
    -webkit-border-bottom: ${({ theme }) =>
      theme === 'dark' ? '1px solid var(--white)' : '1px solid var(--dark)'};
    transition: all 0s 50000s;
    transition: background-color 5000s ease-in-out 0s;
  }
  &::placeholder {
    color: ${({ theme }) =>
      theme === 'dark' ? darkTheme.colors.transp : lightTheme.colors.transp};
  }
  @media ${device.tablet} {
    padding-bottom: 18px;
    width: 352px;
  }
`;
export const StyledFileDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const StyledFileTextPlus = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  border-radius: 6px;
  background: var(--white);
  font-size: 45px;
  color: black;
  padding: 11px;
  margin-bottom: 18px;
`;
export const StyledFileTextAdd = styled.p`
  color: var(--white);
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
`;

export const StyledRadioTest = styled.p`
  color: ${({ theme }) =>
    theme === 'dark' ? darkTheme.colors.transp : lightTheme.colors.transp};
`;
