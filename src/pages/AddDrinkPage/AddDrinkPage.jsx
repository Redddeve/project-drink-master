import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { StyledSubmitBtn } from './AddDrinkPage.styled';
import { useDispatch } from 'react-redux';
import { addOwnDrinkThunk } from '../../redux/drinks/operations';
import { useNavigate } from 'react-router-dom';
import ButtonUpToTop from '../../components/ButtonUpToTop/ButtonUpToTop';
import PageTitle from '../../components/PageTitle/PageTitle';
import AddFormMain from '../../components/AddFormMain/AddFormMain';
import AddFormIngredients from '../../components/AddFormIngredients/AddFormIngredients';
import AddFormDesc from '../../components/AddFormDesc/AddFormDesc';

const AddDrinkPage = () => {
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
    <div>
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
        ></AddFormMain>

        <AddFormIngredients
          ingNumber={ingNumber}
          setIngNumber={setIngNumber}
          register={register}
          control={control}
          handleSubmit={handleSubmit}
          errors={errors}
          onSubmit={onSubmit}
        />

        <AddFormDesc
          register={register}
          control={control}
          handleSubmit={handleSubmit}
          errors={errors}
          onSubmit={onSubmit}
        />

        <StyledSubmitBtn type="button" onClick={handleSubmit(onSubmit)}>
          Add
        </StyledSubmitBtn>
      </div>
      <ButtonUpToTop />
    </div>
  );
};

export default AddDrinkPage;
