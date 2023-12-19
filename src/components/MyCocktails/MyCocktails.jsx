import { selectOwnDrinks } from '../../redux/drinks/selectors';
import { useSelector } from 'react-redux';
import CocktailList from '../CocktailList/CocktailList';
import {
  EmptyDescription,
  EmptyMyCocktailsContainer,
} from './MyCocktails.styled';

const MyOwnCocktails = () => {
  const ownCocktailsList = useSelector(selectOwnDrinks);

  return ownCocktailsList.length === 0 ? (
    <EmptyMyCocktailsContainer>
      <EmptyDescription>You have not added any own cocktails</EmptyDescription>
    </EmptyMyCocktailsContainer>
  ) : (
    <CocktailList cocktailData={ownCocktailsList} page="my" />
  );
};

export default MyOwnCocktails;
