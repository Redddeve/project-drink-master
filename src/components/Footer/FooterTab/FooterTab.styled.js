import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const FooterWrap = styled.footer`
  width: 100%;
  background-color: var(--dark);
  border-top: 1px solid rgba(243, 243, 243, 0.2);
`;

export const FooterContainer = styled.div`
  max-width: 768px;
  margin: auto;
  padding: 80px 32px 24px 32px;
  > div {
    display: flex;
    justify-content: space-between;
  }
`;

export const FooterNavFlex = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;

  margin-bottom: 80px;

  > nav {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
`;

export const LogoFlex = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledLogoLink = styled.a`
  display: flex;
  gap: 14px;
  align-items: center;
  margin-bottom: 28px;

  color: var(--white);
  font-size: 18px;
  font-weight: 600;
  line-height: 1.122;
`;
export const Icon = styled.svg`
  width: 28px;
  height: 28px;
  fill: var(--white);
  stroke: var(--white);
`;

export const StyledNavLink = styled(NavLink)`
  color: var(--white);
  font-weight: 500;
  line-height: 1.6;

  cursor: pointer;
  transition: color var(--tran-fast);

  &:hover {
    color: var(--active-blue);
  }
  &:focus {
    color: var(--active-blue);
  }
  &.active {
    color: var(--active-blue);
  }
`;

export const Copy = styled.p`
  display: inline;
  margin-right: 153px;

  color: rgba(243, 243, 243, 0.5);
  font-size: 14px;
  line-height: 1.28;
  letter-spacing: -0.28px;
  opacity: 0.9;
`;

export const StyledLink = styled(NavLink)`
  margin-right: 14px;

  color: rgba(243, 243, 243, 0.5);
  text-align: right;
  font-size: 14px;
  line-height: 1.28;
  letter-spacing: -0.28px;
  cursor: pointer;
`;
