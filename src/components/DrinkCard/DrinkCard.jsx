import { useSelector } from 'react-redux';
import {
  StyledDrinkImage,
  StyledDrinkCard,
  StyledTextContainerSmall,
  StyledSeeMoreSmall,
  StyledDrinkName,
} from './DrinkCard.styled';
import PropTypes from 'prop-types';

export const DrinkCard = ({ drink }) => {
  const theme = useSelector(state => state.theme.theme);
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
        <StyledDrinkName theme={theme}>{drink.drink}</StyledDrinkName>
        <StyledSeeMoreSmall theme={theme} to={`../drink/${drink._id}`}>
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
