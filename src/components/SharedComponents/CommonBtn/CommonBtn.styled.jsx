import styled from 'styled-components';

export const ButtonStyle = styled.button`
  max-width: 335px;
  height: 54px;

  flex-shrink: 0;
  background-color: transparent;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 200px;
  cursor: pointer;
  color: var(--white);
  text-align: center;
  font-size: 16px;
  font-weight: 600;
  line-height: 1.13;
  @media screen and (min-width: 768px) {
    width: 300px;
  }
  // =============== btn subscribe ==========
  &.subscribe {
    width: 100%;
    max-width: 335px;
    height: 54px;

    flex-shrink: 0;
    background-color: transparent;
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 200px;
    cursor: pointer;
    color: var(--white);
    text-align: center;
    font-size: 16px;
    font-weight: 600;
    line-height: 1.13;

    transition: background-color var(--tran-fast);

    &:hover:not(:disabled) {
      background-color: var(--white);
      color: var(--black);
    }
    &:focus:not(:disabled) {
      background-color: var(--white);
      color: var(--black);
    }
    &:disabled {
      cursor: not-allowed;
    }
    @media screen and (min-width: 768px) {
      width: 309px;
      height: 56px;
      font-size: 17px;
      line-height: 1.56;
    }
  }
  // =============== btn seeMore (nav??) ==========
  &.seeMore {
    width: 143px;
    height: 46px;

    border-radius: 42px;
    font-size: 14px;
    line-height: 1.29;
    background-color: var(--black);
    color: var(--white);
    @media screen and (min-width: 768px) {
      width: 160px;
      height: 54px;
      font-size: 16px;
      line-height: 1.13;
    }
  }
  // =============== btn addFavorite(hover??) ==========
  &.addFavorite {
    width: 222px;
    height: 46px;
    border-radius: 42px;
    font-size: 14px;
    line-height: 1.29;
    background-color: var(--white);
    color: var(--black);
    @media screen and (min-width: 768px) {
      width: 250px;
      height: 54px;
      font-size: 16px;
      line-height: 1.13;
    }
  }
  // ========== btn add ================
  &.add {
    width: 107px;
    height: 46px;
    border-radius: 42px;
    font-size: 14px;
    line-height: 1.29;
    background-color: var(--white);
    color: var(--black);
    @media screen and (min-width: 768px) {
      width: 118px;
      height: 54px;
      font-size: 16px;
      line-height: 1.13;
    }
  }
  // ========== btn addDrink ================
  &.addDrink {
    width: 151px;
    height: 46px;
    border-radius: 42px;
    font-size: 14px;
    line-height: 1.29;
    background-color: var(--white);
    color: var(--black);
    @media screen and (min-width: 768px) {
      width: 169x;
      height: 54px;
      font-size: 16px;
      line-height: 1.13;
    }
    @media screen and (min-width: 1440px) {
      width: 160x;
    }
  }
  // ========== btn otherDrinks ================
  &.otherDrinks {
    width: 163px;
    height: 46px;
    border-radius: 42px;
    font-size: 14px;
    line-height: 1.29;
    background-color: var(--white);
    color: var(--black);
    @media screen and (min-width: 768px) {
      width: 183px;
      height: 54px;
      font-size: 16px;
      line-height: 1.13;
    }
  }

  // ========== btn saveChanges ================
  &.saveChanges {
    width: 285px;
    border-radius: 42px;
    font-size: 14px;
    line-height: 1.29;
    background-color: var(--white);
    color: var(--black);
    @media screen and (min-width: 768px) {
      width: 400px;
      height: 54px;
      font-size: 16px;
      line-height: 1.13;
    }
  }
  // ========== btn logOut ================
  &.logOut {
    width: 140px;
    height: 50px;
    border-radius: 42px;
    background-color: var(--white);
    color: var(--black);
    @media screen and (min-width: 768px) {
      width: 196px;
      height: 54px;
      font-size: 16px;
      line-height: 1.13;
    }
  }

  // ========== btn cancel ================
  &.cancel {
    width: 136px;
    height: 50px;
    border-radius: 42px;
    background-color: var(--black);
    color: var(--white);
    @media screen and (min-width: 768px) {
      width: 192px;
      height: 54px;
      font-size: 16px;
      line-height: 1.13;
    }
  }

  // ========== btn logoutEditProf ================
  &.logoutEditProf {
    width: 141px;
    height: 42px;
    border-radius: 42px;
    font-size: 14px;
    line-height: 1.29;
    background-color: var(--white);
    color: var(--black);
  }

  // ========== btn signUpSmal ================
  &.signUpSmal {
    width: 132px;
    height: 46px;
    border-radius: 42px;
    font-size: 14px;
    line-height: 1.29;
    background-color: var(--white);
    color: var(--black);
    @media screen and (min-width: 768px) {
      width: 147px;
      height: 54px;
      font-size: 16px;
      line-height: 1.13;
    }
  }

  // ========== btn signInSmal ================
  &.signInSmal {
    width: 125px;
    height: 46px;
    border-radius: 42px;
    border: 1px solid rgba(243, 243, 243, 0.2);
    font-size: 14px;
    line-height: 1.29;
    color: var(--white);
    @media screen and (min-width: 768px) {
      width: 140px;
      height: 54px;
      font-size: 16px;
      line-height: 1.13;
    }
  }
  // ========== btn signLong ================
  &.signLong {
    width: 335px;
    border-radius: 42px;
    font-size: 14px;
    line-height: 1.29;
    background-color: var(--white);
    color: var(--black);
    @media screen and (min-width: 768px) {
      width: 400px;
      height: 54px;
      font-size: 16px;
      line-height: 1.13;
    }
  }
`;
