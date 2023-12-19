import {
  StyledDrinkImage,
  StyledDrinkCard,
  StyledTextContainerSmall,
  StyledSeeMoreSmall,
} from './DrinkCard.styled';
import PropTypes from 'prop-types';

export const DrinkCard = ({ drink }) => {
  return (
    <StyledDrinkCard>
      <StyledDrinkImage
        src={drink.drinkThumb}
        alt={drink.drink}
      ></StyledDrinkImage>
      {/*{detailed ? (*/}
      {/*  <></>*/}
      {/*) : (*/}
      <StyledTextContainerSmall>
        <span>{drink.drink}</span>
        <StyledSeeMoreSmall to={`../drink/${drink._id}`}>
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
