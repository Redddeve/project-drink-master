import { useDispatch, useSelector } from 'react-redux';
import { selectIngredients } from '../../redux/drinks/selectors';
import PropTypes from 'prop-types';

import { useEffect } from 'react';
import { getIngredientsThunk } from '../../redux/drinks/operations';
import {
  StyledImg,
  StyledImgDiv,
  StyledItem,
  StyledList,
  StyledTextDiv,
  StyledTextMeasure,
  StyledTextTitle,
  StyledTitle,
} from './DrinkIngredientsList.styled';
const DrinkIngredientsList = ({ ingredientsArray }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getIngredientsThunk());
  }, [dispatch]);
  const ingredientsState = useSelector(selectIngredients);

  return (
    <div>
      <StyledTitle>Ingredients</StyledTitle>
      <StyledList>
        {ingredientsArray.map(({ _id, title, measure }) => {
          return (
            <StyledItem key={title}>
              <StyledImgDiv>
                <StyledImg
                  src={ingredientsState?.find(el => _id === el._id)?.thumbSmall}
                  alt={title}
                />
              </StyledImgDiv>
              <StyledTextDiv>
                <StyledTextTitle>{title}</StyledTextTitle>
                <StyledTextMeasure>{measure}</StyledTextMeasure>
              </StyledTextDiv>
            </StyledItem>
          );
        })}
      </StyledList>
    </div>
  );
};
DrinkIngredientsList.propTypes = {
  ingredientsArray: PropTypes.array.isRequired,
};
export default DrinkIngredientsList;
