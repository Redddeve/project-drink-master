import { useDispatch, useSelector } from 'react-redux';
import MyOwnCocktails from '../../components/MyCocktails/MyCocktails';
import { useEffect } from 'react';
import { getOwnDrinksThunk } from '../../redux/drinks/operations';
import { MyCocktailsTitle } from './MyDrinksPage.styled';
import PageTitle from '../../components/PageTitle/PageTitle';
import { selectOwnDrinks } from '../../redux/drinks/selectors';
import ButtonUpToTop from '../../components/ButtonUpToTop/ButtonUpToTop';

const MyDrinksPage = () => {
  const ownCocktailsList = useSelector(selectOwnDrinks);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getOwnDrinksThunk());
  }, [dispatch]);

  return (
    <section>
      {ownCocktailsList.length !== 0 ? (
        <PageTitle title={'My drinks'}></PageTitle>
      ) : null}
      <MyCocktailsTitle></MyCocktailsTitle>
      <MyOwnCocktails />
      <ButtonUpToTop />
    </section>
  );
};

export default MyDrinksPage;
