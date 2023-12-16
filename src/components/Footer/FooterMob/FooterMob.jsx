import FollowUs from "../../SharedComponents/FollowUs/FollowUs";
import SubscribeForm from "../SubscribeForm/SubscribeForm.jsx";
import {
  Copy,
  FooterContainer,
  FooterNavFlex,
  FooterWrap,
  LogoFlex,
  StyledLogoLink,
  StyledNavLink,
  StyledLink,
  Icon,
} from "./FooterMob.styled.js";
import sprite from "../../../images/sprite.svg";

const FooterMob = () => {
  return (
    <FooterWrap>
      <FooterContainer>
        <FooterNavFlex>
          <LogoFlex>
            <StyledLogoLink href="/">
              <Icon>
                <use href={sprite + "#icon-logo"} />
              </Icon>
              <span>Drink Master</span>
            </StyledLogoLink>

            <FollowUs />
          </LogoFlex>

          <nav>
            <StyledNavLink to="/drinks">
              <span>Drinks</span>
            </StyledNavLink>
            <StyledNavLink to="/add">
              <span>Add drink</span>
            </StyledNavLink>
            <StyledNavLink to="/my">
              <span>My drinks</span>
            </StyledNavLink>
            <StyledNavLink to="/favorites">
              <span>Favorites drinks</span>
            </StyledNavLink>
          </nav>
        </FooterNavFlex>

        <SubscribeForm />

        <Copy>©2023 Drink Master. All rights reserved.</Copy>
        <StyledLink to="policy">Privacy Policy</StyledLink>
        <StyledLink to="agreement">Terms of Service</StyledLink>
      </FooterContainer>
    </FooterWrap>
  );
};

export default FooterMob;
