import styled from 'styled-components';
import { device } from '../../../../styles/device';

export const EditContainer = styled.div`
  position: absolute;
  z-index: 10;
  top: 54px;
  right: -70px;
  width: 335px;
  padding: 50px 25px;
  border-radius: 8px;
  text-align: center;
  background-color: #161F37;
 
 @media ${device.tablet} {
    top: 67px;
    width: 500px;
    padding: 50px 50px 75px 50px;
    font-size: 18px; 
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 14px;
  right: 14px;
  display: flex;
  align-items: center;
  gap: 8px;
  border: none;
  outline: none;
  background-color: transparent;
  
  @media ${device.tablet} {
    gap: 14px;
  }

  &:hover,
  &:focus {
    transform: scale(1.1);
  }
`;

export const CloseIcon = styled.svg`
  width: 24px;
  height: 24px;
  stroke: #F3F3F3;
  cursor: pointer;
  justify-content: center;
  align-items: center;
`;

export const IconContainer = styled.div`
  position: relative;
  margin-bottom: 39px;

  @media ${device.tablet} {
    margin-bottom: 66px;
  }
`;

export const UserLargeIcon = styled.img`
  display: block;
  width: 80px;
  height: 80px;
  object-fit: cover;
  margin: 0 auto;
  border-radius: 50%;

  @media ${device.tablet} {
    width: 100px;
    height: 100px;
  }
`;

export const FileInput = styled.input`
  display: none;
`;

export const PlusIcon = styled.svg`
  position: absolute;
  bottom: -15%;
  left: 46%;
  width: 28px;
  height: 28px;
  stroke: #F3F3F3;;
  background-color: #546081;
  border-radius: 50%;
  


  &:hover,
  &:focus {
    transform: scale(1.1);
  }

  @media ${device.tablet} {
    width: 32px;
    height: 32px;
  }
`;

export const InputContainer = styled.label`
  position: relative;
`;

export const Input = styled.input`
  width: 285px;
  margin-bottom: 18px;
  padding: 18px 24px;
  border: 1px solid rgba(243, 243, 243, 0.2);
  border-radius: 200px;
  outline: none;
  opacity: 0.8;
  color: #F3F3F3;
  background-color: transparent;

  @media ${device.tablet} {
    width: 400px;
    padding: 18px 68px 18px 24px;
    margin-bottom: 25px;
    font-size: 17px;
  }

  &:hover,
  &:focus {
    border: 1px solid rgba(243, 243, 243, 0.5);
  }
`;

export const InputPenIcon = styled.svg`
  position: absolute;
  top: 5px;
  right: 24px;
  display: none;
  width: 20px;
  height: 20px;
  stroke: #F3F3F3;
  cursor: pointer;

  @media ${device.tablet} {
    display: block;
  }
`;

export const SaveBtn = styled.button`
  width: 285px;
  margin-bottom: 18px;
  padding: 18px 24px;
  border-radius: 42px;
  outline: none;
  color: #161F37;
  background-color: #F3F3F3;
  cursor: pointer;

  @media ${device.tablet} {
    width: 400px;
    padding: 18px 68px 18px 24px;
    margin-bottom: 25px;
    font-size: 17px;
  }

  &:hover,
  &:focus {
    border: 1px solid rgba(243, 243, 243, 0.5);
  }
  `;