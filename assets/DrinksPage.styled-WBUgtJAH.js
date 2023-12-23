import{u as o,d as t,a as i,l as a,L as s,P as n,b as p,j as r}from"./index-SyEy7cQd.js";import{g as c}from"./LazyLoad-lqgBXDAx.js";import{S as h}from"./react-select.esm-BjHlvSsI.js";const x=o.li`
  width: 335px;

  @media ${t.tablet} {
    width: 342px;
  }

  @media ${t.desktop} {
    width: 400px;
  }
`,m=o.img`
  width: 100%;
  height: 360px;
  border-radius: 8px;

  @media ${t.desktop} {
    height: 400px;
  }
`,g=o.span`
  font-size: 16px;
  font-weight: 500;
  line-height: 1.38;
  color: ${({theme:e})=>e==="dark"?i.colors.main:a.colors.main};
`,b=o.div`
  width: 100%;
  margin-top: 14px;
  display: flex;
  justify-content: space-between;
`,w=o(s)`
  color: ${({theme:e})=>e==="dark"?i.colors.transp:a.colors.transp};
  cursor: pointer;
`,u=({drink:e})=>{const l=p(d=>d.theme.theme);return r.jsxs(x,{children:[r.jsx(c,{height:400,offset:100,onContentVisible:()=>{console.log("loaded!")},children:r.jsx(m,{src:e.drinkThumb,alt:e.drink})}),r.jsxs(b,{children:[r.jsx(g,{theme:l,children:e.drink}),r.jsx(w,{theme:l,to:`../drink/${e._id}`,children:"See more"})]})]})};u.propTypes={drink:n.shape({drinkThumb:n.string,drink:n.string,_id:n.string})};o.h2`
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
`;const S=o.div`
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
`,v=o.ul`
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
`,y=o.input`
  width: 100%;
  height: 54px;
  padding: 0 24px;
  border-radius: 200px;
  border: ${({theme:e})=>e==="dark"?i.borderColor.main:a.borderColor.main};
  color: ${({theme:e})=>e==="dark"?i.colors.main:a.colors.main};
  opacity: 0.8;
  outline: none;
  background: transparent;

  @media ${t.tablet} {
    width: 264px;
  }
`,_=o.svg`
  position: absolute;
  width: 20px;
  height: 20px;
  top: 18px;
  left: 220px;
  stroke: ${({theme:e})=>e==="dark"?i.colors.main:a.colors.main};
  fill: ${({theme:e})=>e==="dark"?a.colors.main:i.colors.main};

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
`,C=o(h)`
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
`,j={singleValue:()=>({color:"var(--white)"}),valueContainer:()=>({display:"flex",paddingLeft:"10px"})};export{u as D,v as S,S as a,y as b,_ as c,C as d,j as s};
