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

const AddFormMain = ({
  category,
  setCategory,
  glass,
  setGlass,
  register,
  control,
  handleSubmit,
  errors,
  onSubmit,
}) => {
  const dispatch = useDispatch();
  const glassesState = useSelector(selectGlasses);
  const categoryState = useSelector(selectCategories);
  const isAdult = useSelector(selectIsAdult);
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
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <StyledInfoDiv>
        <StyledFileLabel style={{ backgroundImage: `url(${imagePreview})` }}>
          <StyledFileInput
            type="file"
            {...register('photo')}
            onChange={handleFileChange}
          />
          {!imagePreview && (
            <StyledFileDiv>
              <StyledFileTextPlus>+</StyledFileTextPlus>
              <StyledFileTextAdd>Add image</StyledFileTextAdd>
            </StyledFileDiv>
          )}
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
              <StyledValidText>About recipe field is required.</StyledValidText>
            )}
          </RelativeLabel>
          <StyledSelectLabel>
            <p>Category</p>

            <Controller
              name="category"
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
              rules={{ required: 'Category field is required' }}
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
              rules={{ required: 'Glass field is required' }}
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
                defaultChecked
              />
              <p>Non alcoholic</p>
            </StyledRadioLabel>
            {isAdult && (
              <StyledRadioLabel>
                <input
                  type="radio"
                  name="alcohol"
                  value={'Alcoholic'}
                  {...register('alcohol', { required: true })}
                />
                <p>Alcoholic</p>
              </StyledRadioLabel>
            )}
          </StyledRadioLabelDiv>
        </div>
      </StyledInfoDiv>
    </form>
  );
};
AddFormMain.propTypes = {
  category: PropTypes.string.isRequired,
  glass: PropTypes.string.isRequired,
  setCategory: PropTypes.func.isRequired,
  setGlass: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  control: PropTypes.object.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  onSubmit: PropTypes.func.isRequired,
};
export default AddFormMain;
