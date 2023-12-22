import { PageContainer } from '../AgreementPage/AgreementPage.styled';
import PageTitle from '../../components/PageTitle/PageTitle';
import { StyledPolicyText } from './PolicyPage.styled';
import { useSelector } from 'react-redux';
import { selectTheme } from '../../redux/theme/selectors';
const PolicyPage = () => {
  const theme = useSelector(selectTheme);
  return (
    <PageContainer>
      <PageTitle title="Privacy Policy" />
      <StyledPolicyText theme={theme}>
        Your privacy is important to us. This section outlines how we collect,
        use, process, and protect your personal data. This Privacy Policy
        applies to the use of our website, applications, and services, so please
        take a moment to read it.
      </StyledPolicyText>

      <StyledPolicyText theme={theme}>
        What personal data do we collect: We may collect various types of
        personal data that you voluntarily provide when interacting with our
        website, registering an account or filling out forms. This may include
        your name, email address, phone number and more.
      </StyledPolicyText>

      <StyledPolicyText theme={theme}>
        How we use your personal data: We use the collected personal data to
        provide services, manage your account, provide you with information
        about our products and services, and to communicate with you regarding
        inquiries and updates.
      </StyledPolicyText>

      <StyledPolicyText theme={theme}>
        Protection of personal data: We take every effort to protect your
        information and use modern technologies to prevent unauthorized access,
        loss, or disclosure of your personal information.
      </StyledPolicyText>

      <StyledPolicyText theme={theme}>
        Disclosure to third parties: We do not disclose your personal data to
        third parties without your consent, except when required by law or to
        provide the services you requested.
      </StyledPolicyText>

      <StyledPolicyText theme={theme}>
        Changes to the Privacy Policy: We may periodically update this Privacy
        Policy. Please refer to this page to stay informed about any changes.
      </StyledPolicyText>

      <StyledPolicyText theme={theme}>
        Contact us: If you have any questions or concerns regarding this Privacy
        Policy or your information, please contact us using the contact details
        provided on our website.
      </StyledPolicyText>
    </PageContainer>
  );
};

export default PolicyPage;
