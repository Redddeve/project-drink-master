import styled from 'styled-components';
import { device } from '../../styles/device';

export const StyledAddTitle = styled.h1`
  font-size: 32px;
  font-weight: 600;
  line-height: 38px;
  margin-bottom: 40px;
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
  &::before {
    content: '+';
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
  }
  &::after {
    content: 'Add image';
    color: var(--white);
    font-size: 16px;
    font-weight: 500;
    line-height: 20px;
  }
  @media ${device.tablet} {
    min-width: 320px;
    margin-bottom: 0;
  }
  @media ${device.desktop} {
    min-width: 400px;
  }
`;
export const StyledFileInput = styled.input`
  display: none;
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
      left: 2.5px;
      border: 3.1px solid black;
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
      border: 3px solid var(--transp-white);
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

export const StyledIngTitle = styled.p`
  font-size: 28px;
  font-weight: 600;
  line-height: 32px;
`;
export const StyledIngTitleDiv = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const StyledAddDiv = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 104px;
  border-radius: 200px;
  border: 1px solid var(--transp-white);
  height: 38px;
  margin-bottom: 34px;
`;
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
  &:disabled {
    color: var(--transp-white);
  }
`;
export const StyledIngFieldInput = styled.input`
  width: 101px;
  height: 50px;
  border-radius: 200px;
  border: 1px solid var(--transp-white);
  background: transparent;
  color: var(--white);
  padding: 0 60px 0 24px;
  position: relative;

  @media ${device.tablet} {
    width: 150px;
  }
`;
export const StyledIngFieldLabel = styled.label`
  display: flex;
  margin-bottom: 18px;
  gap: 8px;
`;
export const StyledIngFieldWrapper = styled.div`
  position: relative;
`;

export const StyledIngFieldBtn = styled.button`
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
export const StyledIngDiv = styled.div`
  padding-bottom: 80px;
  @media ${device.tablet} {
    max-width: 704px;
  }
  @media ${device.desktop} {
    max-width: 540px;
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
export const StyledDescInput = styled.textarea`
  width: 335px;
  min-height: 184px;
  margin-top: 40px;
  padding: 16px;
  margin-bottom: 20px;
  background: transparent;
  border-radius: 14px;
  border: 1px solid var(--transp-white);
  color: var(--white);
  line-height: 1;
  vertical-align: top;
  @media ${device.tablet} {
    width: 480px;
  }
`;

export const StyledSubmitBtn = styled.button`
  border-radius: 42px;
  background: var(--white);
  display: inline-flex;
  padding: 14px 40px;
  align-items: flex-start;
  gap: 10px;
  color: var(--black);
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
    padding: '3px 10px',
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
    width: '131px',
    right: '0',
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
