import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import sprite from '../../images/sprite.svg';
import usual from '../../images/blue-iced-tea@1x.png';
import retina from '../../images/blue-iced-tea@2x.png';
import {
  drinkStyles,
  drinkIngStyles,
} from '../../components/Dropdown/Dropdown.styled.js';
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
  StyledHeader,
  StyledInput,
  StyledSvg,
} from './DrinksPage.styled';
import ButtonUpToTop from '../../components/ButtonUpToTop/ButtonUpToTop.jsx';
import { EmptyDescription } from '../../components/FavoriteCocktails/FavoriteCocktails.styled.js';
import { DrinkCard } from '../../components/DrinkCard/DrinkCard.jsx';
import {
  EmptyFavoritesContainer,
  EmptyFavoritesImage,
} from '../../components/FavoriteCocktails/FavoriteCocktails.styled.js';
import Select from 'react-select';

const DrinksPage = () => {
  const dispatch = useDispatch();
  const drinks = useSelector(selectSearchDrinks);
  const ingredients = useSelector(selectIngredients);
  const categories = useSelector(selectCategories);
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

  // *** SELECT STYLES ***
  const newDrinkStyles = {
    ...drinkStyles,
    dropdownIndicator: provided => ({
      ...provided,
      transition: 'transform 0.2s ease',
      transform: categoryMenuIsOpen ? 'rotate(180deg)' : null,
    }),
  };
  const newIngStyles = {
    ...drinkIngStyles,
    dropdownIndicator: provided => ({
      ...provided,
      transition: 'transform 0.2s ease',
      transform: ingredientMenuIsOpen ? 'rotate(180deg)' : null,
    }),
  };
  // *** SELECT STYLES ***

  return (
    <>
      <StyledHeader>Drinks</StyledHeader>
      <StyledFilterContainer>
        <form
          action=""
          onSubmit={e => {
            e.preventDefault();
            setName(e.currentTarget.name.value);
          }}
        >
          <StyledInput placeholder="Enter the text" name="name" />
        </form>
        <StyledSvg>
          <use href={`${sprite}#icon-search`} />
        </StyledSvg>
        <Select
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
          styles={newDrinkStyles}
          classNamePrefix={'Select'}
          theme={theme => ({
            ...theme,
            colors: {
              neutral50: '#fff',
            },
          })}
        />
        <Select
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
          styles={newIngStyles}
          $small={true}
          theme={theme => ({
            ...theme,
            colors: {
              neutral50: '#fff',
            },
          })}
        />
      </StyledFilterContainer>
      <StyledCardsContainer>
        {drinks.length !== 0 ? (
          drinks?.result.map(drink => {
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
