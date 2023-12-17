import { DrinkCard } from "../../components/DrinkCard/DrinkCard.jsx";
import {
  StyledCardsContainer,
  StyledFilterContainer,
  StyledHeader,
  StyledInput,
  StyledSelect,
  StyledSvg,
} from "./DrinksPage.styled";
import sprite from "../../images/sprite.svg";

const DrinksPage = () => {
  return (
    <>
      <StyledHeader>Drinks</StyledHeader>
      <StyledFilterContainer>
        <StyledInput placeholder="Enter the text" />
        <StyledSvg>
          <use href={`${sprite}#icon-search`} />
        </StyledSvg>
        <StyledSelect classNamePrefix={"Select"} />
        <StyledSelect classNamePrefix={"Select"} />
      </StyledFilterContainer>
      <StyledCardsContainer>

      </StyledCardsContainer>
    </>
  );
};

export default DrinksPage;
