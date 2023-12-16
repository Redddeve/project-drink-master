import FollowUs from "../../SharedComponents/FollowUs/FollowUs";
import SubscribeForm from "../SubscribeForm/SubscribeForm.jsx";
import {
  Copy,
  FooterContainer,
  FooterNavFlex,
  FooterWrap,
  LogoFlex,
  StyledNavLink,
  StyledLink,
  LogoSpan,
} from "./FooterTab.styled.js";

const FooterTab = () => {
  return (
    <FooterWrap>
      <FooterContainer>
        <div>
          <FooterNavFlex>
            <LogoFlex>
              <StyledNavLink to="/">
                <p>
                  O<LogoSpan>Drink Master</LogoSpan>
                </p>
              </StyledNavLink>

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
        </div>

        <Copy>©2023 Drink Master. All rights reserved.</Copy>
        <StyledLink to="policy">Privacy Policy</StyledLink>
        <StyledLink to="agreement">Terms of Service</StyledLink>
      </FooterContainer>
    </FooterWrap>
  );
};

export default FooterTab;
