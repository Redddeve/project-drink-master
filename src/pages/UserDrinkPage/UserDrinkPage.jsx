import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  addFavoriteDrinkThunk,
  getDrinkbyIdThunk,
  getFavoriteDrinksThunk,
  removeFavoriteDrinkThunk,
} from '../../redux/drinks/operations.js';
import {
  selectDrinkById,
  selectFavoriteDrinks,
} from '../../redux/drinks/selectors.js';
import {
  StyledAddToFavButton,
  StyledDrinkDesc,
  StyledDrinkHeader,
  StyledDrinkHero,
  StyledDrinkImage,
  StyledDrinkType,
} from './UserDrinkPage.styled.js';
import DrinkIngredientsList from '../../components/DrinkIngredientsList/DrinkIngredientsList.jsx';
import RecipePreparation from '../../components/RecipePreparation/RecipePreparation.jsx';

const UserDrinkPage = () => {
  const { drinkId } = useParams();
  const dispatch = useDispatch();

  const drink = useSelector(selectDrinkById);
  const favorites = useSelector(selectFavoriteDrinks);
  const [isFavorite, setIsFavorite] = useState(false);

  const handleAddToFav = () => {
    dispatch(addFavoriteDrinkThunk(drinkId));
  };
  const handleRemoveFromFav = () => {
    dispatch(removeFavoriteDrinkThunk(drinkId));
  };

  useEffect(() => {
    dispatch(getFavoriteDrinksThunk());
    dispatch(getDrinkbyIdThunk(drinkId));
  }, [dispatch, drinkId]);

  useEffect(() => {
    setIsFavorite(!!favorites?.find(dr => dr.id === drink.id));
  }, [favorites, drink.id]);

  return (
    <>
      <StyledDrinkHero>
        <div>
          <StyledDrinkHeader>{drink.drink}</StyledDrinkHeader>
          <StyledDrinkType>{`${drink.glass} / ${drink.alcoholic}`}</StyledDrinkType>
          <StyledDrinkDesc>{drink.description}</StyledDrinkDesc>
          <StyledAddToFavButton
            onClick={isFavorite ? handleRemoveFromFav : handleAddToFav}
          >
            {isFavorite
              ? 'Remove from favorite drinks'
              : 'Add to favorite drinks'}
          </StyledAddToFavButton>
        </div>
        <StyledDrinkImage src={drink.drinkThumb} />
      </StyledDrinkHero>

      <DrinkIngredientsList ingredientsArray={drink ? drink.ingredients : []} />

      <RecipePreparation instructions={drink.instructions} />
    </>
  );
};

export default UserDrinkPage;
