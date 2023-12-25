import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getFavoriteDrinksThunk } from '../../redux/drinks/operations';
import useResponsiveItemsPerPage from '../../hooks/usePerPage';
import FavoriteCocktails from '../../components/FavoriteCocktails/FavoriteCocktails';
import PageTitle from '../../components/PageTitle/PageTitle';
import { selectPages } from '../../redux/drinks/selectors';
import { selectTheme } from '../../redux/theme/selectors';

const FavoriteDrinksPage = () => {
  const [selectedPage, setSelectedPage] = useState(0);
  const dispatch = useDispatch();
  const pageCount = useSelector(selectPages);
  const favorites = useSelector(state => state.drinks.favorite);
  const theme = useSelector(selectTheme);
  console.log(selectedPage);

  const itemsPerPage = useResponsiveItemsPerPage({
    mobile: 9,
    tablet: 8,
    desktop: 9,
    default: 9,
  });

  useEffect(() => {
    dispatch(
      getFavoriteDrinksThunk({ page: selectedPage, limit: itemsPerPage })
    );
  }, [dispatch, itemsPerPage, selectedPage]);

  useEffect(() => {
    if (favorites.length === 0 && pageCount > 1 && selectedPage > 1) {
      setSelectedPage(selectedPage - 1);
    }
  }, [favorites.length, pageCount, selectedPage, setSelectedPage]);

  return (
    <>
      <section>
        <PageTitle title="Favorites" />
        <FavoriteCocktails
          favorites={favorites}
          destination="favorite"
          pageCount={pageCount}
          setSelectedPage={setSelectedPage}
          selectedPage={selectedPage}
          theme={theme}
        />
      </section>
    </>
  );
};

export default FavoriteDrinksPage;
