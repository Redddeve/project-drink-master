import { StyledPageTitle } from './PageTitle.styled';

const PageTitle = ({ title, mbMobile, mbTablet, mbDesktop }) => {
  return (
    <StyledPageTitle
      mbMobile={mbMobile}
      mbTablet={mbTablet}
      mbDesktop={mbDesktop}
    >
      {title}
    </StyledPageTitle>
  );
};

export default PageTitle;
