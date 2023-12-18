import styled from 'styled-components';
import { device } from '../../styles/device';

export const MainContainer = styled.div`
  @media ${device.tablet} {
    margin: 100px auto 0;
    width: 261px;
  }

  @media ${device.desktop} {
    margin: 67px auto 0;
  }
`;

export const FollowUsContainer = styled.div`
  margin-bottom: 40px;
`;

export const TitleFollow = styled.p`
  color: #f3f3f3;
  font-family: Manrope;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px; 
  margin-bottom: 20px;
`;

export const PopularDrinkTitle = styled.p`
  margin-bottom: 28px;
  color: black;
  font-size: 18px;
  font-weight: 500;
  line-height: 24px; /* 133.333% */
  background-color: yellow;
  border: none;
  border-radius: 6px;
  width: fit-content;
  padding: 4px;

  @media ${device.tablet} {
    margin-bottom: 40px;
    font-size: 24px;
    line-height: 32px;
  }
  @media ${device.desktop} {
  }
`;

export const PopDrinkContainer = styled.div`
  @media ${device.tablet} {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 704px;
  }

  @media ${device.desktop} {
    flex-direction: column;
  }
`;

export const SpaceContainer = styled.div`
  margin-bottom: 24px;
  display: flex;

  gap: 14px;

  @media ${device.tablet} {
  }

  @media ${device.desktop} {
  }
`;

export const PositionContainer = styled.div`
  width: 232px;
  display: flex;
  flex-direction: column;
  gap: 8px;

  @media ${device.tablet} {
  }
  @media ${device.desktop} {
  }
`;

export const ImgDrink = styled.img`
  width: 90px;
  height: 90px;
  border-radius: 12px;

  @media ${device.tablet} {
  }
`;

export const DrinkTitle = styled.p`
  width: 232px;
  margin: 0;
  @media ${device.tablet} {
    color: #f3f3f3;

    font-family: Manrope;
    font-size: 16px;
    font-weight: 500;
    line-height: 22px;
  }
  @media ${device.desktop} {
  }
`;

export const DescriptiontTitle = styled.p`
  color: rgba(243, 243, 243, 0.5);

  text-overflow: ellipsis;

  font-family: Manrope;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;

  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;

  @media ${device.tablet} {
    line-height: 20px;
  }
`;
