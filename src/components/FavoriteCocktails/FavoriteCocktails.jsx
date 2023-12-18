import { selectFavoriteDrinks } from '../../redux/drinks/selectors';
import CocktailList from '../CocktailList/CocktailList';
import usual from '../../images/blue-iced-tea@1x.png';
import retina from '../../images/blue-iced-tea@2x.png';

import {
  EmptyDescription,
  EmptyFavoritesContainer,
  EmptyFavoritesImage,
} from './FavoriteCocktails.styled';
import { useSelector } from 'react-redux';

const FavoriteCocktails = () => {
  const yourCocktail = useSelector(selectFavoriteDrinks);

  return yourCocktail.length === 0 ? (
    <EmptyFavoritesContainer>
      <EmptyFavoritesImage
        srcSet={`${usual} 1x, ${retina} 2x`}
        alt="Cocktail"
      />
      <EmptyDescription>
        You haven&rsquo;t added any favorite cocktails yet
      </EmptyDescription>
    </EmptyFavoritesContainer>
  ) : (
    <CocktailList cocktailData={yourCocktail} page="favorite" />
  );
};

export default FavoriteCocktails;
