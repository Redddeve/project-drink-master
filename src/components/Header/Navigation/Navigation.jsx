import React from 'react';
import { NavLink } from 'react-router-dom';
import { Nav, List, Item, Circle } from './Navigation.styled.js';
import { useSelector } from 'react-redux';
const Navigation = React.forwardRef(
  // eslint-disable-next-line no-unused-vars
  (props, ref) => {
    const theme = useSelector(state => state.theme.theme);
    return (
      <Nav theme={theme}>
        <Circle></Circle>
        <List id="navigation" theme={theme}>
          <Item>
            <NavLink
              aria-label="To Home page"
              to="/"
              className="link"
              activeclassname="active"
            >
              Home
            </NavLink>
          </Item>
          <Item>
            <NavLink
              aria-label="To Drinks page"
              to="/drinks"
              className="link"
              activeclassname="active"
            >
              Drinks
            </NavLink>
          </Item>
          <Item>
            <NavLink
              aria-label="To Add drink page"
              to="/add"
              className="link"
              activeclassname="active"
            >
              Add drink
            </NavLink>
          </Item>
          <Item>
            <NavLink
              aria-label="To My drinks page"
              to="/my"
              className="link"
              activeclassname="active"
            >
              My drinks
            </NavLink>
          </Item>
          <Item>
            <NavLink
              aria-label="To Favorites page"
              to="/favorites"
              className="link"
              activeclassname="active"
            >
              Favorites
            </NavLink>
          </Item>
        </List>
      </Nav>
    );
  }
);

Navigation.displayName = 'Navigation';

export default Navigation;
