import styled from "styled-components";
import Select from "react-select/base";
import { device } from "../../styles/device.js";

export const StyledHeader = styled.h2`
  margin-bottom: 40px;
  color: #f3f3f3;
  font-size: 32px;
  font-weight: 600;
  line-height: 1.19;

  @media screen and ${device.tablet} {
    margin-bottom: 60px;
    font-size: 56px;
    font-weight: 600;
    line-height: 1.07;
  }

  @media screen and ${device.laptopL} {
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

  @media screen and ${device.tablet} {
    max-width: 678px;
    flex-direction: row;
    gap: 8px;
  }

  @media screen and ${device.laptopL} {
  }
`;

export const StyledCardsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 28px;

  @media screen and ${device.tablet} {
    flex-direction: row;
    flex-wrap: wrap;
    gap: 20px;
    row-gap: 40px;
  }

  @media screen and ${device.laptopL} {
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

  ::placeholder {
    color: white;
  }

  @media screen and ${device.tablet} {
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
    color: #f3f3f3;
    border-radius: 200px;
    background: #161f37;

    @media screen and ${device.tablet} {
      width: 199px;
    }
  }

  .Select__placeholder {
    color: #f3f3f3;
  }

  .Select__indicator-separator {
    display: none;
  }
`;
