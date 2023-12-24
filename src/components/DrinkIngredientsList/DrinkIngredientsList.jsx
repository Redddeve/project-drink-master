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
import { selectTheme } from '../../redux/theme/selectors';
const DrinkIngredientsList = ({ ingredientsArray }) => {
  const theme = useSelector(selectTheme);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getIngredientsThunk());
  }, [dispatch]);
  const ingredientsState = useSelector(selectIngredients);

  const isMobile = window.innerWidth < 768;
  const isTablet = window.innerWidth >= 768 && window.innerWidth < 1440;

  const imgSrc = title => {
    if (ingredientsState.length !== 0) {
      return ingredientsState?.find(el => title.toLowerCase() === el.title.toLowerCase())[
        isMobile ? 'thumbSmall' : isTablet ? 'thumbMedium' : 'ingredientThumb'
      ];
    }
  };

  return (
    <div>
      <StyledTitle theme={theme}>Ingredients</StyledTitle>
      <StyledList>
        {ingredientsArray?.map(({ title, measure }) => {
          return (
            <StyledItem key={title}>
              <StyledImgDiv>
                <StyledImg src={imgSrc(title)} alt={title} />
              </StyledImgDiv>
              <StyledTextDiv>
                <StyledTextTitle theme={theme}>{title}</StyledTextTitle>
                <StyledTextMeasure theme={theme}>{measure}</StyledTextMeasure>
              </StyledTextDiv>
            </StyledItem>
          );
        })}
      </StyledList>
    </div>
  );
};
DrinkIngredientsList.propTypes = {
  ingredientsArray: PropTypes.array,
};
export default DrinkIngredientsList;
