import { NavLink } from 'react-router-dom';
import { LogoGroup, Icon, Name } from './Logo.styled';
import icons from '';

const Logo = () => {
  return (
    <NavLink to="/">
      <LogoGroup>
        <Icon>
          <use href={`${icons}#logo`}></use>
        </Icon>
        <Name>Drink Master</Name>
      </LogoGroup>
    </NavLink>
  );
};

export default Logo;
