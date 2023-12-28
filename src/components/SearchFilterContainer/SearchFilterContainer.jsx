import {
  StyledFilterContainer,
  StyledInput,
  StyledSvg,
} from './SearchFilterContainer.styled.js';
import Select from 'react-select';
import sprite from '../../images/sprite.svg';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectCategories,
  selectIngredients,
  selectPage,
} from '../../redux/drinks/selectors.js';
import {
  getCategoriesThunk,
  getIngredientsThunk,
  searchDrinksThunk,
  setSearchPage,
} from '../../redux/drinks/operations.js';
import { useEffect, useState } from 'react';
import { selectTheme } from '../../redux/theme/selectors.js';
import useResponsiveItemsPerPage from '../../hooks/usePerPage.jsx';
import { drinkStyles, drinkIngStyles } from '../Dropdown/Dropdown.styled.js';

export const SearchFilterContainer = () => {
  const dispatch = useDispatch();
  const ingredients = useSelector(selectIngredients);
  const categories = useSelector(selectCategories);
  const page = useSelector(selectPage);
  const [name, setName] = useState('');
  const [ingredient, setIngredient] = useState('');
  const [category, setCategory] = useState('');
  const [ingredientMenuIsOpen, setIngredientMenuIsOpen] = useState(false);
  const [categoryMenuIsOpen, setCategoryMenuIsOpen] = useState(false);
  const theme = useSelector(selectTheme);

  const itemsPerPage = useResponsiveItemsPerPage({
    mobile: 10,
    tablet: 10,
    desktop: 9,
    default: 9,
  });

  useEffect(() => {
    dispatch(getCategoriesThunk());
    dispatch(getIngredientsThunk());
    dispatch(setSearchPage(1));
  }, [dispatch, itemsPerPage]);

  useEffect(() => {
    dispatch(
      searchDrinksThunk({
        drink: name,
        ingredients: ingredient,
        category,
        limit: itemsPerPage,
        page,
      })
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  const ingredientsOptions = ingredients?.map(ing => {
    return { value: ing.title, label: ing.title };
  });
  const categoriesOptions = categories?.map(cat => {
    return { value: cat, label: cat };
  });

  const handleCategoryChange = value => {
    if (value) {
      setCategory(value.value);
      dispatch(setSearchPage(1));
      dispatch(
        searchDrinksThunk({
          drink: name,
          ingredients: ingredient,
          category: value.value,
          limit: itemsPerPage,
          page,
        })
      );
    } else {
      setCategory('');
      dispatch(setSearchPage(1));
      dispatch(
        searchDrinksThunk({
          drink: name,
          ingredients: ingredient,
          category: '',
          limit: itemsPerPage,
          page,
        })
      );
    }
  };

  const handleIngredientChange = value => {
    if (value) {
      setIngredient(value.value);
      dispatch(setSearchPage(1));
      dispatch(
        searchDrinksThunk({
          drink: name,
          ingredients: value.value,
          category,
          limit: itemsPerPage,
          page,
        })
      );
    } else {
      setIngredient('');
      dispatch(setSearchPage(1));
      dispatch(
        searchDrinksThunk({
          drink: name,
          ingredients: '',
          category,
          limit: itemsPerPage,
          page,
        })
      );
    }
  };

  const handleInputOnBlur = e => {
    if (e.currentTarget.value !== name) {
      setName(e.currentTarget.value);
      dispatch(
        searchDrinksThunk({
          drink: e.currentTarget.value,
          ingredients: ingredient,
          category,
          limit: itemsPerPage,
          page: 1,
        })
      );
      dispatch(setSearchPage(1));
    }
  };

  const handleSumbit = e => {
    e.preventDefault();
    if (e.currentTarget.name.value !== name) {
      setName(e.currentTarget.name.value);
      dispatch(
        searchDrinksThunk({
          drink: e.currentTarget.name.value,
          ingredients: ingredient,
          category,
          limit: itemsPerPage,
          page: 1,
        })
      );
      dispatch(setSearchPage(1));
    }
  };

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

  return (
    <StyledFilterContainer>
      <form onSubmit={handleSumbit}>
        <StyledInput
          theme={theme}
          placeholder="Enter the text"
          onBlur={handleInputOnBlur}
          name="name"
        />
      </form>
      <StyledSvg theme={theme}>
        <use href={`${sprite}#icon-search`} />
      </StyledSvg>
      <Select
        options={categoriesOptions}
        placeholder={'All categories'}
        isSearchable={false}
        isClearable={true}
        onChange={handleCategoryChange}
        onMenuOpen={() => setCategoryMenuIsOpen(true)}
        onMenuClose={() => {
          setCategoryMenuIsOpen(false);
        }}
        $menuIsOpen={categoryMenuIsOpen}
        styles={newDrinkStyles}
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
        isClearable={true}
        onChange={handleIngredientChange}
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
  );
};
