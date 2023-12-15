import styled from 'styled-components';


export const Nav = styled.nav`
  position: absolute;
  z-index: 10;
  top: 77px;
  bottom: 0;
  left: 0;
  right: 0;
  display: grid;
  background-color: $backgroundColor;

  @media (min-width: 768px) {
    top: 84px;
  }

  @media (min-width: 1200px) {
    position: static;
    display: block;
  }

  & a {
    padding: 8px 16px;
    border: 1px solid rgba(243, 243, 243, 0.2);
    border-radius: 40px;
  }

  & [class="active"] {
    padding: 8px 16px;
    background-color: rgba(243, 243, 243, 0.2);
  }
`;

export const List = styled.ul`
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  margin: 20% auto 0 auto;

  @media (min-width: 1200px) {
    display: flex;
    flex-direction: row;
    margin: 0;
  }
`;

export const Item = styled.li`
  display: flex;
  border: 1px solid rgba(243, 243, 243, 0.2);
  border-radius: 40px;
  font-size: 14px;
  font-weight: 500;

  transition-property: transform;
  transition: $trans-fast;

  &:hover,
  &:focus {
    transform: scale(1.1);
  }
`;


