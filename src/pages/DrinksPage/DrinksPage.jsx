import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import sprite from '../../images/sprite.svg';
import usual from '../../images/blue-iced-tea@1x.png';
import retina from '../../images/blue-iced-tea@2x.png';
import {
  selectCategories,
  selectIngredients,
  selectSearchDrinks,
} from '../../redux/drinks/selectors.js';
import {
  getCategoriesThunk,
  getIngredientsThunk,
  searchDrinksThunk,
} from '../../redux/drinks/operations.js';
import {
  StyledCardsContainer,
  StyledFilterContainer,
  StyledInput,
  StyledSelect,
  StyledSvg,
  stylesDrink,
} from './DrinksPage.styled';
import ButtonUpToTop from '../../components/ButtonUpToTop/ButtonUpToTop.jsx';
import { selectTheme } from '../../redux/theme/selectors.js';
import PageTitle from '../../components/PageTitle/PageTitle.jsx';
import { EmptyDescription } from '../../components/FavoriteCocktails/FavoriteCocktails.styled.js';
import { DrinkCard } from '../../components/DrinkCard/DrinkCard.jsx';
import {
  EmptyFavoritesContainer,
  EmptyFavoritesImage,
} from '../../components/FavoriteCocktails/FavoriteCocktails.styled.js';

const DrinksPage = () => {
  const dispatch = useDispatch();
  const drinks = useSelector(selectSearchDrinks);
  const ingredients = useSelector(selectIngredients);
  const categories = useSelector(selectCategories);
  const theme = useSelector(selectTheme);
  const [name, setName] = useState('');
  const [ingredient, setIngredient] = useState('');
  const [category, setCategory] = useState('');
  const [ingredientMenuIsOpen, setIngredientMenuIsOpen] = useState(false);
  const [categoryMenuIsOpen, setCategoryMenuIsOpen] = useState(false);

  useEffect(() => {
    dispatch(getCategoriesThunk());
    dispatch(getIngredientsThunk());
  }, [dispatch]);

  useEffect(() => {
    dispatch(
      searchDrinksThunk({ drink: name, ingredients: ingredient, category })
    );
  }, [name, ingredient, category, dispatch]);

  const ingredientsOptions = ingredients?.map(ing => {
    return { value: ing.title, label: ing.title };
  });
  const categoriesOptions = categories?.map(cat => {
    return { value: cat, label: cat };
  });

  return (
    <>
      <PageTitle title={'Drinks'} />
      <StyledFilterContainer>
        <form
          action=""
          onSubmit={e => {
            e.preventDefault();
            setName(e.currentTarget.name.value);
          }}
        >
          <StyledInput theme={theme} placeholder="Enter the text" name="name" />
        </form>
        <StyledSvg theme={theme}>
          <use href={`${sprite}#icon-search`} />
        </StyledSvg>
        <StyledSelect
          theme={theme}
          classNamePrefix={'Select'}
          options={categoriesOptions}
          placeholder={'All categories'}
          isSearchable={false}
          onChange={value => {
            setCategory(value.label);
          }}
          onMenuOpen={() => setCategoryMenuIsOpen(true)}
          onMenuClose={() => {
            setCategoryMenuIsOpen(false);
          }}
          $menuIsOpen={categoryMenuIsOpen}
          styles={stylesDrink}
        />
        <StyledSelect
          theme={theme}
          classNamePrefix={'Select'}
          options={ingredientsOptions}
          placeholder={'Ingredients'}
          onChange={value => {
            setIngredient(value.label);
          }}
          onMenuOpen={() => setIngredientMenuIsOpen(true)}
          onMenuClose={() => {
            setIngredientMenuIsOpen(false);
          }}
          $menuIsOpen={ingredientMenuIsOpen}
          styles={stylesDrink}
          $small={true}
        />
      </StyledFilterContainer>
      <StyledCardsContainer>
        {drinks.length !== 0 ? (
          drinks?.map(drink => {
            return (
              <DrinkCard
                key={drink._id}
                drink={drink}
                // detailed={false}
              />
            );
          })
        ) : (
          <EmptyFavoritesContainer>
            <EmptyFavoritesImage
              srcSet={`${usual} 1x, ${retina} 2x`}
              alt="Cocktail"
            />
            <EmptyDescription>
              No cocktails found by your request
            </EmptyDescription>
          </EmptyFavoritesContainer>
        )}
      </StyledCardsContainer>
      <ButtonUpToTop />
    </>
  );
};

export default DrinksPage;
