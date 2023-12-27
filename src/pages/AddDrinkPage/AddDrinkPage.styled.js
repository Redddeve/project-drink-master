import styled from 'styled-components';
import { device } from '../../styles/device';
import { darkTheme, lightTheme } from '../../styles/theme';

export const StyledAddTitle = styled.h1`
  font-size: 32px;
  font-weight: 600;
  line-height: 38px;
  margin-bottom: 40px;
`;

export const StyledIngTitle = styled.p`
  font-size: 28px;
  font-weight: 600;
  line-height: 32px;
`;

export const StyledDescInput = styled.textarea`
  width: 335px;
  min-height: 184px;
  padding: 16px;
  margin-bottom: 20px;
  background: transparent;
  border-radius: 14px;
  border: ${({ theme }) =>
    theme === 'dark'
      ? '1px solid var(--transp-white)'
      : '1px solid var(--transp-dark)'};
  color: ${({ theme }) =>
    theme === 'dark' ? darkTheme.colors.main : lightTheme.colors.main};
  line-height: 1;
  vertical-align: top;
  resize: none;
  @media ${device.tablet} {
    width: 480px;
  }
`;

export const StyledSubmitBtn = styled.button`
  border-radius: 42px;
  background-color: ${({ theme }) =>
    theme === 'dark' ? 'var(--white)' : 'var(--black)'};
  display: inline-flex;
  padding: 14px 40px;
  align-items: flex-start;
  gap: 10px;
  color: ${({ theme }) =>
    theme === 'dark' ? lightTheme.colors.main : darkTheme.colors.main};
  font-family: inherit;
  font-size: 14px;
  font-weight: 600;
  line-height: 18px;
  transition: all var(--tran-fast);
  border: none;
  cursor: pointer;
  @media ${device.tablet} {
    display: block;
  }

  &:hover {
    box-shadow: rgba(233, 233, 233, 0.3) 0px 0px 28px,
      rgba(233, 233, 233, 0.32) 0px 6px 23px;
  }
`;

export const StyledValidText = styled.p`
  position: absolute;
  top: 40px;
  color: #ff7c31;
  font-size: 13px;
  width: 100%;
`;
export const StyledValidIng = styled(StyledValidText)`
  top: 7px;
  left: -15px;
  font-size: 26px;
  font-weight: 700;
  width: 10px;
  &::after {
    content: 'This field is required';
    display: none;
    width: 145px;
    height: 20px;
    background-color: white;
    color: black;
    font-size: 14px;
    position: absolute;
    top: 40px;
    left: 10px;
    opacity: 0;
    transition: all;
    border-radius: 6px;
    padding: 1px 4px;
  }
  &:hover {
    &::after {
      display: block;
      opacity: 1;
    }
  }
`;

export const RelativeLabel = styled.label`
  position: relative;
`;

export const StyledValidationText = styled.p`
  position: absolute;
  top: 280px;
  color: #ff7c31;
  font-size: 13px;
  width: 100%;
`;
