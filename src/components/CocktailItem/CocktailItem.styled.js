import styled from "styled-components";

export const CocktailCard = styled.li`
  display: flex;
  width: 335px;
  flex-direction: column;
  align-items: flex-start;
  gap: 18px;
`;

export const CocktailImage = styled.img`
  width: 335px;
  height: 360px;
  border-radius: 8px;
  background: linear-gradient(
    180deg,
    rgba(10, 10, 17, 0.02) 51.18%,
    rgba(10, 10, 17, 0.77) 97.66%
  );
`;

export const CocktailContainerTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
`;

export const CocktailTitle = styled.h3`
  color: var(--white);
  font-size: 18px;
  font-weight: 500;
`;

export const CocktailLabel = styled.p`
  color: rgba(243, 243, 243, 0.5);
`;

export const CocktailDescriptionContainer = styled.div`
  width: 335px;
  height: 75px;
`;

export const CocktailDescription = styled.p`
  color: #f3f3f3;
  height: 75px;
  text-overflow: ellipsis;
  overflow: hidden;
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const MoreButton = styled.button`
  padding: 14px 40px;
  border-radius: 42px;
  background: var(--black);
  color: var(--white);
  font-weight: 600;
  border: none;
`;

export const RemoveButton = styled.button`
  padding: 11px;
  border-radius: 40px;
  background: var(--black);
  border: none;
`;

export const Icon = styled.img`
  width: 24px;
  height: 24px;
  fill: white;
`;
