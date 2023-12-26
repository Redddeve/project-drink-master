import { useEffect } from 'react';
import PageTitle from '../../components/PageTitle/PageTitle.jsx';
import { SearchFilterContainer } from '../../components/SearchFilterContainer/SearchFilterContainer.jsx';
import { SearchResultsContainer } from '../../components/SearchResultsContainer/SearchResultsContainer';
import CircleBg from '../../components/SharedComponents/circleBg/CircleBg.jsx';
import PaginatedItems from '../../components/Paginator/Paginator.jsx';
import { useSelector } from 'react-redux';
import {
  selectIsLoading,
  selectPages,
  selectSearchDrinks,
} from '../../redux/drinks/selectors.js';
import { Loader } from '../../components/Loader/Loader.jsx';
import { selectTheme } from '../../redux/theme/selectors.js';

const DrinksPage = () => {
  const drinks = useSelector(selectSearchDrinks);
  const isLoading = useSelector(selectIsLoading);
  const theme = useSelector(selectTheme);
  const pageCount = useSelector(selectPages);

  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
  }, []);

  return (
    <>
      <CircleBg />
      <PageTitle title={'Drinks'} />
      <SearchFilterContainer />
      {isLoading ? (
        <Loader />
      ) : (
        <PaginatedItems
          items={drinks}
          ListComponent={() => <SearchResultsContainer />}
          theme={theme}
          pageCount={pageCount}
        />
      )}
    </>
  );
};

export default DrinksPage;
