/* eslint-disable react/prop-types */
import {
  ButtonContainer,
  CocktailContainerTitle,
  CocktailDescription,
  CocktailDescriptionContainer,
  CocktailImage,
  CocktailCard,
  CocktailLabel,
  CocktailTitle,
  MoreButton,
  RemoveButton,
  Icon,
} from "./CocktailItem.styled";
import iconTrash from "../../images/trash.svg";

const CocktailItem = ({ cocktail }) => {
  const { drink, alcoholic, description, drinkThumb } = cocktail;
  return (
    <CocktailCard>
      <CocktailImage src={drinkThumb} alt={drink} />
      <CocktailContainerTitle>
        <CocktailTitle>{drink}</CocktailTitle>
        <CocktailLabel>{alcoholic}</CocktailLabel>
      </CocktailContainerTitle>
      <CocktailDescriptionContainer>
        <CocktailDescription>{description}</CocktailDescription>
      </CocktailDescriptionContainer>
      <ButtonContainer>
        <MoreButton type="button">See more</MoreButton>
        <RemoveButton type="button">
          <Icon src={iconTrash} alt="remove" />
        </RemoveButton>
      </ButtonContainer>
    </CocktailCard>
  );
};

export default CocktailItem;
