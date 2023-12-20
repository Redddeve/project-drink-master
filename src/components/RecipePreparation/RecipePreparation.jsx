import PropTypes from 'prop-types';
import {
  StyledDiv,
  StyledImgDiv,
  StyledText,
  StyledTitle,
} from './RecipePreparation.styled';
const RecipePreparation = ({ instructions }) => {
  return (
    <div>
      <StyledTitle>Recipe Preparation</StyledTitle>
      <StyledDiv>
        <StyledImgDiv></StyledImgDiv>
        <StyledText>{instructions}</StyledText>
      </StyledDiv>
    </div>
  );
};
RecipePreparation.propTypes = {
  instructions: PropTypes.string,
};
export default RecipePreparation;
