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
} from './FooterDesc.styled.js';
import sprite from '../../../images/sprite.svg';
import { useSelector } from 'react-redux';
import { selectTheme } from '../../../redux/theme/selectors.js';

const FooterDesc = () => {
  const theme = useSelector(selectTheme);
  return (
    <FooterWrap>
      <FooterContainer>
        <div>
          <LogoFlex>
            <StyledLogoLink href="/">
              <Icon>
                <use href={sprite + '#icon-logo'} />
              </Icon>
              <span>Drink Master</span>
            </StyledLogoLink>

            <FollowUs theme={theme} />
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
