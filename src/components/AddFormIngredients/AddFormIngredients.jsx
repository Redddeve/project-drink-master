import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import Select from 'react-select';
import { selectIngredients } from '../../redux/drinks/selectors';
import sprite from '../../images/sprite.svg';
import { useEffect, useState } from 'react';
import {
  ingStyles,
  RelativeLabel,
  StyledValidIng,
  StyledIngTitle,
} from '../../pages/AddDrinkPage/AddDrinkPage.styled';
import {
  StyledAddBtn,
  StyledAddDiv,
  StyledIconCross,
  StyledIngDiv,
  StyledIngFieldBtn,
  StyledIngFieldInput,
  StyledIngFieldLabel,
  StyledIngFieldWrapper,
  StyledIngTitleDiv,
  StyledIngredientsText,
} from './AddFormIngredients.styled';
import { getIngredientsThunk } from '../../redux/drinks/operations';
import { Controller } from 'react-hook-form';
import { selectTheme } from '../../redux/theme/selectors';

const AddFormIngredients = ({
  ingNumber,
  setIngNumber,
  register,
  control,
  handleSubmit,
  errors,
  onSubmit,
}) => {
  const theme = useSelector(selectTheme);
  const dispatch = useDispatch();
  const ingredientsState = useSelector(selectIngredients);
  const [ingCount, setIngCount] = useState(4);

  useEffect(() => {
    dispatch(getIngredientsThunk());
  }, [dispatch]);

  const ingOptions = ingredientsState?.map(({ title }) => {
    return { label: title, value: title };
  });

  const addIngField = e => {
    e.preventDefault();
    setIngNumber([...ingNumber, ingCount]);
    setIngCount(ingCount + 1);
  };

  const deleteIngField = e => {
    e.preventDefault();
    const newNumber = ingNumber.slice(0, ingNumber.length - 1);
    setIngNumber(newNumber);
  };

  const deleteIng = (e, index) => {
    e.preventDefault();
    if (ingNumber.length <= 3) {
      return;
    }
    const newNumber = ingNumber.filter(el => el !== index);
    setIngNumber(newNumber);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <StyledIngDiv>
        <StyledIngTitleDiv>
          <StyledIngTitle theme={theme}>Ingredients</StyledIngTitle>
          <StyledAddDiv theme={theme}>
            <StyledAddBtn
              theme={theme}
              onClick={e => {
                deleteIngField(e);
              }}
              disabled={ingNumber.length <= 3}
            >
              -
            </StyledAddBtn>
            <StyledIngredientsText theme={theme}>
              {ingNumber.length}
            </StyledIngredientsText>
            <StyledAddBtn theme={theme} onClick={e => addIngField(e)}>
              +
            </StyledAddBtn>
          </StyledAddDiv>
        </StyledIngTitleDiv>

        {ingNumber.map((el, index) => {
          return (
            <StyledIngFieldLabel theme={theme} key={ingNumber[index]}>
              <RelativeLabel>
                <Controller
                  name={`Ingredients${index}`}
                  control={control}
                  render={({ field }) => (
                    <Select
                      styles={ingStyles}
                      {...field}
                      options={ingOptions}
                      // theme={theme => ({
                      //   ...theme,
                      //   colors: {
                      //     neutral50: 'rgba(243, 243, 243, 0.8)',
                      //   },
                      // })}
                      theme={theme}
                    />
                  )}
                  rules={{ required: '!' }}
                />
                {errors[`Ingredients${index}`] && (
                  <StyledValidIng>
                    {errors[`Ingredients${index}`].message}
                  </StyledValidIng>
                )}
              </RelativeLabel>

              <StyledIngFieldWrapper theme={theme}>
                <StyledIngFieldInput
                  type="text"
                  placeholder="1 cl"
                  minLength={2}
                  {...register(`IngNumber${index}`)}
                  theme={theme}
                />
              </StyledIngFieldWrapper>
              <StyledIngFieldBtn theme={theme} onClick={e => deleteIng(e, el)}>
                <StyledIconCross width="18" height="18">
                  <use href={`${sprite}#icon-X`} />
                </StyledIconCross>
              </StyledIngFieldBtn>
            </StyledIngFieldLabel>
          );
        })}
      </StyledIngDiv>
    </form>
  );
};
AddFormIngredients.propTypes = {
  ingNumber: PropTypes.array.isRequired,
  setIngNumber: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  control: PropTypes.object.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  onSubmit: PropTypes.func.isRequired,
};
export default AddFormIngredients;
