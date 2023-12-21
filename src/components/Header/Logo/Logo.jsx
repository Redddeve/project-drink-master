import { LogoGroup, Icon, Name } from './Logo.styled';
import sprite from "../../../images/sprite.svg";
import {Link} from 'react-router-dom'

const Logo = () => {
  return (
    <Link to="/">
      <LogoGroup>
        <Icon>
          <svg width="22" height="22">
          <use href={sprite + "#icon-logo"} />
          </svg>
        </Icon>
        <Name>Drink Master</Name>
      </LogoGroup>
    </Link>
  );
};

export default Logo;
