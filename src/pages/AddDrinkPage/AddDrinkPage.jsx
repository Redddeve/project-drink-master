import { useEffect, useState } from "react";
import Select from "react-select";
import { Controller, useForm } from "react-hook-form";
import sprite from "../../images/sprite.svg";
import {
  StyledAddBtn,
  StyledAddDiv,
  StyledAddTitle,
  StyledAfterContent,
  StyledDescInput,
  StyledFileInput,
  StyledFileLabel,
  StyledInfoDiv,
  StyledIngDiv,
  StyledIngFieldBtn,
  StyledIngFieldInput,
  StyledIngFieldLabel,
  StyledIngFieldWrapper,
  StyledIngTitle,
  StyledIngTitleDiv,
  StyledRadioLabel,
  StyledRadioLabelDiv,
  StyledSelectLabel,
  StyledSubmitBtn,
  StyledTitleInput,
  stylesSelect,
  ingStyles,
} from "./AddDrinkPage.styled";

import { useDispatch, useSelector } from "react-redux";
import {
  addOwnDrinkThunk,
  getCategoriesThunk,
  getGlassesThunk,
  getIngredientsThunk,
} from "../../redux/drinks/operations";
import {
  selectCategories,
  selectGlasses,
  selectIngredients,
} from "../../redux/drinks/selectors";

const AddDrinkPage = () => {
  const dispatch = useDispatch();
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [ingNumber, setIngNumber] = useState([1, 2, 3]);
  const [category, setCategory] = useState("Cocktail");
  const [glass, setGlass] = useState("Highball glass");
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [glassMenuIsOpen, setGlassMenuIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    Ingredients: [],
    aboutRecipe: "",
    itemTitle: "",
    photo: "",
    category: "",
    glass: "",
    recipeDesc: "",
    alcohol: "Non alcoholic",
  });

  useEffect(() => {
    dispatch(getGlassesThunk());
  }, [dispatch]);
  useEffect(() => {
    dispatch(getCategoriesThunk());
  }, [dispatch]);
  useEffect(() => {
    dispatch(getIngredientsThunk());
  }, [dispatch]);
  const glassesState = useSelector(selectGlasses);
  const categoryState = useSelector(selectCategories);
  const ingredientsState = useSelector(selectIngredients);
  const categoryOptions = categoryState[0]?.categories.map((el) => {
    return { label: el, value: el };
  });

  const ingOptions = ingredientsState?.map(({ title }) => {
    return { label: title, value: title };
  });
  const glassOptions = glassesState[0]?.glasses.map((el) => {
    return { label: el, value: el };
  });
  // ****   STYLES FOR SELECT  ****
  const styles = {
    ...stylesSelect,
    dropdownIndicator: (provided) => ({
      ...provided,
      transition: "transform 0.2s ease",
      transform: menuIsOpen ? "rotate(180deg)" : null,
    }),
  };
  const glassStyles = {
    ...stylesSelect,
    dropdownIndicator: (provided) => ({
      ...provided,
      transition: "transform 0.2s ease",
      transform: glassMenuIsOpen ? "rotate(180deg)" : null,
    }),
  };

  // ****   STYLES FOR SELECT  ****

  const addIngField = (e) => {
    e.preventDefault();
    setIngNumber([...ingNumber, ingNumber.length + 1]);
  };

  const deleteIngField = (e) => {
    e.preventDefault();
    const newNumber = ingNumber.slice(0, ingNumber.length - 1);
    setIngNumber(newNumber);
  };

  const deleteIng = (e, index) => {
    e.preventDefault();

    const newNumbers = formData.Ingredients.filter((_, i) => i !== index);
    setFormData({ ...formData, Ingredients: newNumbers });
  };

  const onSubmit = (data) => {
    const ingredientsArray = ingNumber.map((el, index) => ({
      [`title`]: data[`Ingredients${index}`].value,
      [`measure`]: data[`IngNumber${index}`],
    }));

    setFormData({
      ...data,
      Ingredients: ingredientsArray,
      glass: glass,
      category: category,
    });
    dispatch(
      addOwnDrinkThunk({
        ingredients: ingredientsArray,
        glass: glass,
        category: category,
        instructions: data.aboutRecipe,
        drink: data.itemTitle,
        photo: data.photo,
        description: data.recipeDesc,
        alcoholic: data.alcohol,
      })
    );
  };

  return (
    <div>
      <StyledAddTitle>Add drink</StyledAddTitle>
      <form onSubmit={handleSubmit(onSubmit)}>
        <StyledInfoDiv>
          <StyledFileLabel>
            <StyledFileInput
              type="file"
              {...register("photo")}
              onChange={(e) => console.log(e.target.value)}
            />
          </StyledFileLabel>
          <div>
            <label>
              <StyledTitleInput
                type="text"
                {...register("itemTitle", { required: true })}
                placeholder="Enter item title"
              />
              {errors.itemTitle && <p>Item title is required.</p>}
            </label>
            <label>
              <StyledTitleInput
                type="text"
                {...register("aboutRecipe", { required: true })}
                placeholder="Enter about recipe"
              />
              {errors.aboutRecipe && <p>About recipe field is required.</p>}
            </label>
            <StyledSelectLabel>
              <p>Category</p>
              <Select
                styles={styles}
                options={categoryOptions}
                value={{ label: category, value: category }}
                onChange={(val) => setCategory(val.value)}
                theme={(theme) => ({
                  ...theme,
                  colors: {
                    neutral50: "#fff",
                  },
                })}
                menuIsOpen={menuIsOpen}
                onMenuOpen={() => setMenuIsOpen(true)}
                onMenuClose={() => setMenuIsOpen(false)}
              />
            </StyledSelectLabel>
            <StyledSelectLabel>
              <p>Glass</p>
              <Select
                styles={glassStyles}
                options={glassOptions}
                value={{ label: glass, value: glass }}
                onChange={(val) => setGlass(val.value)}
                theme={(theme) => ({
                  ...theme,
                  colors: {
                    neutral50: "#fff",
                  },
                })}
                menuIsOpen={glassMenuIsOpen}
                onMenuOpen={() => setGlassMenuIsOpen(true)}
                onMenuClose={() => setGlassMenuIsOpen(false)}
              />
            </StyledSelectLabel>
            <StyledRadioLabelDiv>
              <StyledRadioLabel>
                <input
                  type="radio"
                  value={"Non alcoholic"}
                  name="alcohol"
                  {...register("alcohol", { required: true })}
                />
                <p>Non alcoholic</p>
              </StyledRadioLabel>
              <StyledRadioLabel>
                <input
                  type="radio"
                  name="alcohol"
                  value={"Alcoholic"}
                  {...register("alcohol", { required: true })}
                />
                <p>Alcoholic</p>
              </StyledRadioLabel>
            </StyledRadioLabelDiv>
            {errors.alcohol && <p>At least one option must be selected.</p>}
          </div>
        </StyledInfoDiv>
        <StyledIngDiv>
          <StyledIngTitleDiv>
            <StyledIngTitle>Ingredients</StyledIngTitle>
            <StyledAddDiv>
              <StyledAddBtn
                onClick={(e) => {
                  deleteIngField(e);
                }}
                disabled={ingNumber.length <= 3}
              >
                -
              </StyledAddBtn>
              <p>{ingNumber.length}</p>
              <StyledAddBtn onClick={(e) => addIngField(e)}>+</StyledAddBtn>
            </StyledAddDiv>
          </StyledIngTitleDiv>

          {ingNumber.map((el, index) => {
            return (
              <StyledIngFieldLabel key={el}>
                <label>
                  <Controller
                    name={`Ingredients${index}`}
                    control={control}
                    render={({ field }) => (
                      <Select
                        styles={ingStyles}
                        {...field}
                        options={ingOptions}
                        theme={(theme) => ({
                          ...theme,
                          colors: {
                            neutral50: "rgba(243, 243, 243, 0.8)",
                          },
                        })}
                      />
                    )}
                    rules={{ required: true }}
                  />
                </label>

                <StyledIngFieldWrapper>
                  <StyledIngFieldInput
                    type="number"
                    {...register(`IngNumber${index}`, {
                      maxLength: 3,
                      pattern: /^\d{0,3}$/,
                    })}
                  />
                  <StyledAfterContent>cl</StyledAfterContent>
                </StyledIngFieldWrapper>
                <StyledIngFieldBtn onClick={(e) => deleteIng(e, index)}>
                  <svg width="18" height="18">
                    <use
                      href={`${sprite}#icon-X`}
                      style={{
                        stroke: "white",
                      }}
                    />
                  </svg>
                </StyledIngFieldBtn>
              </StyledIngFieldLabel>
            );
          })}
        </StyledIngDiv>
        <label>
          <StyledIngTitle>Recipe Preparation</StyledIngTitle>
          <StyledDescInput
            type="text"
            {...register("recipeDesc", { required: true })}
            placeholder="Enter the recipe"
          />
        </label>
        <StyledSubmitBtn type="submit">Add</StyledSubmitBtn>
      </form>
    </div>
  );
};

export default AddDrinkPage;
