import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { selectTheme } from '../../redux/theme/selectors';
import { StyledIngTitle } from '../AddFormIngredients/AddFormIngredients.styled.js';
import {
  StyledDescInput,
  RelativeLabel,
  StyledValidationText,
} from '../../pages/AddDrinkPage/AddDrinkPage.styled';

const AddFormDesc = ({ register, handleSubmit, errors, onSubmit }) => {
  const theme = useSelector(selectTheme);
  return (
    <form onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">
      <RelativeLabel>
        <StyledIngTitle theme={theme}>Recipe Preparation</StyledIngTitle>
        <StyledDescInput
          theme={theme}
          type="text"
          {...register('recipeDesc', { required: true })}
          placeholder="Enter the recipe"
          minLength={7}
        />
        {errors.recipeDesc && (
          <StyledValidationText>
            This field is required and must contain minimum 7 symbols
          </StyledValidationText>
        )}
      </RelativeLabel>
    </form>
  );
};
AddFormDesc.propTypes = {
  register: PropTypes.func.isRequired,
  control: PropTypes.object.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  onSubmit: PropTypes.func.isRequired,
};
export default AddFormDesc;
