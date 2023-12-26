import { useEffect } from 'react';
import PageTitle from '../../components/PageTitle/PageTitle.jsx';
import { SearchFilterContainer } from '../../components/SearchFilterContainer/SearchFilterContainer.jsx';
import { SearchResultsContainer } from '../../components/SearchResultsContainer/SearchResultsContainer';
import CircleBg from '../../components/SharedComponents/circleBg/CircleBg.jsx';

const DrinksPage = () => {
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
      <SearchResultsContainer />
    </>
  );
};

export default DrinksPage;
