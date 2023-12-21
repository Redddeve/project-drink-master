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
  margin-top: 40px;
  padding: 16px;
  margin-bottom: 20px;
  background: transparent;
  border-radius: 14px;
  border: 1px solid var(--transp-white);
  color: ${({ theme }) =>
    theme === 'dark' ? lightTheme.colors.main : darkTheme.colors.main};
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
    theme === 'dark' ? darkTheme.background.main : lightTheme.background.main};
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
  @media ${device.tablet} {
    display: block;
  }

  &:hover {
    box-shadow: rgba(233, 233, 233, 0.3) 0px 0px 28px,
      rgba(233, 233, 233, 0.32) 0px 6px 23px;
  }
`;
export const stylesSelect = {
  control: baseStyles => ({
    ...baseStyles,
    width: 200,
    height: 50,
    color: 'var(--white)',
    border: 'none',
    textAlign: 'right',
    background: 'transparent',
  }),
  option: (styles, state) => ({
    ...styles,
    padding: '4px 14px',
    fontSize: '12px',
    backgroundColor: state.isSelected ? 'rgba(255, 255, 255, 0.10)' : '',
    color: state.isSelected ? 'var(--white)' : 'var(--transp-white)',
    ':hover': {
      background: 'rgba(255, 255, 255, 0.10)',
      color: '#F3F3F3',
    },
  }),
  menu: baseStyles => ({
    ...baseStyles,
    background: '#161F37',
    border: 'none ',
    borderRadius: '12px ',
    maxHeight: '300px',
    width: '151px',
    right: '0',
  }),
  menuList: base => ({
    ...base,

    '::-webkit-scrollbar': {
      width: '2px',
      height: '0px',
    },
    '::-webkit-scrollbar-track': {
      background: '#161F37',
    },
    '::-webkit-scrollbar-thumb': {
      background: '#5d6b90',
    },
  }),
};
export const ingStyles = {
  ...stylesSelect,
  control: baseStyles => ({
    ...baseStyles,
    width: 200,
    height: 50,
    color: 'var(--white)',
    border: 'border: 1px solid rgba(243, 243, 243, 0.30)',
    borderRadius: '200px',
    textAlign: 'left',
    background: 'transparent',
    '@media only screen and (min-width:768px)': {
      ...stylesSelect['@media only screen and (min-width: 768px)'],
      width: 332,
    },
  }),
  menu: baseStyles => ({
    ...baseStyles,
    background: '#161F37',
    border: 'none ',
    borderRadius: '12px ',
    maxHeight: '300px',
    width: '100%',
    left: '0',
  }),
};

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
