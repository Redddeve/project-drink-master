import { useDispatch } from 'react-redux';
import MyOwnCocktails from '../../components/MyCocktails/MyCocktails';
import { useEffect } from 'react';
import { getOwnDrinksThunk } from '../../redux/drinks/operations';
import PageTitle from '../../components/PageTitle/PageTitle';

const MyDrinksPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getOwnDrinksThunk());
  }, [dispatch]);

  return (
    <section>
      <PageTitle title={'My drinks'}></PageTitle>
      <MyOwnCocktails />
    </section>
  );
};

export default MyDrinksPage;
