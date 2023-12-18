import FavoriteCocktails from '../../components/FavoriteCocktails/FavoriteCocktails';

import { FavoriteTitle } from './FavoriteDrinksPage.styled';
import { useEffect } from 'react';
import { getFavoriteDrinksThunk } from '../../redux/drinks/operations';
import { useDispatch } from 'react-redux';

const FavoriteDrinksPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getFavoriteDrinksThunk());
  }, [dispatch]);
  return (
    <section>
      <FavoriteTitle>Favorites</FavoriteTitle>
      <FavoriteCocktails />
    </section>
  );
};

export default FavoriteDrinksPage;
