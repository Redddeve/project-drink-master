import { useState } from "react";
import Select from "react-select";
import { Controller, useForm } from "react-hook-form";
import deleteSvg from "./delete.svg";
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
import { categoryOptions, glassOptions, ingOptions } from "./options";

const AddDrinkPage = () => {
  const [ingNumber, setIngNumber] = useState([1, 2, 3]);
  const [category, setCategory] = useState("Cocktail");
  const [glass, setGlass] = useState("Highball glass");
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [glassMenuIsOpen, setGlassMenuIsOpen] = useState(false);
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [formData, setFormData] = useState({
    Ingredients: [],
    aboutRecipe: "",
    itemTitle: "",
    photo: "",
    category: "",
    glass: "",
    recipeDesc: "",
    alcohol: false,
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
      [`Ingredients`]: data[`Ingredients${index}`].value,
      [`IngNumber`]: data[`IngNumber${index}`],
    }));

    setFormData({
      ...data,
      Ingredients: ingredientsArray,
      glass: glass,
      category: category,
    });
    console.log(formData);
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
                  value={false}
                  name="alcohol"
                  {...register("alcohol", { required: true })}
                />
                <p>No Alcohol</p>
              </StyledRadioLabel>
              <StyledRadioLabel>
                <input
                  type="radio"
                  name="alcohol"
                  value={true}
                  {...register("alcohol", { required: true })}
                />
                <p>Alcohol</p>
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
                  <img src={deleteSvg} alt="" />
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
