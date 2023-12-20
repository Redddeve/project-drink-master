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

const Hero = () => {
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
          <HeroText>
            Unlock your inner mixologist with Drink Master, your one-stop
            destination for exploring, crafting, and mastering the world&apos;s
            finest beverages.
          </HeroText>
          <AddDrinksNavLink to="/add">Add drinks</AddDrinksNavLink>
        </HeroInfo>
        <HeroImg>
          <img srcSet={`${usual} 1x, ${retina} 2x`} alt="cocktail"></img>
        </HeroImg>
      </HeroSection>
    </>
  );
};

export default Hero;
