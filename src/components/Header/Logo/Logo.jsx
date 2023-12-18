import { LogoGroup, Icon, Name } from './Logo.styled';
import sprite from "../../../images/sprite.svg";

const Logo = () => {
  return (
    <a href="/">
      <LogoGroup>
        <Icon>
          <svg width="22" height="22">
          <use href={sprite + "#icon-logo"} />
          </svg>
        </Icon>
        <Name>Drink Master</Name>
      </LogoGroup>
    </a>
  );
};

export default Logo;
