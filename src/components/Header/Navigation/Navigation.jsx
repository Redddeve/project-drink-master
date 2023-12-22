import React from 'react';
import { NavLink } from 'react-router-dom';
import { Nav, List, Item } from './Navigation.styled.js';
import { useSelector } from 'react-redux';

const Navigation = React.forwardRef(
  // eslint-disable-next-line no-unused-vars
  (props, ref) => {
    const theme = useSelector(state => state.theme.theme);
    return (
      <Nav theme={theme}>
        <List id="navigation">
          <Item>
            <NavLink to="/" className="link" activeclassname="active">
              Home
            </NavLink>
          </Item>
          <Item>
            <NavLink to="/drinks" className="link" activeclassname="active">
              Drinks
            </NavLink>
          </Item>
          <Item>
            <NavLink to="/add" className="link" activeclassname="active">
              Add drink
            </NavLink>
          </Item>
          <Item>
            <NavLink to="/my" className="link" activeclassname="active">
              My drinks
            </NavLink>
          </Item>
          <Item>
            <NavLink to="/favorites" className="link" activeclassname="active">
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
