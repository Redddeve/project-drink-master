import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { device } from '../../styles/device';

export const StyledWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 40px;
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

export const StyledTextWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 14px;
  @media ${device.tablet} {
    align-items: start;
  }
`;

export const StyledHead = styled.h2`
  text-align: center;
  font-size: 28px;
  font-style: normal;
  font-weight: 600;
  line-height: 32px; /* 114.286% */
  letter-spacing: -0.56px;

  @media ${device.tablet} {
    text-align: start;
    max-width: 393px;

    font-size: 40px;
    font-weight: 600;
    line-height: 44px; /* 110% */
    letter-spacing: -0.8px;
  }
`;

export const StyledText = styled.p`
  max-width: 319px;
  text-align: center;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px; /* 128.571% */
  letter-spacing: -0.28px;
  @media ${device.tablet} {
    text-align: start;
    max-width: 470px;
    font-size: 18px;
    font-weight: 400;
    line-height: 24px; /* 133.333% */
    letter-spacing: -0.36px;
  }
`;

export const StyledBtnWrap = styled.div`
  display: flex;
  gap: 14px;
  @media ${device.tablet} {
  }
`;

export const StyledBtnSignUp = styled(NavLink)`
  display: flex;
  padding: 14px 40px;
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

  &:hover {
    cursor: pointer;
    background: transparent;
    border: 1px solid rgba(243, 243, 243, 0.2);
    color: #f3f3f3;
  }

  @media ${device.tablet} {
    font-size: 16px;
    padding: 18px 44px;
  }
`;

export const StyledBtnSignIn = styled(NavLink)`
  display: flex;
  padding: 14px 40px;
  align-items: center;
  border-radius: 42px;
  border: 1px solid rgba(243, 243, 243, 0.2);
  background: transparent;

  color: #f3f3f3;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 18px; /* 128.571% */
  transition: var(--tran-fast);

  &:hover {
    cursor: pointer;
    background: #f3f3f3;
    /* border: 1px solid rgba(243, 243, 243, 0.2); */
    color: #161f37;
  }
  @media ${device.tablet} {
    font-size: 16px;
    padding: 18px 44px;
  }
`;
