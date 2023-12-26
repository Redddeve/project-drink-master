import styled from 'styled-components';
import { device } from '../../../styles/device';



export const UserGroup = styled.div`
  position: relative;
  margin-right: 14px;

  @media ${device.tablet} {
    margin-right: 24px;
  }

  @media ${device.desktop}  {
    margin-right: 0;
  }
`;

export const UserButton = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  border: none;
  outline: none;
  background-color: transparent;
  cursor: pointer;

  @media ${device.desktop}  {
    gap: 14px;
  }

`;

export const UserIcon = styled.img`
  border-radius: 50%;
  width: 32px;
  height: 32px;

  @media ${device.tablet} {
    width: 44px;
    height: 44px;
  }
`;

export const UserName = styled.span`
  font-size: 14px;
  color: var(--white);

  @media ${device.tablet} {
    font-size: 16px;
  }
`;