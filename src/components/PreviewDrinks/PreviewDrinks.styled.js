import styled from 'styled-components';
import { device } from '../../styles/device';
import { NavLink } from 'react-router-dom';

export const Title = styled.h2`
  font-size: 28px;
  font-weight: 600;
  line-height: 1.14em;
  margin-top: 40px;
  margin-bottom: 24px;

  @media ${device.tablet} {
    font-size: 40px;
    margin-top: 80px;
    margin-bottom: 40px;
  }
`;

export const OtherDrinksNavLink = styled(NavLink)`
  width: 163px;
  color: var(--black);
  background: var(--white);
  font-weight: 600;
  line-height: 1.28em;
  padding: 14px 40px;
  margin: 60px auto 0;
  border-radius: 42px;
  display: flex;
  justify-content: center;
  white-space: nowrap;

  &:hover,
  &:focus {
    box-shadow: 1px 1px 15px 3px gray;
    transition: var(--tran-fast);
  }

  @media ${device.tablet} {
    width: 183px;
    padding: 18px 44px;
    line-height: 1.12em;
    margin-top: 80px;
  }
`;
