import {
  StyledDrinkImage,
  StyledDrinkCard,
  StyledTextContainerSmall,
  StyledSeeMoreSmall,
} from './DrinkCard.styled';
import PropTypes from 'prop-types';
import LazyLoad from 'react-lazy-load';

export const DrinkCard = ({ drink }) => {
  return (
    <StyledDrinkCard>
      <LazyLoad
        height={400}
        offset={100}
        onContentVisible={() => {
          console.log('loaded!');
        }}
      >
        <StyledDrinkImage
          src={drink.drinkThumb}
          alt={drink.drink}
        ></StyledDrinkImage>
      </LazyLoad>
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
