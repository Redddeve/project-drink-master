import styled from 'styled-components';
import Select from 'react-select';
import { device } from '../../styles/device.js';

export const StyledHeader = styled.h2`
  margin-bottom: 40px;
  color: var(--white);
  font-size: 32px;
  font-weight: 600;
  line-height: 1.19;

  @media ${device.tablet} {
    margin-bottom: 60px;
    font-size: 56px;
    font-weight: 600;
    line-height: 1.07;
  }

  @media ${device.desktop} {
    margin-bottom: 80px;
    font-size: 64px;
  }
`;

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

export const StyledCardsContainer = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 28px;
  list-style: none;

  @media ${device.tablet} {
    flex-direction: row;
    flex-wrap: wrap;
    gap: 20px;
    row-gap: 40px;
  }

  @media ${device.desktop} {
    row-gap: 80px;
  }
`;

export const StyledInput = styled.input`
  width: 100%;
  height: 54px;
  padding: 0 24px;
  border-radius: 200px;
  border: 1px solid rgba(243, 243, 243, 0.2);
  opacity: 0.8;
  outline: none;
  background: transparent;
  color: var(--white);

  @media ${device.tablet} {
    width: 264px;
  }
`;

export const StyledSvg = styled.svg`
  position: absolute;
  width: 20px;
  height: 20px;
  top: 18px;
  left: 220px;
  stroke: white;

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
      width: 199px;
    }
  }

  .Select__placeholder {
    color: var(--white);
  }

  .Select__indicator {
    position: absolute;
    right: 24px;
    padding: 0;

    transform: ${props => (props.$menuIsOpen ? 'rotate(180deg)' : 'none')};
    display: ${props => (props.$menuIsOpen ? 'block' : 'display')};
  }

  .Select__indicator-separator {
    display: none;
  }

  .Select__option {
    background: none;
    cursor: pointer;
    color: rgba(243, 243, 243, 0.4);
    transition: var(--tran-fast);
  }

  .Select__option--is-focused {
    color: var(--white);
  }

  .Select__menu {
    height: ${props => (props.$small ? '240px' : '314px')};
    border-radius: 20px;
    background: var(--black);
    padding-top: 9px;
    padding-right: 7px;
    overflow-y: hidden;

    @media ${device.tablet} {
      font-size: 17px;
      line-height: 1.56;
      height: ${props => (props.$small ? '295px' : '405px')};
    }

    .Select__menu-list {
      &::-webkit-scrollbar {
        width: 8px;
      }

      &::-webkit-scrollbar-thumb {
        background: var(--gray);
        border-radius: 12px;
      }
    }

    .Select__value-container--has-value {
      color: var(--white);
    }

    .Select__option--is-selected {
      color: var(--orange);
      cursor: pointer;
    }
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
