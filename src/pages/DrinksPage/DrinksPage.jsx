import { DrinkCard } from '../../components/DrinkCard/DrinkCard.jsx';
import {
  StyledCardsContainer,
  StyledFilterContainer,
  StyledHeader,
  StyledInput,
  StyledSelect,
  StyledSvg,
  stylesDrink,
} from './DrinksPage.styled';
import sprite from '../../images/sprite.svg';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectCategories,
  selectIngredients,
  selectSearchDrinks,
} from '../../redux/drinks/selectors.js';
import { useEffect, useState } from 'react';
import {
  getCategoriesThunk,
  getIngredientsThunk,
  searchDrinksThunk,
} from '../../redux/drinks/operations.js';
import ButtonUpToTop from '../../components/ButtonUpToTop/ButtonUpToTop.jsx';

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

  const ingredientsOptions = ingredients.map(ing => {
    return { value: ing.title, label: ing.title };
  });
  const categoriesOptions = categories.map(cat => {
    return { value: cat, label: cat };
  });

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
        <StyledSelect
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
          classNamePrefix={'Select'}
          options={ingredientsOptions}
          placeholder={'Ingredients'}
          isSearchable={false}
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
        {drinks.map(drink => {
          return (
            <DrinkCard
              key={drink._id.$oid}
              drink={drink}
              // detailed={false}
            />
          );
        })}
      </StyledCardsContainer>
      <ButtonUpToTop />
    </>
  );
};

export default DrinksPage;
