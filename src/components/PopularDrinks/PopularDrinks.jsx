import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { selectPopular } from '../../redux/drinks/selectors';
import { Link } from 'react-router-dom';
import { selectTheme } from '../../redux/theme/selectors';
import {
  TitleFollow,
  FollowUsWrap,
  StyledFollowUsLink,
  StyledFollowUsItem,
  SvgSocial,
  FollowUsContainer,
  PopDrinkContainer,
  MainContainer,
  ImgDrink,
  DrinkTitle,
  DescriptiontTitle,
  PopularDrinkTitle,
  SpaceContainer,
  PositionContainer,
} from './PopularDrinks.styled';
import sprite from '../../images/sprite.svg';

const PopularDrinks = () => {
  const popularDrinks = useSelector(selectPopular);
  const theme = useSelector(selectTheme);

  return (
    <MainContainer>
      <FollowUsContainer>
        <TitleFollow theme={theme}>Follow Us</TitleFollow>

        <FollowUsWrap>
          <StyledFollowUsItem theme={theme}>
            <StyledFollowUsLink
              theme={theme}
              href="https://www.facebook.com/goITclub/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SvgSocial theme={theme}>
                <use href={sprite + '#icon-facebook'} />
              </SvgSocial>
            </StyledFollowUsLink>
          </StyledFollowUsItem>

          <StyledFollowUsItem theme={theme}>
            <StyledFollowUsLink
              theme={theme}
              href="https://www.instagram.com/goitclub/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SvgSocial theme={theme}>
                <use href={sprite + '#icon-instagram'} />
              </SvgSocial>
            </StyledFollowUsLink>
          </StyledFollowUsItem>

          <StyledFollowUsItem theme={theme}>
            <StyledFollowUsLink
              theme={theme}
              href="https://www.youtube.com/c/GoIT"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SvgSocial theme={theme}>
                <use href={sprite + '#icon-youtube'} />
              </SvgSocial>
            </StyledFollowUsLink>
          </StyledFollowUsItem>
        </FollowUsWrap>
      </FollowUsContainer>

      <PopularDrinkTitle theme={theme}>Popular drinks</PopularDrinkTitle>

      <PopDrinkContainer>
        {popularDrinks.map((item, index) => (
          <SpaceContainer key={item._id || index}>
            <Link to={`/drink/${item._id}`}>
              <ImgDrink src={item.drinkThumb} alt={item.drink} />
            </Link>
            <PositionContainer>
              <DrinkTitle theme={theme}>{item.drink}</DrinkTitle>
              <DescriptiontTitle theme={theme}>
                {item.description}
              </DescriptiontTitle>
            </PositionContainer>
          </SpaceContainer>
        ))}
      </PopDrinkContainer>
    </MainContainer>
  );
};

PopularDrinks.propTypes = {
  popularDrinks: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      drinkThumb: PropTypes.string,
      drink: PropTypes.string,
      description: PropTypes.string,
    })
  ),
};

export default PopularDrinks;
