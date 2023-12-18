import { useEffect, useState } from 'react';
import Select from 'react-select';
import { Controller, useForm } from 'react-hook-form';
import sprite from '../../images/sprite.svg';
import {
  StyledAddBtn,
  StyledAddDiv,
  StyledAddTitle,
  StyledAfterContent,
  StyledDescInput,
  StyledFileInput,
  StyledFileLabel,
  StyledInfoDiv,
  StyledIngDiv,
  StyledIngFieldBtn,
  StyledIngFieldInput,
  StyledIngFieldLabel,
  StyledIngFieldWrapper,
  StyledIngTitle,
  StyledIngTitleDiv,
  StyledRadioLabel,
  StyledRadioLabelDiv,
  StyledSelectLabel,
  StyledSubmitBtn,
  StyledTitleInput,
  stylesSelect,
  ingStyles,
  StyledValidText,
  RelativeLabel,
} from './AddDrinkPage.styled';

import { useDispatch, useSelector } from 'react-redux';
import {
  addOwnDrinkThunk,
  getCategoriesThunk,
  getGlassesThunk,
  getIngredientsThunk,
} from '../../redux/drinks/operations';
import {
  selectCategories,
  selectGlasses,
  selectIngredients,
} from '../../redux/drinks/selectors';

const AddDrinkPage = () => {
  const dispatch = useDispatch();
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [ingNumber, setIngNumber] = useState([1, 2, 3]);
  const [category, setCategory] = useState('Cocktail');
  const [glass, setGlass] = useState('Highball glass');
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [glassMenuIsOpen, setGlassMenuIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    Ingredients: [],
    aboutRecipe: '',
    itemTitle: '',
    photo: '',
    category: '',
    glass: '',
    recipeDesc: '',
    alcohol: 'Non alcoholic',
  });

  useEffect(() => {
    dispatch(getGlassesThunk());
  }, [dispatch]);
  useEffect(() => {
    dispatch(getCategoriesThunk());
  }, [dispatch]);
  useEffect(() => {
    dispatch(getIngredientsThunk());
  }, [dispatch]);
  const glassesState = useSelector(selectGlasses);
  const categoryState = useSelector(selectCategories);
  const ingredientsState = useSelector(selectIngredients);
  const categoryOptions = categoryState[0]?.categories.map(el => {
    return { label: el, value: el };
  });

  const ingOptions = ingredientsState?.map(({ title }) => {
    return { label: title, value: title };
  });
  const glassOptions = glassesState[0]?.glasses.map(el => {
    return { label: el, value: el };
  });
  // ****   STYLES FOR SELECT  ****
  const styles = {
    ...stylesSelect,
    dropdownIndicator: provided => ({
      ...provided,
      transition: 'transform 0.2s ease',
      transform: menuIsOpen ? 'rotate(180deg)' : null,
    }),
  };
  const glassStyles = {
    ...stylesSelect,
    dropdownIndicator: provided => ({
      ...provided,
      transition: 'transform 0.2s ease',
      transform: glassMenuIsOpen ? 'rotate(180deg)' : null,
    }),
  };

  // ****   STYLES FOR SELECT  ****

  const addIngField = e => {
    e.preventDefault();
    setIngNumber([...ingNumber, ingNumber.length + 1]);
  };

  const deleteIngField = e => {
    e.preventDefault();
    const newNumber = ingNumber.slice(0, ingNumber.length - 1);
    setIngNumber(newNumber);
  };

  const deleteIng = (e, index) => {
    e.preventDefault();

    const newNumbers = formData.Ingredients.filter((_, i) => i !== index);
    setFormData({ ...formData, Ingredients: newNumbers });
  };

  const onSubmit = data => {
    const ingredientsArray = ingNumber.map((el, index) => ({
      [`title`]: data[`Ingredients${index}`].value,
      [`measure`]: data[`IngNumber${index}`],
    }));

    setFormData({
      ...data,
      Ingredients: ingredientsArray,
      glass: glass,
      category: category,
    });
    dispatch(
      addOwnDrinkThunk({
        ingredients: ingredientsArray,
        glass: glass,
        category: category,
        instructions: data.aboutRecipe,
        drink: data.itemTitle,
        photo: data.photo,
        description: data.recipeDesc,
        alcoholic: data.alcohol,
      })
    );
  };
  const selectValidation = { required: 'This field is required' };
  return (
    <div>
      <StyledAddTitle>Add drink</StyledAddTitle>
      <form onSubmit={handleSubmit(onSubmit)}>
        <StyledInfoDiv>
          <StyledFileLabel>
            <StyledFileInput
              type="file"
              {...register('photo')}
              onChange={e => console.log(e.target.value)}
            />
          </StyledFileLabel>
          <div>
            <RelativeLabel>
              <StyledTitleInput
                type="text"
                {...register('itemTitle', { required: true })}
                placeholder="Enter item title"
              />
              {errors.itemTitle && (
                <StyledValidText>Item title is required.</StyledValidText>
              )}
            </RelativeLabel>
            <RelativeLabel>
              <StyledTitleInput
                type="text"
                {...register('aboutRecipe', { required: true })}
                placeholder="Enter about recipe"
              />
              {errors.aboutRecipe && (
                <StyledValidText>
                  About recipe field is required.
                </StyledValidText>
              )}
            </RelativeLabel>
            <StyledSelectLabel>
              <p>Category</p>

              <Controller
                name="glass"
                control={control}
                render={({ field }) => (
                  <Select
                    {...field}
                    styles={styles}
                    options={categoryOptions}
                    value={{ label: category, value: category }}
                    onChange={val => {
                      field.onChange(val);
                      setCategory(val.value);
                    }}
                    theme={theme => ({
                      ...theme,
                      colors: {
                        neutral50: '#fff',
                      },
                    })}
                    menuIsOpen={menuIsOpen}
                    onMenuOpen={() => setMenuIsOpen(true)}
                    onMenuClose={() => setMenuIsOpen(false)}
                  />
                )}
                rules={{ required: 'This field is required' }}
              />
              {errors.category && (
                <StyledValidText>{errors.category.message}</StyledValidText>
              )}
            </StyledSelectLabel>
            <StyledSelectLabel>
              <p>Glass</p>
              <Controller
                name="glass"
                control={control}
                render={({ field }) => (
                  <Select
                    styles={glassStyles}
                    {...field}
                    options={glassOptions}
                    value={{ label: glass, value: glass }}
                    onChange={val => {
                      field.onChange(val);
                      setGlass(val.value);
                    }}
                    theme={theme => ({
                      ...theme,
                      colors: {
                        neutral50: '#fff',
                      },
                    })}
                    menuIsOpen={glassMenuIsOpen}
                    onMenuOpen={() => setGlassMenuIsOpen(true)}
                    onMenuClose={() => setGlassMenuIsOpen(false)}
                  />
                )}
                rules={{ required: 'This field is required' }}
              />
              {errors.glass && (
                <StyledValidText>{errors.glass.message}</StyledValidText>
              )}
            </StyledSelectLabel>
            <StyledRadioLabelDiv>
              <StyledRadioLabel>
                <input
                  type="radio"
                  value={'Non alcoholic'}
                  name="alcohol"
                  {...register('alcohol', { required: true })}
                />
                <p>Non alcoholic</p>
              </StyledRadioLabel>
              <StyledRadioLabel>
                <input
                  type="radio"
                  name="alcohol"
                  value={'Alcoholic'}
                  {...register('alcohol', { required: true })}
                />
                <p>Alcoholic</p>
              </StyledRadioLabel>
              {errors.alcohol && (
                <StyledValidText>
                  At least one option must be selected.
                </StyledValidText>
              )}
            </StyledRadioLabelDiv>
          </div>
        </StyledInfoDiv>
        <StyledIngDiv>
          <StyledIngTitleDiv>
            <StyledIngTitle>Ingredients</StyledIngTitle>
            <StyledAddDiv>
              <StyledAddBtn
                onClick={e => {
                  deleteIngField(e);
                }}
                disabled={ingNumber.length <= 3}
              >
                -
              </StyledAddBtn>
              <p>{ingNumber.length}</p>
              <StyledAddBtn onClick={e => addIngField(e)}>+</StyledAddBtn>
            </StyledAddDiv>
          </StyledIngTitleDiv>

          {ingNumber.map((el, index) => {
            return (
              <StyledIngFieldLabel key={el}>
                <RelativeLabel>
                  <Controller
                    name={`Ingredients${index}`}
                    control={control}
                    render={({ field }) => (
                      <Select
                        styles={ingStyles}
                        {...field}
                        options={ingOptions}
                        theme={theme => ({
                          ...theme,
                          colors: {
                            neutral50: 'rgba(243, 243, 243, 0.8)',
                          },
                        })}
                      />
                    )}
                    rules={{ required: 'It is required' }}
                  />
                  {errors[`Ingredients${index}`] && (
                    <StyledValidText>
                      {errors[`Ingredients${index}`].message}
                    </StyledValidText>
                  )}
                </RelativeLabel>

                <StyledIngFieldWrapper>
                  <StyledIngFieldInput
                    type="number"
                    {...register(`IngNumber${index}`, {
                      maxLength: 3,
                      pattern: /^\d{0,3}$/,
                    })}
                  />
                  <StyledAfterContent>cl</StyledAfterContent>
                </StyledIngFieldWrapper>
                <StyledIngFieldBtn onClick={e => deleteIng(e, index)}>
                  <svg width="18" height="18">
                    <use
                      href={`${sprite}#icon-X`}
                      style={{
                        stroke: 'white',
                      }}
                    />
                  </svg>
                </StyledIngFieldBtn>
              </StyledIngFieldLabel>
            );
          })}
        </StyledIngDiv>
        <RelativeLabel>
          <StyledIngTitle>Recipe Preparation</StyledIngTitle>
          <StyledDescInput
            type="text"
            {...register('recipeDesc', { required: true })}
            placeholder="Enter the recipe"
            minLength={7}
          />
          {errors.recipeDesc && (
            <StyledValidText>
              This field is required and must contain minimum 7 symbols
            </StyledValidText>
          )}
        </RelativeLabel>
        <StyledSubmitBtn type="submit">Add</StyledSubmitBtn>
      </form>
    </div>
  );
};

export default AddDrinkPage;
