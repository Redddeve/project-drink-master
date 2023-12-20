import { useRef, useEffect, useCallback } from 'react';
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

  useEffect(() => {
    document.addEventListener('keydown', handleEscKey);
    return () => {
      document.removeEventListener('keydown', handleEscKey);
    };
  }, [handleEscKey, isOpenBurgerMenu]);

  return (
    <BurgerMenuWrapper>
      <BurgerIcon onClick={closeMenu} id="burger_menu" theme={theme}>
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
