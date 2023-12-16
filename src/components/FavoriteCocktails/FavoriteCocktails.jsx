import CocktailList from "../CocktailList/CocktailList";
import usual from "../../images/blue-iced-tea@1x.png";
import retina from "../../images/blue-iced-tea@2x.png";

import {
  EmptyDescription,
  EmptyFavoritesContainer,
  EmptyFavoritesImage,
} from "./FavoriteCocktails.styled";

const FavoriteCocktails = () => {
  const yourCocktail = [];

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
    <CocktailList cocktailData={yourCocktail} />
  );
};

export default FavoriteCocktails;
