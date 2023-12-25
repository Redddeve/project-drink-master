import {
  StyledFilterContainer,
  StyledInput,
  StyledSelect,
  StyledSvg,
  stylesDrink,
} from './SearchFilterContainer.styled.js';
import sprite from '../../images/sprite.svg';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectCategories,
  selectIngredients,
} from '../../redux/drinks/selectors.js';
import {
  getCategoriesThunk,
  getIngredientsThunk,
  searchDrinksThunk,
} from '../../redux/drinks/operations.js';
import { useEffect, useState } from 'react';
import { selectTheme } from '../../redux/theme/selectors.js';
import useResponsiveItemsPerPage from '../../hooks/usePerPage.jsx';

export const SearchFilterContainer = () => {
  const dispatch = useDispatch();
  const ingredients = useSelector(selectIngredients);
  const categories = useSelector(selectCategories);
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

  const dispatchSearch = () => {
    dispatch(
      searchDrinksThunk({
        drink: name,
        ingredients: ingredient,
        category: category,
        itemsPerPage,
      })
    );
  };

  useEffect(() => {
    dispatch(getCategoriesThunk());
    dispatch(getIngredientsThunk());
    dispatch(
      searchDrinksThunk({
        drink: '',
        ingredients: '',
        category: '',
        itemsPerPage,
      })
    );
  }, [dispatch, itemsPerPage]);

  const ingredientsOptions = ingredients?.map(ing => {
    return { value: ing.title, label: ing.title };
  });
  const categoriesOptions = categories?.map(cat => {
    return { value: cat, label: cat };
  });

  const handleCategoryChange = value => {
    if (value) {
      setCategory(value.value);
      dispatch(
        searchDrinksThunk({
          drink: name,
          ingredients: ingredient,
          category: value.value,
          itemsPerPage,
        })
      );
    } else {
      setCategory('');
      dispatch(
        searchDrinksThunk({
          drink: name,
          ingredients: ingredient,
          category: '',
          itemsPerPage,
        })
      );
    }
  };

  const handleIngredientChange = value => {
    if (value) {
      setIngredient(value.value);
      dispatch(
        searchDrinksThunk({
          drink: name,
          ingredients: value.value,
          category,
          itemsPerPage,
        })
      );
    } else {
      setIngredient('');
      dispatch(
        searchDrinksThunk({
          drink: name,
          ingredients: '',
          category,
          itemsPerPage,
        })
      );
    }
  };

  return (
    <StyledFilterContainer>
      <StyledInput
        theme={theme}
        placeholder="Enter the text"
        onChange={e => setName(e.currentTarget.value)}
        onBlur={e =>
          dispatch(
            searchDrinksThunk({
              drink: e.currentTarget.value,
              ingredients: ingredient,
              category,
              itemsPerPage,
            })
          )
        }
        onKeyPress={key => {
          key.code === 'Enter' ? dispatchSearch() : null;
        }}
      />
      <StyledSvg theme={theme}>
        <use href={`${sprite}#icon-search`} />
      </StyledSvg>
      <StyledSelect
        theme={theme}
        classNamePrefix={'Select'}
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
        styles={stylesDrink}
      />
      <StyledSelect
        theme={theme}
        classNamePrefix={'Select'}
        options={ingredientsOptions}
        placeholder={'Ingredients'}
        isClearable={true}
        onChange={handleIngredientChange}
        onMenuOpen={() => setIngredientMenuIsOpen(true)}
        onMenuClose={() => {
          setIngredientMenuIsOpen(false);
        }}
        $menuIsOpen={ingredientMenuIsOpen}
        styles={stylesDrink}
        $small={true}
      />
    </StyledFilterContainer>
  );
};
