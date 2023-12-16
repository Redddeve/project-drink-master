import styled from "styled-components";

export const EmptyFavoritesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 205px;
  gap: 32px;
  margin: 90px auto 0;

  @media screen and (min-width: 768px) {
    margin: 100px auto 0;
    width: 261px;
  }

  @media screen and (min-width: 1280px) {
    margin: 67px auto 0;
  }
`;

export const EmptyFavoritesImage = styled.img`
  width: 100%;
  height: 247px;

  @media screen and (min-width: 768px) {
    height: 326px;
  }
`;

export const EmptyDescription = styled.p`
  text-align: center;
  font-weight: 500;

  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`;
