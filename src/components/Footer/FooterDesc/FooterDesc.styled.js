import styled from 'styled-components';
import { NavLink, Link } from 'react-router-dom';

export const FooterWrap = styled.footer`
  width: 100%;
  background-color: var(--dark);
  border-top: 1px solid rgba(243, 243, 243, 0.2);
  overflow: hidden;
`;

export const FooterContainer = styled.div`
  max-width: 1440px;
  margin: auto;
  padding: 80px 100px 24px 100px;
  > div {
    display: flex;
    justify-content: space-between;
    > nav {
      display: flex;
      flex-direction: column;
      gap: 24px;
    }
  }
`;

export const FooterNavFlex = styled.div`
  display: flex;
  justify-content: space-between;

  > div {
    width: 309px;
  }
`;

export const LogoFlex = styled.div`
  display: flex;
  flex-direction: column;
`;
export const StyledLogoLink = styled(Link)`
  display: flex;
  gap: 14px;
  align-items: center;
  margin-bottom: 40px;

  color: var(--white);
  font-size: 18px;
  font-weight: 600;
  line-height: 1.22;
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
