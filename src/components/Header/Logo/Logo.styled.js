import styled from 'styled-components';

export const LogoGroup = styled.div`
  display: flex;
  gap: 8px;
  margin-right: auto;


  &:hover,
  &:focus {
    cursor:pointer;
  }

  @media screen and (min-width: 768px) {
    gap: 14px;
  }

  @media screen and (min-width: 1440px) {
    margin-right: 0;
  }
`;

export const Icon = styled.svg`
  fill: #F3F3F3;
  width: 22px;
  height: 22px;

  @media screen and (min-width: 768px) {
    width: 28px;
    height: 28px;
  }
`;

export const Name = styled.p`
  font-weight: 600;

  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
`;
