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
import { selectTheme } from '../../redux/theme/selectors.js';
import CircleBg from '../../components/SharedComponents/circleBg/CircleBg.jsx';

const UserDrinkPage = () => {
  const theme = useSelector(selectTheme);
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
    dispatch(getFavoriteDrinksThunk({ page: 1, itemsPerPage: 1000 }));
    dispatch(getDrinkbyIdThunk(drinkId));
    window.scrollTo({
      top: 0,
    });
  }, [dispatch, drinkId]);

  useEffect(() => {
    setIsFavorite(!!favorites?.find(dr => dr._id === drink._id));
  }, [drink, favorites]);

  return (
    <>
      <CircleBg />
      <StyledDrinkHero>
        <div>
          <StyledDrinkHeader theme={theme}>{drink.drink}</StyledDrinkHeader>
          <StyledDrinkType
            theme={theme}
          >{`${drink.glass} / ${drink.alcoholic}`}</StyledDrinkType>
          <StyledDrinkDesc theme={theme}>{drink.description}</StyledDrinkDesc>
          <StyledAddToFavButton
            theme={theme}
            onClick={isFavorite ? handleRemoveFromFav : handleAddToFav}
          >
            {isFavorite
              ? 'Remove from favorite drinks'
              : 'Add to favorite drinks'}
          </StyledAddToFavButton>
        </div>
        <StyledDrinkImage theme={theme} src={drink.drinkThumb} />
      </StyledDrinkHero>
      <DrinkIngredientsList
        theme={theme}
        ingredientsArray={drink ? drink.ingredients : []}
      />
      <RecipePreparation theme={theme} instructions={drink.instructions} />
    </>
  );
};

export default UserDrinkPage;
