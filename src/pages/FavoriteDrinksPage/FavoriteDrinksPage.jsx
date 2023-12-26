import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getFavoriteDrinksThunk,
  setSearchPage,
} from '../../redux/drinks/operations';
import useResponsiveItemsPerPage from '../../hooks/usePerPage';
import FavoriteCocktails from '../../components/FavoriteCocktails/FavoriteCocktails';
import PageTitle from '../../components/PageTitle/PageTitle';
import CircleBg from '../../components/SharedComponents/circleBg/CircleBg';
import {
  selectFavoriteDrinks,
  selectPage,
  selectPages,
} from '../../redux/drinks/selectors';
import { selectTheme } from '../../redux/theme/selectors';

const FavoriteDrinksPage = () => {
  const dispatch = useDispatch();
  const selectedPage = useSelector(selectPage);
  const pageCount = useSelector(selectPages) || 0;
  const favorites = useSelector(selectFavoriteDrinks);
  const { length } = favorites;
  const theme = useSelector(selectTheme);

  const itemsPerPage = useResponsiveItemsPerPage({
    mobile: 9,
    tablet: 8,
    desktop: 9,
    default: 9,
  });

  useEffect(() => {
    dispatch(setSearchPage(1));
  }, [dispatch]);

  useEffect(() => {
    dispatch(
      getFavoriteDrinksThunk({ page: selectedPage, limit: itemsPerPage })
    );
  }, [dispatch, itemsPerPage, selectedPage]);

  useEffect(() => {
    if (length === 0 && selectedPage === pageCount) {
      dispatch(setSearchPage(pageCount - 2));
    }
    if (length === 0 && selectedPage === 0) {
      dispatch(setSearchPage(pageCount + 2));
    }
  }, [dispatch, length, pageCount, selectedPage]);

  return (
    <>
      <CircleBg />
      <section>
        <PageTitle title="Favorites" />
        <FavoriteCocktails
          favorites={favorites}
          destination="favorite"
          pageCount={pageCount}
          theme={theme}
        />
      </section>
    </>
  );
};

export default FavoriteDrinksPage;
