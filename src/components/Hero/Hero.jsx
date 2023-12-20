import {
  AddDrinksNavLink,
  HeroImg,
  HeroInfo,
  HeroSection,
  HeroText,
} from './Hero.styled';
import usual from '../../images/blue-iced-tea@1x.png';
import retina from '../../images/blue-iced-tea@2x.png';
import PageTitle from '../PageTitle/PageTitle';
import { useSelector } from 'react-redux';

const Hero = () => {
  const theme = useSelector(state => state.theme.theme);
  return (
    <>
      <HeroSection>
        <HeroInfo>
          <PageTitle
            mbMobile={'16'}
            mbTablet={'28'}
            mbDesktop={'28'}
            title={'Craft Your Perfect Drink with Drink Master'}
          />
          <HeroText theme={theme}>
            Unlock your inner mixologist with Drink Master, your one-stop
            destination for exploring, crafting, and mastering the world's
            finest beverages.
          </HeroText>
          <AddDrinksNavLink theme={theme} to="/add">
            Add drinks
          </AddDrinksNavLink>
        </HeroInfo>
        <HeroImg>
          <img srcSet={`${usual} 1x, ${retina} 2x`} alt="cocktail"></img>
        </HeroImg>
      </HeroSection>
    </>
  );
};

export default Hero;
