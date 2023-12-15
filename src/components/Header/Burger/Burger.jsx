import { useRef } from "react";
import { CSSTransition } from "react-transition-group";
import Navigation from "../Navigation/Navigation";
import PropTypes from "prop-types";
import { BurgerMenuWrapper, BurgerIcon } from "./Burger.styled";

const BurgerMenu = ({ toggleMenu, isOpenBurgerMenu, isDesktop }) => {
  const nodeRef = useRef(null);

  return (
    <BurgerMenuWrapper>
      <BurgerIcon onClick={toggleMenu} id="burger_menu">
        <svg className="icon">
          {isOpenBurgerMenu ? (
            <use href={ + "#close"}></use>
          ) : (
            <use href={ + "#burger"}></use>
          )}
        </svg>
      </BurgerIcon>

      <CSSTransition
        in={isOpenBurgerMenu && !isDesktop}
        nodeRef={nodeRef}
        timeout={250}
        classNames="burger"
        unmountOnExit
        onEnter={() => toggleMenu}
        onExited={() => toggleMenu}
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
