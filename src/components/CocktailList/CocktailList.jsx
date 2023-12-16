/* eslint-disable react/prop-types */
import CocktailItem from "../CocktailItem/CocktailItem";
import { ListStyled } from "./CocktailList.styled";

const CocktailList = ({ cocktailData }) => {
  return (
    <ListStyled>
      {cocktailData.map((cocktail, index) => (
        <CocktailItem key={cocktail.id || index} cocktail={cocktail} />
      ))}
    </ListStyled>
  );
};

export default CocktailList;
