import styled from 'styled-components';
import { device } from '../../styles/device';

export const EmptyMyCocktailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: auto;
  margin: 0px;

  @media ${device.tablet} {
    width: auto;
  }

  @media ${device.desktop} {
    width: auto;
  }
`;

export const HeroBlock = styled.div`
  @media ${device.desktop} {
    margin-bottom: 100px;
    display: flex;
    gap: 249px;
  }
`;

export const CocktailTitle = styled.h2`
  margin-bottom: 8px;

  font-size: 32px;
  font-weight: 600;
  line-height: 1.18em;

  @media ${device.tablet} {
    font-size: 56px;
    line-height: 1.07em;
  }
  @media ${device.desktop} {
    font-size: 64px;
    line-height: 1.06em;
  }
`;

export const SemiDescription = styled.p`
  margin-bottom: 20px;

  font-weight: 400;
  font-size: 12px;
  line-height: 1.16em;

  color: var(--transp-white);

  @media ${device.tablet} {
    font-size: 16px;
    line-height: 1.25em;
  }
`;

export const Description = styled.p`
  margin-bottom: 40px;
  font-size: 14px;
  line-height: 1.28em;

  @media ${device.tablet} {
    width: 593px;
    font-size: 16px;
    line-height: 1.37em;
  }
`;

export const CocktailImg = styled.img`
  margin-top: 80px;
  margin-bottom: 18px;

  @media ${device.tablet} {
    display: none;
  }

  @media ${device.desktop} {
    width: 400px;
    height: 400px;
    display: block;
    margin: 0;
    margin-top: -26px;
  }
`;
export const CocktailImgDiv = styled.div`
  display: none;

  @media ${device.tablet} {
    display: block;
    margin-top: 80px;
    margin-bottom: 80px;
    width: 704px;
    height: 400px;
    flex-shrink: 0;
    background: linear-gradient(
        180deg,
        rgba(10, 10, 17, 0.02) 51.18%,
        rgba(10, 10, 17, 0.77) 97.66%
      ),
      url('https://ftp.goit.study/img/drinkify/recipes/Just_a_Moonmint.jpg'),
      lightgray 0px -52px / 100% 176% no-repeat;
    background-size: cover;
    background-position: 100% 15%;
    background-repeat: no-repeat;
  }
  @media ${device.desktop} {
    display: none;
  }
`;

export const IngredientsTitle = styled.p`
  margin-bottom: 42px;

  font-weight: 500;
  font-size: 16px;
  line-height: 1.25em;

  color: var(--transp-white);

  @media ${device.tablet} {
    margin-bottom: 24px;
  }
`;

export const IngredientsGrid = styled.ul`
  margin-bottom: 80px;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 20px 21px;

  @media ${device.tablet} {
    grid-gap: 22px;
    grid-template-columns: repeat(3, 1fr);
  }
  @media ${device.desktop} {
    margin-bottom: 100px;
    grid-gap: 20px 35px;
    grid-template-columns: repeat(5, 1fr);
  }
`;

export const GridItem = styled.li`
  display: flex;
  flex-direction: column;
  row-gap: 8px;

  @media ${device.tablet} {
    row-gap: 14px;
  }
`;

export const ImgBox = styled.div`
  max-width: 157px;
  height: 157px;
  padding: 25px;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: rgba(22, 31, 55, 0.5);

  @media ${device.tablet} {
    max-width: 220px;
    height: 220px;
    padding: 32px;
  }

  @media ${device.desktop} {
    padding: 22px;
  }
`;

export const MainImg = styled.img`
  width: '107px';
  height: '107px';

  @media ${device.tablet} {
    width: '175px';
    height: '175px';
  }
`;

export const IngredientBox = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const IngredientTitle = styled.p`
  font-weight: 500;
  line-height: 1.28em;
  @media ${device.tablet} {
    font-size: 18px;
    line-height: 1.33em;
  }
`;

export const IngredientMeasure = styled.p`
  font-weight: 500;
  line-height: 1.28em;

  color: var(--transp-white);

  @media ${device.tablet} {
    line-height: 1.25em;
  }
`;

export const RecipeBox = styled.div`
  @media ${device.desktop} {
    display: flex;
    flex-direction: row-reverse;
    gap: 60px;
  }
`;

export const RecipeTitle = styled.h3`
  margin-bottom: 40px;

  font-size: 28px;
  font-weight: 600;
  line-height: 1.16em;

  @media ${device.tablet} {
    font-size: 40px;
    line-height: 1.1em;
  }
  @media ${device.desktop} {
    margin-bottom: 60px;
  }
`;

export const DescBox = styled.div`
  margin-bottom: 40px;

  display: flex;
  flex-direction: column;
  gap: 20px;

  @media ${device.desktop} {
    width: 549px;
  }
`;

export const DescriptionText = styled.p`
  line-height: 1.28em;
  @media ${device.tablet} {
    line-height: 1.37em;
  }
`;

export const LastImg = styled.img`
  width: 335px;
  height: 430px;
  border-radius: 8%;
  border-color: red;
  @media ${device.tablet} {
    width: 704px;
  }
  @media ${device.desktop} {
    width: 631px;
    height: 480px;
  }
`;
