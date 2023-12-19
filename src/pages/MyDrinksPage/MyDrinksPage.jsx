import { useDispatch } from 'react-redux';
import MyOwnCocktails from '../../components/MyCocktails/MyCocktails';
import { useEffect } from 'react';
import { getOwnDrinksThunk } from '../../redux/drinks/operations';
import { MyCocktailsTitle } from './MyDrinksPage.styled';

const MyDrinksPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getOwnDrinksThunk());
  }, [dispatch]);
  return (
    <section>
      <MyCocktailsTitle>PageTitle</MyCocktailsTitle>
      <MyOwnCocktails />
    </section>
  );
};

export default MyDrinksPage;
