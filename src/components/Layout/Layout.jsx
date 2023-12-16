import { Suspense } from 'react';
import { Outlet } from 'react-router';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { StyledMain } from './Layout.styled';

const Layout = () => {
  return (
    <>
      <Header />
      <StyledMain>
        <Suspense fallback={<h2>Loading...</h2>}>
          <Outlet />
        </Suspense>
      </StyledMain>
      <Footer />
    </>
  );
};

export default Layout;
