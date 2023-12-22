import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { selectPopular } from '../../redux/drinks/selectors';
import FollowUs from '../SharedComponents/FollowUs/FollowUs/FollowUs';
import { Link } from 'react-router-dom';
import { selectTheme } from '../../redux/theme/selectors';
import {
  TitleFollow,
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

const PopularDrinks = () => {
  const popularDrinks = useSelector(selectPopular);
  const theme = useSelector(selectTheme);

  return (
    <MainContainer>
      <FollowUsContainer>
        <TitleFollow theme={theme}>Follow Us</TitleFollow>
        <FollowUs theme={theme} />
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
