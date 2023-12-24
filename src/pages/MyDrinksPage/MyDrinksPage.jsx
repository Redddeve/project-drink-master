import { useDispatch, useSelector } from 'react-redux';
import MyOwnCocktails from '../../components/MyCocktails/MyCocktails';
import { useEffect } from 'react';
import { getOwnDrinksThunk } from '../../redux/drinks/operations';
import PageTitle from '../../components/PageTitle/PageTitle';
import { selectIsLoading } from '../../redux/drinks/selectors';
import { Loader } from '../../components/Loader/Loader';

const MyDrinksPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getOwnDrinksThunk());
  }, [dispatch]);
  const loading = useSelector(selectIsLoading);

  return (
    <section>
      {loading && <Loader />}

      <PageTitle title={'My drinks'}></PageTitle>
      <MyOwnCocktails />
    </section>
  );
};

export default MyDrinksPage;
