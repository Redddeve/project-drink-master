import PropTypes from 'prop-types';
import {
  StyledDiv,
  StyledImgDiv,
  StyledText,
  StyledTitle,
} from './RecipePreparation.styled';
import { useSelector } from 'react-redux';
import { selectTheme } from '../../redux/theme/selectors';

const RecipePreparation = ({ instructions }) => {
  const theme = useSelector(selectTheme);
  return (
    <div>
      <StyledTitle theme={theme}>Recipe Preparation</StyledTitle>
      <StyledDiv>
        <StyledImgDiv></StyledImgDiv>
        <StyledText theme={theme}>{instructions}</StyledText>
      </StyledDiv>
    </div>
  );
};
RecipePreparation.propTypes = {
  instructions: PropTypes.string,
};
export default RecipePreparation;
