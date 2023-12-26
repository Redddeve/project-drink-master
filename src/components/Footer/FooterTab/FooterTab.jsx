import FollowUs from '../../SharedComponents/FollowUs/FollowUs/FollowUs.jsx';
import SubscribeForm from '../SubscribeForm/SubscribeForm.jsx';
import {
  Copy,
  FooterContainer,
  FooterNavFlex,
  FooterWrap,
  LogoFlex,
  StyledNavLink,
  StyledLink,
  StyledLogoLink,
  Icon,
} from './FooterTab.styled.js';
import sprite from '../../../images/sprite.svg';

const FooterTab = () => {
  const handleLinkClick = () => {
    window.scrollTo(0, 0);
  };
  return (
    <FooterWrap>
      <FooterContainer>
        <div>
          <FooterNavFlex>
            <LogoFlex>
              <StyledLogoLink to="/" aria-label="Logo Drink Master">
                <Icon>
                  <use href={sprite + '#icon-logo'} />
                </Icon>
                <span>Drink Master</span>
              </StyledLogoLink>
              <FollowUs />
            </LogoFlex>

            <nav>
              <StyledNavLink
                aria-label="To Drinks page"
                to="/drinks"
                onClick={handleLinkClick}
              >
                <span>Drinks</span>
              </StyledNavLink>
              <StyledNavLink
                aria-label="To Add drink page"
                to="/add"
                onClick={handleLinkClick}
              >
                <span>Add drink</span>
              </StyledNavLink>
              <StyledNavLink
                aria-label="To My drinks page"
                to="/my"
                onClick={handleLinkClick}
              >
                <span>My drinks</span>
              </StyledNavLink>
              <StyledNavLink
                aria-label="To Favorites drinks page"
                to="/favorites"
                onClick={handleLinkClick}
              >
                <span>Favorites drinks</span>
              </StyledNavLink>
            </nav>
          </FooterNavFlex>

          <SubscribeForm />
        </div>

        <Copy>©2023 Drink Master. All rights reserved.</Copy>
        <StyledLink
          aria-label="To Privacy Policy page"
          to="policy"
          onClick={handleLinkClick}
        >
          Privacy Policy
        </StyledLink>
        <StyledLink
          aria-label="To Terms of Service page"
          to="agreement"
          onClick={handleLinkClick}
        >
          Terms of Service
        </StyledLink>
      </FooterContainer>
    </FooterWrap>
  );
};

export default FooterTab;
