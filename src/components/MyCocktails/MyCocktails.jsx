import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CocktailList from '../CocktailList/CocktailList';
import { selectOwnDrinks } from '../../redux/drinks/selectors';
import { getOwnDrinksThunk } from '../../redux/drinks/operations';
import usual from '../../images/blue-iced-tea@1x.png';
import retina from '../../images/blue-iced-tea@2x.png';
import PaginatedItems from '../Paginator/Paginator';
import {
  EmptyDescription,
  EmptyFavoritesContainer,
  EmptyFavoritesImage,
} from '../FavoriteCocktails/FavoriteCocktails.styled';

const MyOwnCocktails = () => {
  const ownCocktailsList = useSelector(selectOwnDrinks);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getOwnDrinksThunk());
  }, [dispatch]);

  return ownCocktailsList.length === 0 ? (
    <EmptyFavoritesContainer>
      <EmptyFavoritesImage
        srcSet={`${usual} 1x, ${retina} 2x`}
        alt="Cocktail"
      />
      <EmptyDescription>
        You haven&rsquo;t added any cocktails yet
      </EmptyDescription>
    </EmptyFavoritesContainer>
  ) : (
    <PaginatedItems
      items={ownCocktailsList}
      destination="my"
      ListComponent={CocktailList}
      itemsPerPageValue={{ mobile: 3, tablet: 3, desktop: 3, default: 9 }}
    />
  );
};

export default MyOwnCocktails;
