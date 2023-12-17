import styled from "styled-components";
import bg from "../../images/wellcomeGlass@1x.jpg";

export const StyledWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 40px;
  height: 100vh;
  background-image: url(${bg});
  background-repeat: no-repeat;
  background-position: left -5% center;
`;
