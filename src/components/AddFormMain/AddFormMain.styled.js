import styled from 'styled-components';
import { device } from '../../styles/device';
export const StyledFileInput = styled.input`
  display: none;
`;
export const StyledForm = styled.form`
  max-width: 850px;
`;
export const StyledFileLabel = styled.label`
  width: 335px;
  height: 320px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  background: rgba(22, 31, 55, 0.5);
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
  color: rgba(243, 243, 243, 0.5);
  display: flex;
  cursor: pointer;
  margin-bottom: 80px;
  input[type='radio']:checked + p {
    color: var(--white);
    &::before {
      content: '';
      background-color: white;
      border: 2px solid var(--transp-white);
    }
    &::after {
      content: '';
      display: flex;
      border-radius: 50%;
      top: 2.5px;
      left: 2px;
      border: 2.9px solid black;
      width: 12px;
      height: 12px;
      opacity: 1;
      position: absolute;
      z-index: 3;
    }
  }
  position: relative;

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
      border: 2px solid var(--transp-white);
      width: 17px;
      height: 17px;
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
  position: relative;
  @media ${device.tablet} {
    padding-top: 20px;
    max-height: 32px;
  }
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
  border-bottom: 1px solid var(--white);
  color: var(--transp-white);
  padding-left: 3px;
  @media ${device.tablet} {
    padding-bottom: 18px;
    width: 352px;
  }
`;
export const StyledTitleInput = styled.input`
  width: 335px;
  position: relative;
  height: 35px;
  background-color: transparent;
  outline: none;
  border: none;
  border-bottom: 1px solid var(--white);
  padding-bottom: 14px;
  margin-bottom: 31px;
  color: var(--white);
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
