import { useSelector } from 'react-redux';
import {
  StyledDrinkImage,
  StyledDrinkCard,
  StyledTextContainerSmall,
  StyledSeeMoreSmall,
  StyledDrinkName,
} from './DrinkCard.styled';
import PropTypes from 'prop-types';
import LazyLoad from 'react-lazy-load';

export const DrinkCard = ({ drink }) => {
  const theme = useSelector(state => state.theme.theme);
  return (
    <StyledDrinkCard>
      <LazyLoad offset={100}>
        <StyledDrinkImage
          src={drink.drinkThumb}
          alt={drink.drink}
        ></StyledDrinkImage>
      </LazyLoad>
      {/*{detailed ? (*/}
      {/*  <></>*/}
      {/*) : (*/}
      <StyledTextContainerSmall>
        <StyledDrinkName theme={theme}>{drink.drink}</StyledDrinkName>
        <StyledSeeMoreSmall
          theme={theme}
          to={`../drink/${drink._id}`}
          aria-label="See more"
        >
          See more
        </StyledSeeMoreSmall>
      </StyledTextContainerSmall>
      {/*)}*/}
    </StyledDrinkCard>
  );
};

DrinkCard.propTypes = {
  drink: PropTypes.shape({
    drinkThumb: PropTypes.string,
    drink: PropTypes.string,
    _id: PropTypes.string,
  }),
  // detailed: PropTypes.bool,
};
