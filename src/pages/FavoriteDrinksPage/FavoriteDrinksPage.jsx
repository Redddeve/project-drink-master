import FavoriteCocktails from '../../components/FavoriteCocktails/FavoriteCocktails';

import { FavoriteTitle } from './FavoriteDrinksPage.styled';
import { useEffect } from 'react';
import { getFavoriteDrinksThunk } from '../../redux/drinks/operations';
import { useDispatch } from 'react-redux';
import ButtonUpToTop from '../../components/ButtonUpToTop/ButtonUpToTop';

const FavoriteDrinksPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getFavoriteDrinksThunk());
  }, [dispatch]);
  return (
    <section>
      <FavoriteTitle>Favorites</FavoriteTitle>
      <FavoriteCocktails />
      <ButtonUpToTop />
    </section>
  );
};

export default FavoriteDrinksPage;
