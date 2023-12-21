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
import PopularDrinks from '../../components/PopularDrinks/PopularDrinks';

const AddDrinkPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    register,
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const [ingNumber, setIngNumber] = useState([0, 1]);
  const [category, setCategory] = useState('Cocktail');
  const [glass, setGlass] = useState('Highball glass');
  const [selectedImage, setSelectedImage] = useState(null);
  const onSubmit = data => {
    const formData = new FormData(); // Create a FormData object to send files and other data
    formData.append('drinkThumb', selectedImage);
    formData.append('glass', glass);
    formData.append('category', category);
    formData.append('instructions', data.aboutRecipe);
    formData.append('drink', data.itemTitle);
    formData.append('description', data.recipeDesc);
    formData.append('alcoholic', data.alcohol);

    ingNumber.map((el, index) =>
      formData.append(
        `ingredients[${index}][title]`,
        data[`Ingredients${index}`].value
      )
    );
    ingNumber.map((el, index) =>
      formData.append(
        `ingredients[${index}][measure]`,
        data[`IngNumber${index}`]
      )
    );

    console.log(formData.ingredients);
    dispatch(addOwnDrinkThunk(formData))
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
          setSelectedImage={setSelectedImage}
          control={control}
          setValue={setValue}
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
      <PopularDrinks />
      <ButtonUpToTop />
    </>
  );
};

export default AddDrinkPage;
