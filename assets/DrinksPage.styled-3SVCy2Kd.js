import{s as i,d as t,L as a,P as r,j as o}from"./index-CJO0Qxxs.js";import{S as n}from"./react-select.esm-n6Y28yhf.js";const d=i.li`
  width: 335px;

  @media ${t.tablet} {
    width: 342px;
  }

  @media ${t.desktop} {
    width: 400px;
  }
`,p=i.img`
  width: 100%;
  height: 360px;
  border-radius: 8px;

  @media ${t.desktop} {
    height: 400px;
  }
`,s=i.div`
  width: 100%;
  margin-top: 14px;
  display: flex;
  justify-content: space-between;
`,l=i(a)`
  color: var(--transp-white);
  cursor: pointer;
`,c=({drink:e})=>o.jsxs(d,{children:[o.jsx(p,{src:e.drinkThumb,alt:e.drink}),o.jsxs(s,{children:[o.jsx("span",{children:e.drink}),o.jsx(l,{to:`../drink/${e._id}`,children:"See more"})]})]});c.propTypes={drink:r.shape({drinkThumb:r.string,drink:r.string,_id:r.string})};const g=i.h2`
  margin-bottom: 40px;
  color: var(--white);
  font-size: 32px;
  font-weight: 600;
  line-height: 1.19;

  @media ${t.tablet} {
    margin-bottom: 60px;
    font-size: 56px;
    font-weight: 600;
    line-height: 1.07;
  }

  @media ${t.desktop} {
    margin-bottom: 80px;
    font-size: 64px;
  }
`,m=i.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 14px;
  margin-bottom: 40px;

  @media ${t.tablet} {
    max-width: 678px;
    flex-direction: row;
    gap: 8px;
  }
`,b=i.ul`
  display: flex;
  flex-direction: column;
  gap: 28px;
  list-style: none;

  @media ${t.tablet} {
    flex-direction: row;
    flex-wrap: wrap;
    gap: 20px;
    row-gap: 40px;
  }

  @media ${t.desktop} {
    row-gap: 80px;
  }
`,w=i.input`
  width: 100%;
  height: 54px;
  padding: 0 24px;
  border-radius: 200px;
  border: 1px solid rgba(243, 243, 243, 0.2);
  opacity: 0.8;
  outline: none;
  background: transparent;
  color: var(--white);

  @media ${t.tablet} {
    width: 264px;
  }
`,u=i.svg`
  position: absolute;
  width: 20px;
  height: 20px;
  top: 18px;
  left: 220px;
  stroke: white;

  @media screen and (max-width: 767px) {
    width: 1px;
    height: 1px;
    margin: -1px;
    border: 0;
    padding: 0;

    white-space: nowrap;
    clip-path: inset(100%);
    clip: rect(0 0 0 0);
    overflow: hidden;
  }
`,S=i(n)`
  .Select__control {
    height: 54px;
    padding: 0 14px;
    width: 100%;
    border: none;
    box-shadow: none;
    cursor: pointer;
    color: var(--white);
    border-radius: 200px;
    background: var(--black);

    @media ${t.tablet} {
      width: 199px;
    }
  }

  .Select__placeholder {
    color: var(--white);
  }

  .Select__indicator {
    position: absolute;
    right: 24px;
    padding: 0;

    transform: ${e=>e.$menuIsOpen?"rotate(180deg)":"none"};
    display: ${e=>e.$menuIsOpen?"block":"display"};
  }

  .Select__indicator-separator {
    display: none;
  }

  .Select__option {
    background: none;
    cursor: pointer;
    color: rgba(243, 243, 243, 0.4);
    transition: var(--tran-fast);
  }

  .Select__option--is-focused {
    color: var(--white);
  }

  .Select__menu {
    height: ${e=>e.$small?"240px":"314px"};
    border-radius: 20px;
    background: var(--black);
    padding-top: 9px;
    padding-right: 7px;
    overflow-y: hidden;

    @media ${t.tablet} {
      font-size: 17px;
      line-height: 1.56;
      height: ${e=>e.$small?"295px":"405px"};
    }

    .Select__menu-list {
      &::-webkit-scrollbar {
        width: 8px;
      }

      &::-webkit-scrollbar-thumb {
        background: var(--gray);
        border-radius: 12px;
      }
    }

    .Select__value-container--has-value {
      color: var(--white);
    }

    .Select__option--is-selected {
      color: var(--orange);
      cursor: pointer;
    }
  }
`,f={singleValue:()=>({color:"var(--white)"}),valueContainer:()=>({display:"flex",paddingLeft:"10px"})};export{c as D,b as S,g as a,m as b,w as c,u as d,S as e,f as s};
