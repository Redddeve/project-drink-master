import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import Select from 'react-select';
import { selectCategories, selectGlasses } from '../../redux/drinks/selectors';
import { selectIsAdult } from '../../redux/auth/selectors';
import { useEffect, useState } from 'react';
import {
  StyledFileInput,
  StyledFileLabel,
  StyledInfoDiv,
  StyledRadioLabel,
  StyledRadioLabelDiv,
  StyledSelectLabel,
  StyledTitleInput,
  StyledFileDiv,
  StyledFileTextPlus,
  StyledFileTextAdd,
  StyledRadioTest,
  StyledInputSelectText,
  Input,
} from './AddFormMain.styled';
import {
  stylesSelect,
  StyledValidText,
  RelativeLabel,
} from '../../pages/AddDrinkPage/AddDrinkPage.styled';
import {
  getCategoriesThunk,
  getGlassesThunk,
} from '../../redux/drinks/operations';
import { Controller } from 'react-hook-form';
import { selectTheme } from '../../redux/theme/selectors';

const AddFormMain = ({
  register,
  control,
  handleSubmit,
  setValue,
  errors,
  onSubmit,
}) => {
  const dispatch = useDispatch();
  const glassesState = useSelector(selectGlasses);
  const categoryState = useSelector(selectCategories);
  const isAdult = useSelector(selectIsAdult);
  const theme = useSelector(selectTheme);
  const [imagePreview, setImagePreview] = useState('');
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [glassMenuIsOpen, setGlassMenuIsOpen] = useState();

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

  const glassOptions = glassesState?.map(el => {
    return { label: el, value: el };
  });
  const categoryOptions = categoryState?.map(el => {
    return { label: el, value: el };
  });

  useEffect(() => {
    dispatch(getGlassesThunk());
  }, [dispatch]);
  useEffect(() => {
    dispatch(getCategoriesThunk());
  }, [dispatch]);

  const handleFileChange = e => {
    const file = e.target.files[0];
    setValue('photo', file);
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">
      <StyledInfoDiv>
        <StyledFileLabel
          theme={theme}
          style={{ backgroundImage: `url(${imagePreview})` }}
        >
          <StyledFileInput
            theme={theme}
            type="file"
            accept=".png, .jpeg, .jpg"
            {...register('photo')}
            onChange={handleFileChange}
          />
          {!imagePreview && (
            <StyledFileDiv theme={theme}>
              <StyledFileTextPlus theme={theme}>+</StyledFileTextPlus>
              <StyledFileTextAdd theme={theme}>Add image</StyledFileTextAdd>
            </StyledFileDiv>
          )}
        </StyledFileLabel>
        <div>
          <RelativeLabel theme={theme}>
            <StyledTitleInput
              theme={theme}
              type="text"
              {...register('itemTitle', { required: true })}
              placeholder="Enter item title"
            />
            {errors.itemTitle && (
              <StyledValidText theme={theme}>
                Item title is required.
              </StyledValidText>
            )}
          </RelativeLabel>
          <RelativeLabel>
            <StyledTitleInput
              theme={theme}
              type="text"
              {...register('aboutRecipe', { required: true })}
              placeholder="Enter about recipe"
            />
            {errors.aboutRecipe && (
              <StyledValidText>About recipe field is required.</StyledValidText>
            )}
          </RelativeLabel>
          <StyledSelectLabel theme={theme}>
            <StyledInputSelectText theme={theme}>
              Category
            </StyledInputSelectText>

            <Controller
              name="category"
              control={control}
              render={({ field }) => (
                <Select
                  {...field}
                  styles={styles}
                  options={categoryOptions}
                  isSearchable={false}
                  onChange={val => {
                    field.onChange(val);
                  }}
                  theme={theme}
                  menuIsOpen={menuIsOpen}
                  onMenuOpen={() => setMenuIsOpen(true)}
                  onMenuClose={() => setMenuIsOpen(false)}
                />
              )}
              rules={{ required: 'Category field is required' }}
            />
            {errors.category && (
              <StyledValidText>{errors.category.message}</StyledValidText>
            )}
          </StyledSelectLabel>
          <StyledSelectLabel theme={theme}>
            <StyledInputSelectText theme={theme}>Glass</StyledInputSelectText>
            <Controller
              name="glass"
              control={control}
              render={({ field }) => (
                <Select
                  styles={glassStyles}
                  {...field}
                  options={glassOptions}
                  onChange={val => {
                    field.onChange(val);
                  }}
                  theme={theme}
                  menuIsOpen={glassMenuIsOpen}
                  onMenuOpen={() => setGlassMenuIsOpen(true)}
                  onMenuClose={() => setGlassMenuIsOpen(false)}
                />
              )}
              rules={{ required: 'Glass field is required' }}
            />
            {errors.glass && (
              <StyledValidText>{errors.glass.message}</StyledValidText>
            )}
          </StyledSelectLabel>
          <StyledRadioLabelDiv>
            <StyledRadioLabel theme={theme}>
              <Input
                type="radio"
                value={'Non alcoholic'}
                name="alcohol"
                {...register('alcohol', { required: true })}
                defaultChecked
              />
              <StyledRadioTest theme={theme}>Non alcoholic</StyledRadioTest>
            </StyledRadioLabel>
            {isAdult && (
              <StyledRadioLabel theme={theme}>
                <Input
                  type="radio"
                  name="alcohol"
                  value={'Alcoholic'}
                  {...register('alcohol', { required: true })}
                />
                <StyledRadioTest theme={theme}>Alcoholic</StyledRadioTest>
              </StyledRadioLabel>
            )}
          </StyledRadioLabelDiv>
        </div>
      </StyledInfoDiv>
    </form>
  );
};
AddFormMain.propTypes = {
  register: PropTypes.func.isRequired,
  control: PropTypes.object.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  setValue: PropTypes.func,
  onSubmit: PropTypes.func.isRequired,
};
export default AddFormMain;
