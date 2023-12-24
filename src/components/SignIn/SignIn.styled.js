import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { device } from '../../styles/device';

export const StyledWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  margin: 0 auto;

  @media ${device.tablet} {
    align-items: start;
    margin-left: 64px;
  }

  @media ${device.desktop} {
    margin-left: 100px;
  }
`;

export const StyledFormWrap = styled.form`
  display: flex;

  max-width: 335px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media ${device.tablet} {
    max-width: 400px;
  }
`;

export const StyledHead = styled.h2`
  align-self: flex-start;
  font-size: 28px;
  font-style: normal;
  font-weight: 600;
  line-height: 32px; /* 114.286% */
  letter-spacing: -0.56px;
  margin-bottom: 28px;
  @media ${device.tablet} {
    font-size: 40px;
    line-height: 44px; /* 110% */
    letter-spacing: -0.8px;
  }
`;
export const StyledInputWrap = styled.div`
  position: relative;
  margin-bottom: 14px;
  &:last-of-type {
    margin-bottom: 28px;
  }
`;

export const StyledInput = styled.input`
  z-index: 10;
  width: 335px;
  height: 54px;
  flex-shrink: 0;
  border-radius: 200px;
  border: 1px solid rgba(243, 243, 243, 0.2);
  background-color: transparent;

  color: var(--white);

  outline: none;
  padding: 18px 24px;
  padding-right: 44px;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px; /* 128.571% */

  &::placeholder {
    color: rgba(243, 243, 243, 0.5);
  }
  &:focus {
    border: 1px solid rgba(243, 243, 243, 0.5);
    color: #f3f3f3;
    &::placeholder {
      color: #f3f3f3;
    }
  }

  &.error {
    border: 1px solid var(--error-red);
  }

  &.correct {
    border: 1px solid var(--correct-green);
  }
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
    width: 400px;
    height: 56px;
    font-size: 16px;
  }
`;

export const StyledStatus = styled.svg`
  z-index: 1;
  position: absolute;
  width: 24px;
  height: 24px;
  right: 14px;
  top: 14px;
  fill: none;
  &.error {
    /* stroke: var(--error-red); */
    fill: var(--error-red);
  }

  &.correct {
    /* stroke: var(--correct-green); */
    fill: var(--correct-green);
  }
`;

export const StyledEye = styled.svg`
  position: absolute;
  cursor: pointer;
  width: 24px;
  height: 24px;
  right: 14px;
  top: 14px;
  fill: none;
  stroke: var(--white);
`;

export const StyledMessage = styled.p`
  position: absolute;
  top: 54px;
  left: 24px;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 14px; /* 116.667% */
  user-select: none;
  &.error {
    color: var(--error-red);
  }
  &.correct {
    color: var(--correct-green);
  }
`;

export const StyledSignInBtn = styled.button`
  display: flex;
  padding: 18px 141px;
  align-items: center;
  border-radius: 42px;
  background: #f3f3f3;
  color: #161f37;
  border: 1px solid rgba(243, 243, 243, 0.2);

  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 18px; /* 128.571% */
  transition: var(--tran-fast);
  margin-bottom: 14px;

  &:hover {
    cursor: pointer;
    background: transparent;
    border: 1px solid rgba(243, 243, 243, 0.2);
    color: #f3f3f3;
  }
  &:disabled {
    cursor: not-allowed;
  }
  @media ${device.tablet} {
    width: 400px;
    font-size: 16px;
    padding: 18px 170px;
  }
`;

export const StyledLink = styled(Link)`
  color: #f3f3f3;

  font-family: Manrope;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: 16px; /* 133.333% */
  text-decoration-line: underline;
  &:hover {
    //hover
  }
  @media ${device.tablet} {
    font-size: 14px;
    line-height: 18px; /* 128.571% */
  }
`;
