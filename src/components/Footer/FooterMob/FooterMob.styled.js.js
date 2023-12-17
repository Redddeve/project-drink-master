import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const FooterWrap = styled.footer`
  width: 100%;
  background-color: var(--dark);
  border-top: 1px solid rgba(243, 243, 243, 0.2);
`;

export const FooterContainer = styled.div`
  max-width: 375px;
  margin: auto;
  padding: 18px 20px 40px 20px;
`;

export const FooterNavFlex = styled.div`
  display: flex;
  justify-content: space-between;

  margin-bottom: 40px;

  > nav {
    display: flex;
    flex-direction: column;
    gap: 14px;
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
  margin-bottom: 20px;

  color: var(--white);
  font-size: 16px;
  font-weight: 600;
  line-height: 1.13;
`;
export const Icon = styled.svg`
  width: 22px;
  height: 22px;
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

export const Copy = styled.div`
  margin-bottom: 8px;

  color: rgba(243, 243, 243, 0.5);
  font-size: 12px;
  line-height: 1.33;
  letter-spacing: -0.24px;
  opacity: 0.9;
`;

export const StyledLink = styled(NavLink)`
  margin-right: 14px;

  color: rgba(243, 243, 243, 0.5);
  text-align: right;
  font-size: 12px;
  line-height: 1.33;
  letter-spacing: -0.24px;
  cursor: pointer;
`;
