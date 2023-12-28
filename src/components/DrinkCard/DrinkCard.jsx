import { useState } from 'react';
import { useSelector } from 'react-redux';
import {
  StyledDrinkImage,
  StyledDrinkCard,
  StyledTextContainerSmall,
  StyledSeeMoreSmall,
  StyledDrinkName,
} from './DrinkCard.styled';
import usual from '../../images/defaultImg/default@1x.webp';
import retina from '../../images/defaultImg/default@2x.webp';
import PropTypes from 'prop-types';
import LazyLoad from 'react-lazy-load';

export const DrinkCard = ({ drink }) => {
  const [imageLoadError, setImageLoadError] = useState(false);
  const handleImageError = () => setImageLoadError(true);
  const theme = useSelector(state => state.theme.theme);
  return (
    <StyledDrinkCard>
      {imageLoadError ? (
        <StyledDrinkImage srcSet={`${usual} 1x, ${retina} 2x`} alt={drink} />
      ) : (
        <LazyLoad offset={100}>
          <StyledDrinkImage
            src={drink.drinkThumb}
            alt={drink.drink}
            onError={handleImageError}
          />
        </LazyLoad>
      )}
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
    </StyledDrinkCard>
  );
};

DrinkCard.propTypes = {
  drink: PropTypes.shape({
    drinkThumb: PropTypes.string,
    drink: PropTypes.string,
    _id: PropTypes.string,
  }),
};
