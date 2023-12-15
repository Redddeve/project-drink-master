import { Suspense } from 'react';
import { Outlet } from 'react-router';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { StyledMain, StyledWrapper } from './Layout.styled';

const Layout = () => {
  return (
    <StyledWrapper>
      <Header />
      <StyledMain>
        <Suspense fallback={<h2>Loading...</h2>}>
          <Outlet />
        </Suspense>
      </StyledMain>
      <Footer />
    </StyledWrapper>
  );
};

export default Layout;
