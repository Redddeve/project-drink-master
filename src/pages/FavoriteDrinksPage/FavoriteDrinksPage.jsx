import { useEffect, useState } from 'react';
import { getFavoriteDrinksThunk } from '../../redux/drinks/operations';
import { useDispatch } from 'react-redux';
import useResponsiveItemsPerPage from '../../hooks/usePerPage';
import FavoriteCocktails from '../../components/FavoriteCocktails/FavoriteCocktails';
import ButtonUpToTop from '../../components/ButtonUpToTop/ButtonUpToTop';
import PageTitle from '../../components/PageTitle/PageTitle';

const FavoriteDrinksPage = () => {
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();

  const { itemsPerPage } = useResponsiveItemsPerPage({
    mobile: 9,
    tablet: 8,
    desktop: 9,
    default: 9,
  });

  useEffect(() => {
    dispatch(getFavoriteDrinksThunk({ page, itemsPerPage }));
  }, [dispatch, itemsPerPage, page]);

  return (
    <>
      <section>
        <PageTitle title="Favorites" mbMobile={0} mbTablet={0} mbDesktop={0} />
        <FavoriteCocktails
          destination="favorite"
          page={page}
          setPage={setPage}
        />
        <ButtonUpToTop />
      </section>
    </>
  );
};

export default FavoriteDrinksPage;
