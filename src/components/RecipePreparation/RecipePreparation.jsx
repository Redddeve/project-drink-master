import PropTypes from 'prop-types';
import {
  StyledDiv,
  StyledImgDiv,
  StyledText,
  StyledTitle,
} from './RecipePreparation.styled';
const RecipePreparation = ({ description }) => {
  return (
    <div>
      <StyledTitle>Recipe Preparation</StyledTitle>
      <StyledDiv>
        <StyledImgDiv></StyledImgDiv>
        <StyledText>{description}</StyledText>
      </StyledDiv>
    </div>
  );
};
RecipePreparation.propTypes = {
  description: PropTypes.string.isRequired,
};
export default RecipePreparation;
