import PropTypes from 'prop-types';

import {
  StyledDescInput,
  StyledIngTitle,
  StyledValidText,
  RelativeLabel,
} from '../../pages/AddDrinkPage/AddDrinkPage.styled';
const AddFormDesc = ({ register, handleSubmit, errors, onSubmit }) => {
  return (
    <form onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">
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
