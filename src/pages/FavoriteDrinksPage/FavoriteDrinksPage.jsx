import FavoriteCocktails from "../../components/FavoriteCocktails/FavoriteCocktails";

import { FavoriteTitle } from "./FavoriteDrinksPage.styled";

const FavoriteDrinksPage = () => {
  return (
    <section>
      <FavoriteTitle>Favorites</FavoriteTitle>
      <FavoriteCocktails />
    </section>
  );
};

export default FavoriteDrinksPage;
