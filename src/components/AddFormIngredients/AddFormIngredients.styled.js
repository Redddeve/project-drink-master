// StyledAddBtn,
//   StyledAddDiv,
//   StyledIngDiv,
//   StyledIngFieldBtn,
//   StyledIngFieldInput,
//   StyledIngFieldLabel,
//   StyledIngFieldWrapper,
//   StyledIngTitle,
//   StyledIngTitleDiv,
import styled from 'styled-components';
import { device } from '../../styles/device';
import { darkTheme, lightTheme } from '../../styles/theme';
export const StyledAddBtn = styled.button`
  background-color: transparent;
  border: none;
  width: 16px;
  height: 16px;
  font-size: 30px;
  line-height: 0;
  padding: 0;
  justify-content: center;
  align-items: center;
  color: inherit;
  font-family: inherit;
  cursor: pointer;
  color: ${({ theme }) =>
    theme === 'dark' ? darkTheme.colors.main : lightTheme.colors.main};
  &:disabled {
    color: ${({ theme }) =>
      theme === 'dark' ? 'var(--transp-white)' : 'var(--transp-dark)'};
  }
`;
export const StyledIngDiv = styled.div`
  padding-bottom: 80px;
  @media ${device.tablet} {
    max-width: 704px;
  }
  @media ${device.desktop} {
    max-width: 540px;
  }
`;

export const StyledIngredientsText = styled.p`
  color: ${({ theme }) =>
    theme === 'dark' ? darkTheme.colors.main : lightTheme.colors.main};
`;

export const StyledAddDiv = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 104px;
  border-radius: 200px;
  border: ${({ theme }) =>
    theme === 'dark'
      ? darkTheme.borderColor.main
      : lightTheme.borderColor.main};
  height: 38px;
  margin-bottom: 34px;
`;
export const StyledIngFieldBtn = styled.button`
  position: relative;
  z-index: 1;
  background: transparent;
  border: none;
  padding: 0;
  cursor: pointer;
  *:hover > svg {
    stroke: aqua;
  }
  @media ${device.tablet} {
    margin-left: 188px;
  }
  @media ${device.desktop} {
    margin-left: 20px;
  }
`;
export const StyledIngFieldInput = styled.input`
  width: 101px;
  height: 50px;
  border-radius: 200px;
  border: ${({ theme }) =>
    theme === 'dark' ? '1px solid var(--white)' : '1px solid var(--dark)'};
  background: transparent;
  color: ${({ theme }) => (theme === 'dark' ? 'var(--white)' : 'var(--dark)')};
  padding: 0 60px 0 24px;
  position: relative;
  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
    -webkit-background-clip: text;
    -webkit-text-fill-color: var(--white); // колір тексту
    -webkit-background-color: transparent !important;
    -webkit-border: 1px solid rgba(243, 243, 243, 0.2);
    transition: all 0s 50000s;
    transition: background-color 5000s ease-in-out 0s;
  }
  @media ${device.tablet} {
    width: 150px;
  }
`;
export const StyledIngFieldLabel = styled.label`
  display: flex;
  margin-bottom: 18px;
  gap: 14px;
`;
export const StyledIngFieldWrapper = styled.div`
  position: relative;
`;

export const StyledIngTitleDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`;

export const StyledIngTitle = styled.h3`
  font-size: 28px;
  font-weight: 600;
  line-height: 1.38em;
  margin-bottom: 40px;
  color: ${({ theme }) =>
    theme === 'dark' ? darkTheme.colors.main : lightTheme.colors.main};

  @media ${device.tablet} {
    font-size: 40px;
    line-height: 1.38em;
  }
`;

export const StyledIconCross = styled.svg`
  stroke: ${({ theme }) => (theme === 'dark' ? 'var(--white)' : 'var(--dark)')};
`;

export const StyledIngSelectLabel = styled.label`
  width: 200px;
  position: relative;
  height: 35px;
  display: flex;
  justify-content: space-between;
  padding-left: 3px;
  color: ${({ theme }) =>
    theme === 'dark' ? darkTheme.colors.transp : lightTheme.colors.transp};
  @media ${device.tablet} {
    padding-bottom: 18px;
    width: 352px;
    height: 50px;
    border-radius: 200px;
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

  .css-1df1nbw-menu {
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
