import styled from 'styled-components';
import { device } from '../../styles/device.js';
import { darkTheme, lightTheme } from '../../styles/theme.js';

export const StyledFilterContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 14px;
  margin-bottom: 40px;

  @media ${device.tablet} {
    max-width: 678px;
    flex-direction: row;
    gap: 8px;
  }
`;

export const StyledInput = styled.input`
  width: 100%;
  height: 54px;
  padding: 0 24px;
  border-radius: 200px;
  border: ${({ theme }) =>
    theme === 'dark'
      ? darkTheme.borderColor.main
      : lightTheme.borderColor.main};
  color: ${({ theme }) =>
    theme === 'dark' ? darkTheme.colors.main : lightTheme.colors.main};
  opacity: 0.8;
  outline: none;
  background: transparent;
  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
    -webkit-background-clip: text;
    -webkit-text-fill-color: ${({ theme }) =>
      theme === 'dark'
        ? darkTheme.colors.main
        : lightTheme.colors.main}; // колір тексту
    -webkit-background-color: transparent !important;
    -webkit-border: ${({ theme }) =>
      theme === 'dark'
        ? darkTheme.borderColor.main
        : lightTheme.borderColor.main};
    transition: all 0s 50000s;
    transition: background-color 5000s ease-in-out 0s;
  }

  @media ${device.tablet} {
    width: 264px;
  }
`;

export const StyledSvg = styled.svg`
  position: absolute;
  width: 20px;
  height: 20px;
  top: 18px;
  left: 180px;
  cursor: pointer;
  stroke: ${({ theme }) =>
    theme === 'dark' ? darkTheme.colors.main : lightTheme.colors.main};
  fill: ${({ theme }) =>
    theme === 'dark' ? lightTheme.colors.main : darkTheme.colors.main};

  @media screen and (max-width: 767px) {
    width: 1px;
    height: 1px;
    margin: -1px;
    border: 0;
    padding: 0;

    white-space: nowrap;
    clip-path: inset(100%);
    clip: rect(0 0 0 0);
    overflow: hidden;
  }
`;
