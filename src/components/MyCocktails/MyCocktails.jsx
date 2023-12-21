import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CocktailList from '../CocktailList/CocktailList';
import {
  selectAllDrinks,
  selectIngredients,
  selectOwnDrinks,
} from '../../redux/drinks/selectors';
import {
  fetchAllDrinks,
  getIngredientsThunk,
} from '../../redux/drinks/operations';
import {
  EmptyMyCocktailsContainer,
  CocktailTitle,
  SemiDescription,
  Description,
  CocktailImg,
  IngredientsTitle,
  IngredientsGrid,
  GridItem,
  ImgBox,
  IngredientBox,
  IngredientMeasure,
  IngredientTitle,
  RecipeTitle,
  DescBox,
  DescriptionText,
  MainImg,
  CocktailImgDiv,
  HeroBlock,
  RecipeBox,
} from './MyCocktails.styled';
import CommonBtn from '../../components/SharedComponents/CommonBtn/CommonBtn';
import mobile from '../../images/three-cocktails-mobile@1x.jpg';
import usual from '../../images/three-cocktails@1x.jpg';
import retina from '../../images/three-cocktails@2x.jpg';
import Switcher from '../../pages/MyDrinksPage/imageSwitcher';
import PaginatedItems from '../Paginator/Paginator';

const MyOwnCocktails = () => {
  const ownCocktailsList = useSelector(selectOwnDrinks);
  const ingredientList = useSelector(selectIngredients);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllDrinks());
    dispatch(getIngredientsThunk());
  }, [dispatch]);

  const allDrinks = useSelector(selectAllDrinks);
  const testCocktailId = '639b6de9ff77d221f190c563';
  const oneDrink = allDrinks?.Shake?.find(item => item._id === testCocktailId);

  const ingredientsIdArray = oneDrink?.ingredients?.map(
    item => item.ingredientId
  );
  const filteredObjects = ingredientList?.filter(obj =>
    ingredientsIdArray?.includes(obj._id)
  );
  return ownCocktailsList.length === 0 ? (
    <EmptyMyCocktailsContainer>
      {oneDrink ? (
        <>
          <HeroBlock>
            <div>
              <CocktailTitle>{oneDrink.drink}</CocktailTitle>
              <SemiDescription>
                {oneDrink.glass}/{oneDrink.alcoholic}
              </SemiDescription>
              <Description>{oneDrink.description}</Description>
              <CommonBtn type="submit" variant="addFavorite">
                Add to favorite drinks
              </CommonBtn>
            </div>
            <div>
              <CocktailImgDiv></CocktailImgDiv>
              <CocktailImg src={oneDrink.drinkThumb} alt="cocktailImg" />
            </div>
          </HeroBlock>
          <IngredientsTitle>Ingredients</IngredientsTitle>
          <IngredientsGrid>
            {filteredObjects?.map(item => (
              <GridItem key={item._id}>
                <ImgBox>
                  <MainImg
                    srcSet={(item.thumbSmall, item.thumbMedium)}
                    src={item.thumbSmall}
                    alt="thumbSmall"
                  />
                </ImgBox>
                <IngredientBox>
                  <IngredientTitle>{item.title}</IngredientTitle>
                  <IngredientMeasure>
                    {
                      oneDrink?.ingredients?.find(
                        obj => obj.ingredientId === item._id
                      )?.measure
                    }
                  </IngredientMeasure>
                </IngredientBox>
              </GridItem>
            ))}
          </IngredientsGrid>
          <RecipeTitle>Recipe Preparation</RecipeTitle>
          <RecipeBox>
            <DescBox>
              <DescriptionText>{oneDrink.description}</DescriptionText>
              <DescriptionText>{oneDrink.instructions}</DescriptionText>
            </DescBox>
            <div>
              <Switcher mobile={mobile} usual={usual} retina={retina} />
            </div>
          </RecipeBox>
        </>
      ) : (
        <p>Oops!!!</p>
      )}
    </EmptyMyCocktailsContainer>
  ) : (
    <PaginatedItems
      items={ownCocktailsList}
      destination="favorite"
      ListComponent={CocktailList}
      itemsPerPageValue={{ mobile: 3, tablet: 3, desktop: 3, default: 9 }}
    />
  );
};

export default MyOwnCocktails;
