import { useDispatch, useSelector } from 'react-redux';
import { selectAllDrinks } from '../../redux/drinks/selectors';
import { useEffect } from 'react';
import { fetchAllDrinks } from '../../redux/drinks/operations';
import { DrinkCard } from '../DrinkCard/DrinkCard';
import { OtherDrinksNavLink, Title } from './PreviewDrinks.styled';
import { StyledCardsContainer } from '../../pages/DrinksPage/DrinksPage.styled';
import { useMediaQuery } from 'react-responsive';
import { selectTheme } from '../../redux/theme/selectors';

const PreviewDrinks = () => {
  const dispatch = useDispatch();
  const drinks = useSelector(selectAllDrinks);
  const theme = useSelector(selectTheme);

  const isDesktop = useMediaQuery({
    query: '(min-width: 1440px)',
  });

  const isTablet = useMediaQuery({
    query: '(min-width: 768px) and (max-width: 1439px)',
  });

  const isMobile = useMediaQuery({
    query: '(max-width: 767px)',
  });

  const limit = isDesktop ? 3 : isTablet ? 2 : 1;

  useEffect(() => {
    dispatch(fetchAllDrinks({ limit }));
  }, [dispatch, isMobile, isTablet, limit]);

  return (
    <>
      <section>
        <Title theme={theme}>Ordinary Drink</Title>
        <StyledCardsContainer>
          {drinks['Ordinary Drink']?.map(drink => {
            return <DrinkCard key={drink._id} drink={drink} />;
          })}
        </StyledCardsContainer>
        <Title>Cocktail</Title>
        <StyledCardsContainer>
          {drinks['Cocktail']?.map(drink => {
            return <DrinkCard key={drink._id} drink={drink} />;
          })}
        </StyledCardsContainer>
        <Title>Shake</Title>
        <StyledCardsContainer>
          {drinks['Shake']?.map(drink => {
            return <DrinkCard key={drink._id} drink={drink} />;
          })}
        </StyledCardsContainer>
        <Title>Other/Unknown</Title>
        <StyledCardsContainer>
          {drinks['Other/Unknown']?.map(drink => {
            return <DrinkCard key={drink._id} drink={drink} />;
          })}
        </StyledCardsContainer>
        <OtherDrinksNavLink theme={theme} to="/drinks">
          Other drinks
        </OtherDrinksNavLink>
      </section>
    </>
  );
};

export default PreviewDrinks;
