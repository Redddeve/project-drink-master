import { DrinkCard } from '../DrinkCard/DrinkCard.jsx';
import {
  EmptyDescription,
  EmptyFavoritesContainer,
  EmptyFavoritesImage,
} from '../FavoriteCocktails/FavoriteCocktails.styled.js';
import usual from '../../images/blue-iced-tea@1x.png';
import retina from '../../images/blue-iced-tea@2x.png';
import { StyledCardsContainer } from './SearchResultsContainer.styled';
import { useSelector } from 'react-redux';
import { selectSearchDrinks } from '../../redux/drinks/selectors.js';
import { selectTheme } from '../../redux/theme/selectors.js';

export const SearchResultsContainer = () => {
  const drinks = useSelector(selectSearchDrinks);
  const theme = useSelector(selectTheme);

  return (
    <StyledCardsContainer>
      {drinks.length !== 0 ? (
        drinks?.map(drink => {
          return <DrinkCard key={drink._id} drink={drink} />;
        })
      ) : (
        <EmptyFavoritesContainer>
          <EmptyFavoritesImage
            srcSet={`${usual} 1x, ${retina} 2x`}
            alt="Cocktail"
          />
          <EmptyDescription theme={theme}>
            No cocktails found by your request
          </EmptyDescription>
        </EmptyFavoritesContainer>
      )}
    </StyledCardsContainer>
  );
};
