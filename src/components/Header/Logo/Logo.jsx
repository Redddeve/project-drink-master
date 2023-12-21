import { LogoGroup, Icon, Name } from './Logo.styled';
import sprite from '../../../images/sprite.svg';
import ToggleTheme from '../../ToggleTheme/ToggleTheme';
import { useSelector } from 'react-redux';
import sprite from '../../../images/sprite.svg';
import { Link } from 'react-router-dom';

const Logo = () => {
  const theme = useSelector(state => state.theme.theme);
  return (
    <Link to="/">
      <LogoGroup>
        <Icon theme={theme}>
          <svg width="22" height="22">
            <use href={sprite + '#icon-logo'} />
          </svg>
        </Icon>
        <Name theme={theme}>Drink Master</Name>
      </LogoGroup>
    </Link>
  );
};

export default Logo;
