import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { StyledSubmitBtn } from './AddDrinkPage.styled';
import { useDispatch } from 'react-redux';
import {
  addOwnDrinkThunk,
  getCategoriesThunk,
  getGlassesThunk,
  getIngredientsThunk,
  getPopularThunk,
} from '../../redux/drinks/operations';
import { useNavigate } from 'react-router-dom';
import ButtonUpToTop from '../../components/ButtonUpToTop/ButtonUpToTop';

import PageTitle from '../../components/PageTitle/PageTitle';
import AddFormMain from '../../components/AddFormMain/AddFormMain';
import AddFormIngredients from '../../components/AddFormIngredients/AddFormIngredients';
import AddFormDesc from '../../components/AddFormDesc/AddFormDesc';
import PopularDrinks from '../../components/PopularDrinks/PopularDrinks';

const AddDrinkPage = ({ theme }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [ingNumber, setIngNumber] = useState([0, 1, 2]);
  const [category, setCategory] = useState('Cocktail');
  const [glass, setGlass] = useState('Highball glass');

  useEffect(() => {
    dispatch(getGlassesThunk());
    dispatch(getCategoriesThunk());
    dispatch(getIngredientsThunk());
    dispatch(getPopularThunk());
  }, [dispatch]);

  const onSubmit = data => {
    const ingredientsArray = ingNumber.map((el, index) => ({
      [`title`]: data[`Ingredients${index}`].value,
      [`measure`]: data[`IngNumber${index}`],
    }));

    dispatch(
      addOwnDrinkThunk({
        ingredients: ingredientsArray,
        glass: glass,
        category: category,
        instructions: data.aboutRecipe,
        drink: data.itemTitle,
        drinkThumb: data.photo,
        description: data.recipeDesc,
        alcoholic: data.alcohol,
      })
    )
      .unwrap()
      .then(() => navigate('/my'))
      .catch(error => console.log(error));
  };

  return (
    <>
      <PageTitle title="Add drink" />

      <div>
        <AddFormMain
          setGlass={setGlass}
          setCategory={setCategory}
          glass={glass}
          category={category}
          register={register}
          control={control}
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
