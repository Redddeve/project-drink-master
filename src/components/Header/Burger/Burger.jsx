import { useRef, useEffect, useCallback, useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import Navigation from '../Navigation/Navigation';
import PropTypes from 'prop-types';
import { BurgerMenuWrapper, BurgerIcon } from './Burger.styled';
import sprite from '../../../images/sprite.svg';
import { useSelector } from 'react-redux';

const BurgerMenu = ({ toggleMenu, isOpenBurgerMenu, isDesktop }) => {
  const theme = useSelector(state => state.theme.theme);
  const nodeRef = useRef(null);

  const closeMenu = () => {
    toggleMenu();
  };

  const handleEscKey = useCallback(
    e => {
      if (e.key === 'Escape' && isOpenBurgerMenu) {
        toggleMenu();
      }
    },
    [isOpenBurgerMenu, toggleMenu]
  );

  const [isScrollLocked, setIsScrollLocked] = useState(false);

  useEffect(() => {
    document.addEventListener('keydown', handleEscKey);

     if (isOpenBurgerMenu) {
      document.body.style.overflow = 'hidden';
      setIsScrollLocked(true);
    }

    return () => {
      document.removeEventListener('keydown', handleEscKey);

      document.body.style.overflow = "auto";
      setIsScrollLocked(false);
    };
  }, [handleEscKey, isOpenBurgerMenu]);

  return (
    <BurgerMenuWrapper>
      <BurgerIcon
        onClick={closeMenu}
        id="burger_menu"
        theme={theme}
        className={isScrollLocked ? 'scroll-locked' : ''}>
        <svg width="32" height="32">
          <use
            href={
              isOpenBurgerMenu ? `${sprite}#icon-X` : `${sprite}#icon-burger`
            }
          />
        </svg>
      </BurgerIcon>

      <CSSTransition
        in={isOpenBurgerMenu && !isDesktop}
        nodeRef={nodeRef}
        timeout={250}
        classNames="burger"
        unmountOnExit
        onEnter={() => {}}
        onExited={() => {}}
      >
        <Navigation ref={nodeRef} />
      </CSSTransition>
    </BurgerMenuWrapper>
  );
};

BurgerMenu.propTypes = {
  toggleMenu: PropTypes.func,
  isOpenBurgerMenu: PropTypes.bool,
  isDesktop: PropTypes.bool,
};

export default BurgerMenu;
