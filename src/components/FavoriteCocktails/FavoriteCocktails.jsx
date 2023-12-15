import CocktailList from "../CocktailList/CocktailList";

import {
  EmptyDescription,
  EmptyFavoritesContainer,
  EmptyFavoritesImage,
} from "./FavoriteCocktails.styled";

const FavoriteCocktails = () => {
  const yourCocktail = [];

  return yourCocktail.length === 0 ? (
    <EmptyFavoritesContainer>
      <EmptyFavoritesImage src="" alt="Cocktail" />
      <EmptyDescription>
        You haven&rsquo;t added any favorite cocktails yet
      </EmptyDescription>
    </EmptyFavoritesContainer>
  ) : (
    <CocktailList cocktailData={yourCocktail} />
  );
};

export default FavoriteCocktails;
