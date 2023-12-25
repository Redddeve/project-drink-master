import { Suspense } from 'react';
import { Outlet } from 'react-router';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { StyledMain, Circle } from './Layout.styled';
import { Loader } from '../Loader/Loader';
import ButtonUpToTop from '../ButtonUpToTop/ButtonUpToTop';
import { selectTheme } from '../../redux/theme/selectors';
import { useSelector } from 'react-redux';
const Layout = () => {
  const theme = useSelector(selectTheme);
  return (
    <>
      <Header />
      <StyledMain>
        <Circle theme={theme}></Circle>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
        <ButtonUpToTop />
      </StyledMain>
      <Footer />
    </>
  );
};

export default Layout;
