import styled from 'styled-components';
import { device } from '../../../styles/device';

export const LogoGroup = styled.div`
  display: flex;
  gap: 8px;
  margin-right: auto;


  &:hover,
  &:focus {
    cursor:pointer;
  }

  @media ${device.tablet} {
    gap: 14px;
  }

  @media ${device.desktop} {
    margin-right: 0;
  }
`;

export const Icon = styled.svg`
  fill: #F3F3F3;
  width: 22px;
  height: 22px;

  @media ${device.tablet} {
    width: 28px;
    height: 28px;
  }
`;

export const Name = styled.p`
  font-weight: 600;

  @media ${device.tablet} {
    font-size: 18px;
  }
`;
