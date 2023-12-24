import { useSelector } from 'react-redux';
import PageTitle from '../../components/PageTitle/PageTitle.jsx';
import { SearchFilterContainer } from '../../components/SearchFilterContainer/SearchFilterContainer.jsx';
import { SearchResultsContainer } from '../../components/SearchResultsContainer/SearchResultsContainer';
import { selectIsLoading } from '../../redux/drinks/selectors.js';
import { Loader } from '../../components/Loader/Loader.jsx';

const DrinksPage = () => {
  const loading = useSelector(selectIsLoading);

  return (
    <>
      {loading && <Loader />}
      <PageTitle title={'Drinks'} />
      <SearchFilterContainer />
      <SearchResultsContainer />
    </>
  );
};

export default DrinksPage;
