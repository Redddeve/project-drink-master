import { useDispatch, useSelector } from 'react-redux';
import MyOwnCocktails from '../../components/MyCocktails/MyCocktails';
import { useEffect } from 'react';
import {
  getOwnDrinksThunk,
  setSearchPage,
} from '../../redux/drinks/operations';
import PageTitle from '../../components/PageTitle/PageTitle';
import {
  selectOwnDrinks,
  selectPage,
  selectPages,
} from '../../redux/drinks/selectors';
import { selectTheme } from '../../redux/theme/selectors';
import useResponsiveItemsPerPage from '../../hooks/usePerPage';

const MyDrinksPage = () => {
  const dispatch = useDispatch();
  const selectedPage = useSelector(selectPage);
  const pageCount = useSelector(selectPages);
  const ownCocktailsList = useSelector(selectOwnDrinks);
  const theme = useSelector(selectTheme);
  const itemsPerPage = useResponsiveItemsPerPage({
    mobile: 9,
    tablet: 8,
    desktop: 9,
    default: 9,
  });

  useEffect(() => {
    dispatch(getOwnDrinksThunk({ page: selectedPage, limit: itemsPerPage }));
  }, [dispatch, itemsPerPage, selectedPage]);

  useEffect(() => {
    if (length === 0 && selectedPage === pageCount && pageCount > 1) {
      dispatch(setSearchPage(pageCount - 1));
    }
  }, [dispatch, length, pageCount, selectedPage]);

  return (
    <section>
      <PageTitle title={'My drinks'}></PageTitle>
      <MyOwnCocktails
        destination="my"
        pageCount={pageCount}
        theme={theme}
        items={ownCocktailsList}
      />
    </section>
  );
};

export default MyDrinksPage;
