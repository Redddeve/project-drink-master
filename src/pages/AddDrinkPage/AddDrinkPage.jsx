import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { StyledSubmitBtn } from './AddDrinkPage.styled';
import { useDispatch, useSelector } from 'react-redux';
import {
  addOwnDrinkThunk,
  getPopularThunk,
} from '../../redux/drinks/operations';
import { useNavigate } from 'react-router-dom';
import ButtonUpToTop from '../../components/ButtonUpToTop/ButtonUpToTop';

import PageTitle from '../../components/PageTitle/PageTitle';
import AddFormMain from '../../components/AddFormMain/AddFormMain';
import AddFormIngredients from '../../components/AddFormIngredients/AddFormIngredients';
import AddFormDesc from '../../components/AddFormDesc/AddFormDesc';
import PopularDrinks from '../../components/PopularDrinks/PopularDrinks';
import { selectTheme } from '../../redux/theme/selectors';

const AddDrinkPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPopularThunk());
  }, [dispatch]);

  const navigate = useNavigate();
  const theme = useSelector(selectTheme);
  const {
    register,
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const [ingNumber, setIngNumber] = useState([0, 1]);

  const onSubmit = data => {
    const ingredientsArray = ingNumber.map((el, index) => ({
      [`title`]: data[`Ingredients${index}`].value,
      [`measure`]: data[`IngNumber${index}`],
    }));
    const dataToSend = new FormData();
    ingredientsArray.forEach((ingredient, index) => {
      dataToSend.append(`ingredients[${index}][title]`, ingredient.title);
      dataToSend.append(`ingredients[${index}][measure]`, ingredient.measure);
    });
    if (data.photo) {
      dataToSend.append('drinkThumb', data.photo);
    }
    dataToSend.append('category', data.category.label);
    dataToSend.append('glass', data.glass.label);
    dataToSend.append('description', data.recipeDesc);
    dataToSend.append('instructions', data.aboutRecipe);
    dataToSend.append('alcoholic', data.alcohol);
    dataToSend.append('drink', data.itemTitle);

    dispatch(addOwnDrinkThunk(dataToSend))
      .unwrap()
      .then(() => navigate('/my'))
      .catch(error => console.log(error));
  };

  return (
    <>
      <PageTitle title="Add drink" />

      <div>
        <AddFormMain
          register={register}
          control={control}
          setValue={setValue}
          handleSubmit={handleSubmit}
          errors={errors}
          onSubmit={onSubmit}
          theme={theme}
        ></AddFormMain>

        <AddFormIngredients
          ingNumber={ingNumber}
          setIngNumber={setIngNumber}
          register={register}
          control={control}
          handleSubmit={handleSubmit}
          errors={errors}
          onSubmit={onSubmit}
          theme={theme}
        />

        <AddFormDesc
          register={register}
          control={control}
          handleSubmit={handleSubmit}
          errors={errors}
          onSubmit={onSubmit}
          theme={theme}
        />

        <StyledSubmitBtn
          type="button"
          onClick={handleSubmit(onSubmit)}
          theme={theme}
        >
          Add
        </StyledSubmitBtn>
      </div>
      <PopularDrinks />
      <ButtonUpToTop theme={theme} />
    </>
  );
};

export default AddDrinkPage;
