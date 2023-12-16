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
} from "./FooterDesc.styled.js";

const FooterDesc = () => {
  return (
    <FooterWrap>
      <FooterContainer>
        <div>
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
          <SubscribeForm />
        </div>
        <FooterNavFlex>
          <Copy>©2023 Drink Master. All rights reserved.</Copy>
          <div>
            <StyledLink to="policy">Privacy Policy</StyledLink>
            <StyledLink to="agreement">Terms of Service</StyledLink>
          </div>
        </FooterNavFlex>
      </FooterContainer>
    </FooterWrap>
  );
};

export default FooterDesc;
