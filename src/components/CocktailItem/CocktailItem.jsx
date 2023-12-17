/* eslint-disable react/prop-types */
import sprite from "../../images/sprite.svg";
import {
  ButtonContainer,
  CocktailContainerTitle,
  CocktailDescription,
  CocktailImage,
  CocktailCard,
  CocktailLabel,
  CocktailTitle,
  MoreButton,
  RemoveButton,
  // Icon,
} from "./CocktailItem.styled";

const CocktailItem = ({ cocktail }) => {
  const { drink, alcoholic, description, drinkThumb } = cocktail;

  return (
    <CocktailCard>
      <CocktailImage src={drinkThumb} alt={drink} />
      <CocktailContainerTitle>
        <CocktailTitle>{drink}</CocktailTitle>
        <CocktailLabel>{alcoholic}</CocktailLabel>
      </CocktailContainerTitle>
      <CocktailDescription>{description}</CocktailDescription>
      <ButtonContainer>
        <MoreButton type="button">See more</MoreButton>
        <RemoveButton type="button">
          <svg width="24" height="24">
            <use href={sprite + "#icon-trash"} />
          </svg>
        </RemoveButton>
      </ButtonContainer>
    </CocktailCard>
  );
};

export default CocktailItem;
