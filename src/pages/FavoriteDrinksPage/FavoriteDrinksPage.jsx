import { useEffect, useState } from 'react';
import { getFavoriteDrinksThunk } from '../../redux/drinks/operations';
import { useDispatch, useSelector } from 'react-redux';
import useResponsiveItemsPerPage from '../../hooks/usePerPage';
import FavoriteCocktails from '../../components/FavoriteCocktails/FavoriteCocktails';
import PageTitle from '../../components/PageTitle/PageTitle';
import { selectIsLoading } from '../../redux/drinks/selectors';
import { Loader } from '../../components/Loader/Loader';

const FavoriteDrinksPage = () => {
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();

  const itemsPerPage = useResponsiveItemsPerPage({
    mobile: 9,
    tablet: 8,
    desktop: 9,
    default: 9,
  });

  useEffect(() => {
    dispatch(getFavoriteDrinksThunk({ page, itemsPerPage }));
  }, [dispatch, itemsPerPage, page]);
  const loading = useSelector(selectIsLoading);

  return (
    <>
      {loading && <Loader />}

      <section>
        <PageTitle title="Favorites" mbMobile={0} mbTablet={0} mbDesktop={0} />
        <FavoriteCocktails
          destination="favorite"
          page={page}
          setPage={setPage}
        />
      </section>
    </>
  );
};

export default FavoriteDrinksPage;
