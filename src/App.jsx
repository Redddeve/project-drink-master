import { Route, Routes } from 'react-router';
import WelcomePage from './pages/WelcomePage/WelcomePage';
import SignUpPage from './pages/SignUpPage/SignUpPage';
import SignInPage from './pages/SignInPage/SignInPage';
import Layout from './components/Layout/Layout';
import HomePage from './pages/Homepage/Homepage';
import DrinksPage from './pages/DrinksPage/DrinksPage';
import AddDrinkPage from './pages/AddDrinkPage/AddDrinkPage';
import FavoriteDrinksPage from './pages/FavoriteDrinksPage/FavoriteDrinksPage';
import UserDrinkPage from './pages/UserDrinkPage/UserDrinkPage';
import MyDrinksPage from './pages/MyDrinksPage/MyDrinksPage';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/welcome" element={<WelcomePage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/drinks" element={<DrinksPage />} />
          <Route path="/add" element={<AddDrinkPage />} />
          <Route path="/favorites" element={<FavoriteDrinksPage />} />
          <Route path="/drink/:drinkId" element={<UserDrinkPage />} />
          <Route path="/my" element={<MyDrinksPage />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
