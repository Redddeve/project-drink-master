import styled from 'styled-components';
import Select from 'react-select';
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

export const StyledSelect = styled(Select)`
  .Select__control {
    height: 54px;
    padding: 0 14px;
    width: 100%;
    border: none;
    box-shadow: none;
    cursor: pointer;
    color: var(--white);
    border-radius: 200px;
    background: var(--black);

    @media ${device.tablet} {
      width: 250px;
    }
  }

  .Select__placeholder {
    color: var(--white);
    display: flex;
    align-items: center;
    margin: 0;
  }

  .Select__indicator {
    position: absolute;
    right: 24px;
    padding: 0;

    transform: ${props => (props.$menuIsOpen ? 'rotate(180deg)' : 'none')};
    display: ${props => (props.$menuIsOpen ? 'block' : 'display')};
  }

  .Select__clear-indicator {
    position: absolute;
    right: 45px;
  }

  .Select__indicator-separator {
    display: none;
  }

  .Select__single-value {
    display: flex;
    align-items: center;
  }

  .Select__option {
    padding: 4.5px 12px;
    background: none;
    cursor: pointer;
    color: ${({ theme }) =>
      theme === 'dark' ? 'var(--transp-white)' : 'var(--transp-dark)'};
    transition: var(--tran-fast);
  }

  .Select__option:hover {
    color: ${({ theme }) =>
      theme === 'dark' ? 'var(--white)' : 'var(--dark)'};
  }

  .Select__input-container {
    color: var(--white);
  }

  .Select__menu {
    height: ${props => (props.$small ? '240px' : '314px')};
    border-radius: 20px;
    background-color: ${({ theme }) =>
      theme === 'dark' ? 'var(--light-theme-bg)' : 'var(--white)'};
    color: ${({ theme }) =>
      theme === 'dark' ? 'var(--white)' : 'var(--black)'};
    padding-right: 7px;
    overflow-y: hidden;

    @media ${device.tablet} {
      font-size: 17px;
      line-height: 1.56;
      height: ${props => (props.$small ? '295px' : '405px')};
    }

    .Select__menu-list {
      max-height: ${props => (props.$small ? '295px' : '405px')};

      &::-webkit-scrollbar {
        padding-right: 5px;
        padding-bottom: 5px;
        width: 8px;
      }

      &::-webkit-scrollbar-track {
        margin-top: 10px;
        margin-bottom: 13px;
      }

      &::-webkit-scrollbar-thumb {
        background: var(--gray);
        border-radius: 12px;
      }
    }

    .Select__option--is-selected {
      color: var(--orange);
      cursor: pointer;
    }

    /* .cqenAZ .Select__option--is-focused {
      color: ${({ theme }) =>
      theme === 'dark' ? 'var(--transp-white)' : 'var(--transp-dark)'};
    } */
  }
`;

export const stylesDrink = {
  singleValue: () => ({
    color: 'var(--white)',
  }),
  valueContainer: () => ({
    display: 'flex',
    paddingLeft: '10px',
  }),
};
