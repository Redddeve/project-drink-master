import PageTitle from '../../components/PageTitle/PageTitle.jsx';
import { SearchFilterContainer } from '../../components/SearchFilterContainer/SearchFilterContainer.jsx';
import { SearchResultsContainer } from '../../components/SearchResultsContainer/SearchResultsContainer';

const DrinksPage = () => {
  return (
    <>
      <PageTitle title={'Drinks'} />
      <SearchFilterContainer />
      <SearchResultsContainer />
    </>
  );
};

export default DrinksPage;
