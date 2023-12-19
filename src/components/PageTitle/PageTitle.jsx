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

PageTitle.propTypes = {
  title: PropTypes.string.isRequired,
  mbMobile: PropTypes.string,
  mbTablet: PropTypes.string,
  mbDesktop: PropTypes.string,
};
