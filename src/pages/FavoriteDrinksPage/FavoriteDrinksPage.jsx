import FavoriteCocktails from '../../components/FavoriteCocktails/FavoriteCocktails';

import { useEffect } from 'react';
import { getFavoriteDrinksThunk } from '../../redux/drinks/operations';
import { useDispatch } from 'react-redux';
import ButtonUpToTop from '../../components/ButtonUpToTop/ButtonUpToTop';
import PageTitle from '../../components/PageTitle/PageTitle';

const FavoriteDrinksPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getFavoriteDrinksThunk());
  }, [dispatch]);
  return (
    <>
      <section>
        <PageTitle title="Favorites" mbMobile={1} mbTablet={1} mbDesktop={1} />
        <FavoriteCocktails />
        <ButtonUpToTop />
      </section>
    </>
  );
};

export default FavoriteDrinksPage;
