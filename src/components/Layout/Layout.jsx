import { Suspense } from 'react';
import { Outlet } from 'react-router';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { StyledMain } from './Layout.styled';
import { Loader } from '../Loader/Loader';

const Layout = () => {
  return (
    <>
      <Header />
      <StyledMain>
        <Suspense fallback={Loader}>
          <Outlet />
        </Suspense>
      </StyledMain>
      <Footer />
    </>
  );
};

export default Layout;
