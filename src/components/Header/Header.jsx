import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { HeaderWrapper, HeaderContainer } from './Header.styled';
import Navigation from './Navigation/Navigation';
import Logo from './Logo/Logo';
import BurgerMenu from './Burger/Burger';
import { selectTheme } from '../../redux/theme/selectors';
import { useSelector } from 'react-redux';
import UserMenu from './UserMenu/UserMenu';

const Header = () => {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1440);
  const [isOpenBurgerMenu, setisOpenBurgerMenu] = useState(false);
  const theme = useSelector(selectTheme);

  const location = useLocation();

  const toggleMenu = () => setisOpenBurgerMenu(!isOpenBurgerMenu);

  const updateMedia = () => {
    const newIsDesktop = window.innerWidth >= 1440;
    setIsDesktop(newIsDesktop);

    if (newIsDesktop) {
      setisOpenBurgerMenu(false);
    }
  };

  const handlerEscClick = e => {
    const target = e.key === 'Escape';
    if (target) {
      setisOpenBurgerMenu(false);
    }
  };

  useEffect(() => {
    window.addEventListener('resize', updateMedia);

    if (isOpenBurgerMenu) {
      window.addEventListener('keydown', handlerEscClick);
    }

    return () => {
      window.removeEventListener('resize', updateMedia);

      if (isOpenBurgerMenu) {
        window.removeEventListener('keydown', handlerEscClick);
      }
    };
  }, [isOpenBurgerMenu]);

  useEffect(() => {
    setisOpenBurgerMenu(false);
  }, [location.pathname]);

  return (
    <HeaderWrapper theme={theme}>
      <HeaderContainer theme={theme}>
        <Logo />
        <UserMenu />
        {isDesktop ? (
          <Navigation /> 
        ) : (
          <BurgerMenu
            toggleMenu={toggleMenu}
            isOpenBurgerMenu={isOpenBurgerMenu}
            isDesktop={isDesktop}
          />
        )}
      </HeaderContainer>
    </HeaderWrapper>
  );
};

export default Header;
