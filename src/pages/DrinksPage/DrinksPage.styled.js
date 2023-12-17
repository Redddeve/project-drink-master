import styled from 'styled-components';
import Select from 'react-select/base';
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

export const StyledCardsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 28px;

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

  color: white;

  &::placeholder {
    color: var(--white);
  }

  @media ${device.tablet} {
    max-width: 264px;
  }
`;

export const StyledSvg = styled.svg`
  position: absolute;
  width: 20px;
  height: 20px;
  top: 18px;
  left: 220px;
  fill: white;

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

  .Select__indicator-separator {
    display: none;
  }
`;
