import { useSelector } from 'react-redux';
import { selectFavoriteDrinks } from '../../redux/drinks/selectors';
import CocktailList from '../CocktailList/CocktailList';
import usual from '../../images/blue-iced-tea@1x.png';
import retina from '../../images/blue-iced-tea@2x.png';
import datas from './cocktail.json';

import {
  EmptyDescription,
  EmptyFavoritesContainer,
  EmptyFavoritesImage,
} from './FavoriteCocktails.styled';
import PaginatedItems from '../Paginator/Paginator';

const FavoriteCocktails = () => {
  const yourCocktail = useSelector(selectFavoriteDrinks) && datas;

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
    <PaginatedItems
      items={yourCocktail}
      destination="favorite"
      ListComponent={CocktailList}
      itemsPerPageValue={{ mobile: 9, tablet: 8, desktop: 9, default: 9 }}
    />
  );
};

export default FavoriteCocktails;
