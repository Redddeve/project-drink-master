import { useState } from 'react';
import PropTypes from 'prop-types';
import usual from '../../images/defaultImg/default@1x.webp';
import retina from '../../images/defaultImg/default@2x.webp';
import {
  ButtonContainer,
  CocktailContainerTitle,
  CocktailDescription,
  CocktailImage,
  CocktailCard,
  CocktailLabel,
  CocktailTitle,
  MoreLink,
} from './CocktailItem.styled';
import RemoveButton from '../RemoveButton/RemoveButton';

const CocktailItem = ({ cocktail, page }) => {
  const { id, drink, alcoholic, description, drinkThumb } = cocktail;

  const [imageLoadError, setImageLoadError] = useState(false);

  const handleImageError = () => setImageLoadError(true);

  return (
    <CocktailCard>
      {imageLoadError ? (
        <CocktailImage srcSet={`${usual} 1x, ${retina} 2x`} alt={drink} />
      ) : (
        <CocktailImage
          src={drinkThumb}
          alt={drink}
          onError={handleImageError}
        />
      )}
      <CocktailContainerTitle>
        <CocktailTitle>{drink}</CocktailTitle>
        <CocktailLabel>{alcoholic}</CocktailLabel>
      </CocktailContainerTitle>
      <CocktailDescription>{description}</CocktailDescription>
      <ButtonContainer>
        <MoreLink to={`/drink/${id}`}>See more</MoreLink>
        <RemoveButton id={id} page={page} />
      </ButtonContainer>
    </CocktailCard>
  );
};

CocktailItem.propTypes = {
  cocktail: PropTypes.shape({
    id: PropTypes.string.isRequired,
    drink: PropTypes.string.isRequired,
    alcoholic: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    drinkThumb: PropTypes.string.isRequired,
  }).isRequired,
  page: PropTypes.string.isRequired,
};

export default CocktailItem;
