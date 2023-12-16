import styled from "styled-components";
import { device } from "../../styles/device";

export const CocktailCard = styled.li`
  display: flex;
  width: 335px;
  flex-direction: column;
  align-items: flex-start;
  gap: 18px;

  @media ${device.tablet} {
    width: 342px;
    gap: 24px;
  }

  @media ${device.desktop} {
    width: 400px;
    gap: 24px;
  }
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

  @media ${device.tablet} {
    width: 342px;
  }

  @media ${device.desktop} {
    width: 400px;
    height: 400px;
  }
`;

export const CocktailContainerTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
`;

export const CocktailTitle = styled.h3`
  font-size: 18px;
  font-weight: 500;

  @media ${device.tablet} {
    font-size: 24px;
  }
`;

export const CocktailLabel = styled.p`
  color: var(--transp-white);
`;

export const CocktailDescription = styled.p`
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;

  @media ${device.tablet} {
    -webkit-line-clamp: 5;
  }

  @media ${device.desktop} {
    -webkit-line-clamp: 4;
  }
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
  color: inherit;
  font-weight: 600;
  font-size: 16px;
  border: none;

  @media ${device.tablet} {
    padding: 18px 44px;
  }
`;

export const RemoveButton = styled.button`
  padding: 11px;
  border-radius: 40px;
  background: var(--black);
  border: none;
  & > svg {
    fill: var(--white);
  }

  @media ${device.tablet} {
    padding: 15px;
  }
`;
