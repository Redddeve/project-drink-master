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
import PaginatedItems from '../Paginator/Paginator.jsx';
import { useDispatch } from 'react-redux';
import useResponsiveItemsPerPage from '../../hooks/usePerPage.jsx';
import { searchDrinksThunk } from '../../redux/drinks/operations.js';
import { useEffect, useState } from 'react';

export const SearchResultsContainer = () => {
  const drinks = useSelector(selectSearchDrinks);
  const theme = useSelector(selectTheme);
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();

  const itemsPerPage = useResponsiveItemsPerPage({
    mobile: 9,
    tablet: 8,
    desktop: 9,
    default: 9,
  });

  useEffect(() => {
    dispatch(searchDrinksThunk({ page, itemsPerPage }));
  }, [dispatch, itemsPerPage, page]);

  return (
    <StyledCardsContainer>
      {drinks.length !== 0 ? (
        <PaginatedItems
          page={page}
          items={drinks}
          ListComponent={() =>
            drinks?.map(drink => {
              return (
                <DrinkCard
                  key={drink._id}
                  drink={drink}
                  // detailed={false}
                />
              );
            })
          }
          setPage={setPage}
        />
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
