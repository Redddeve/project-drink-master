import{u as r,d as t,a as i,l as o,L as p,P as n,b as s,j as a}from"./index-iLZRhtMc.js";import{S as c}from"./react-select.esm-js9v630-.js";const h=r.li`
  width: 335px;

  @media ${t.tablet} {
    width: 342px;
  }

  @media ${t.desktop} {
    width: 400px;
  }
`,x=r.img`
  width: 100%;
  height: 360px;
  border-radius: 8px;

  @media ${t.desktop} {
    height: 400px;
  }
`,m=r.span`
  font-size: 16px;
  font-weight: 500;
  line-height: 1.38;
  color: ${({theme:e})=>e==="dark"?i.colors.main:o.colors.main};
`,g=r.div`
  width: 100%;
  margin-top: 14px;
  display: flex;
  justify-content: space-between;
`,b=r(p)`
  color: ${({theme:e})=>e==="dark"?i.colors.transp:o.colors.transp};
  cursor: pointer;
`,w=({drink:e})=>{const l=s(d=>d.theme.theme);return a.jsxs(h,{children:[a.jsx(x,{src:e.drinkThumb,alt:e.drink}),a.jsxs(g,{children:[a.jsx(m,{theme:l,children:e.drink}),a.jsx(b,{theme:l,to:`../drink/${e._id}`,children:"See more"})]})]})};w.propTypes={drink:n.shape({drinkThumb:n.string,drink:n.string,_id:n.string})};r.h2`
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
`;const $=r.div`
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
`,S=r.ul`
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
`,f=r.input`
  width: 100%;
  height: 54px;
  padding: 0 24px;
  border-radius: 200px;
  border: ${({theme:e})=>e==="dark"?i.borderColor.main:o.borderColor.main};
  color: ${({theme:e})=>e==="dark"?i.colors.main:o.colors.main};
  opacity: 0.8;
  outline: none;
  background: transparent;

  @media ${t.tablet} {
    width: 264px;
  }
`,v=r.svg`
  position: absolute;
  width: 20px;
  height: 20px;
  top: 18px;
  left: 220px;
  stroke: ${({theme:e})=>e==="dark"?i.colors.main:o.colors.main};
  fill: ${({theme:e})=>e==="dark"?o.colors.main:i.colors.main};

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
`,y=r(c)`
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
    display: flex;
    align-items: center;
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
    padding: 4.5px 12px;
    background: none;
    cursor: pointer;
    color: ${({theme:e})=>e==="dark"?"var(--transp-white)":"var(--transp-dark)"};
    transition: var(--tran-fast);
  }

  .Select__input-container {
    color: var(--white);
  }

  .Select__menu {
    height: ${e=>e.$small?"240px":"314px"};
    border-radius: 20px;
    background-color: ${({theme:e})=>e==="dark"?"var(--light-theme-bg)":"var(--white)"};
    color: ${({theme:e})=>e==="dark"?"var(--white)":"var(--black)"};
    padding-right: 7px;
    overflow-y: hidden;

    @media ${t.tablet} {
      font-size: 17px;
      line-height: 1.56;
      height: ${e=>e.$small?"295px":"405px"};
    }

    .Select__menu-list {
      max-height: ${e=>e.$small?"295px":"405px"};

      &::-webkit-scrollbar {
        padding-right: 5px;
        padding-bottom: 5px;
        width: 8px;
      }

      &::-webkit-scrollbar-track {
        margin-top: 10px;
        margin-bottom: 13px;
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

    /* .cqenAZ .Select__option--is-focused {
      color: ${({theme:e})=>e==="dark"?"var(--transp-white)":"var(--transp-dark)"};
    } */
  }
`,_={singleValue:()=>({color:"var(--white)"}),valueContainer:()=>({display:"flex",paddingLeft:"10px"})};export{w as D,S,$ as a,f as b,v as c,y as d,_ as s};
