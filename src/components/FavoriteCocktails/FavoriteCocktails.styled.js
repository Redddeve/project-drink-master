import styled from "styled-components";

export const EmptyFavoritesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  width: 205px;
  margin: 90px auto;
`;

export const EmptyFavoritesImage = styled.img`
  width: 200px;
  height: 247px;
`;

export const EmptyDescription = styled.p`
  color: var(--white);
  text-align: center;
  font-weight: 500;
`;
