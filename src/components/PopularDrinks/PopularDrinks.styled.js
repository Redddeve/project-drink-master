import styled from 'styled-components';
import { device } from '../../styles/device';

export const MainContainer = styled.div`
  margin-top: 80px;

  @media ${device.tablet} {
    /* margin: 100px auto 0; */
    width: 261px;
  }

  @media ${device.desktop} {
    position: absolute;
    top: 33%;
    right: 15%;
  }
`;

export const FollowUsContainer = styled.div`
  margin-bottom: 40px;
`;

export const TitleFollow = styled.p`
  color: var(--white);
  font-size: 18px;
  line-height: 24px;
  margin-bottom: 20px;
`;

export const PopularDrinkTitle = styled.p`
  margin-bottom: 28px;
  color: black;
  font-size: 18px;

  line-height: 24px; /* 133.333% */
  color: var(--white);
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
    img {
    transition: transform 0.3s ease-out;
  }

  &:hover img {
    transform: scale(1.1);
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    color: #fff;
    opacity: 0;
    transition: opacity 0.3s ease-out;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
  }

  &:hover .overlay {
    opacity: 1;
  }
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
    color: var(--white);

    font-size: 16px;

    line-height: 22px;
  }
  @media ${device.desktop} {
  }
`;

export const DescriptiontTitle = styled.p`
  color: rgba(243, 243, 243, 0.5);
  text-overflow: ellipsis;
  line-height: 18px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;

  @media ${device.tablet} {
    line-height: 20px;
  }
`;
