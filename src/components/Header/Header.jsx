import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { HeaderWrapper, HeaderContainer } from "./Header.styled"
import Navigation from './Navigation/Navigation';
import Logo from './Logo/Logo';
import BurgerMenu from './Burger/Burger';

const Header = () => {
  
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1280);
  const [isOpenBurgerMenu, setisOpenBurgerMenu] = useState(false);

	const location = useLocation();

	const toggleMenu = () => setisOpenBurgerMenu(!isOpenBurgerMenu);

	const updateMedia = () => {
		setIsDesktop(window.innerWidth >= 1280);
		if (isDesktop) {
			setisOpenBurgerMenu(false);
		}
	};


	const handlerEscClick = e => {
		const target = e.key === "Escape";
		if (target) {
			setisOpenBurgerMenu(false);
		}
	};

	useEffect(() => {
		window.addEventListener("resize", updateMedia);
		if (isOpenBurgerMenu) {
			window.addEventListener("click" );
			window.addEventListener("keydown", handlerEscClick);
		}

		return () => {
			window.removeEventListener("resize", updateMedia);
			window.removeEventListener("click" );
			window.removeEventListener("keydown", handlerEscClick);
		};
	});

	useEffect(() => {
		setisOpenBurgerMenu(false);
	}, [location.pathname]);

	return (
			<HeaderWrapper>
				<HeaderContainer>
					<Logo />
					{isDesktop && <Navigation />}
					<BurgerMenu
						toggleMenu={toggleMenu}
						isOpenBurgerMenu={isOpenBurgerMenu}
						isDesktop={isDesktop}
					/>
				</HeaderContainer>
			</HeaderWrapper>

	);
}

export default Header;
