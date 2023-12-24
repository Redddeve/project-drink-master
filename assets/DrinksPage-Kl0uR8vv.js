import{u as x,d as g,a as h,l as u,e as E,b as l,g as s,s as y,i as M,k as T,m as a,j as r,n as P,c as F,r as N}from"./index-WJJjeUv5.js";import{P as q}from"./PageTitle-PG-xE1Ee.js";import{S as A}from"./react-select.esm-8R91o4QS.js";import{a as R,b as z,c as B}from"./selectors--rgpZBpc.js";import{S as K,D as L}from"./SearchResultsContainer.styled-SumdC9D_.js";import{E as V,a as Z,b as G}from"./FavoriteCocktails.styled-MI5V_Eai.js";import"./LazyLoad-JS6XkIn_.js";const H=x.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 14px;
  margin-bottom: 40px;

  @media ${g.tablet} {
    max-width: 678px;
    flex-direction: row;
    gap: 8px;
  }
`,J=x.input`
  width: 100%;
  height: 54px;
  padding: 0 24px;
  border-radius: 200px;
  border: ${({theme:e})=>e==="dark"?h.borderColor.main:u.borderColor.main};
  color: ${({theme:e})=>e==="dark"?h.colors.main:u.colors.main};
  opacity: 0.8;
  outline: none;
  background: transparent;

  @media ${g.tablet} {
    width: 264px;
  }
`,Q=x.svg`
  position: absolute;
  width: 20px;
  height: 20px;
  top: 18px;
  left: 180px;
  stroke: ${({theme:e})=>e==="dark"?h.colors.main:u.colors.main};
  fill: ${({theme:e})=>e==="dark"?u.colors.main:h.colors.main};

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
`,f=x(A)`
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

    @media ${g.tablet} {
      width: 250px;
    }
  }

  .Select__placeholder {
    color: var(--white);
    display: flex;
    align-items: center;
    margin: 0;
  }

  .Select__indicator {
    position: absolute;
    right: 24px;
    padding: 0;

    transform: ${e=>e.$menuIsOpen?"rotate(180deg)":"none"};
    display: ${e=>e.$menuIsOpen?"block":"display"};
  }

  .Select__clear-indicator {
    position: absolute;
    right: 45px;
  }

  .Select__indicator-separator {
    display: none;
  }

  .Select__single-value {
    display: flex;
    align-items: center;
  }

  .Select__option {
    padding: 4.5px 12px;
    background: none;
    cursor: pointer;
    color: ${({theme:e})=>e==="dark"?"var(--transp-white)":"var(--transp-dark)"};
    transition: var(--tran-fast);
  }

  .Select__option:hover {
    color: ${({theme:e})=>e==="dark"?"var(--white)":"var(--dark)"};
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

    @media ${g.tablet} {
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

    .Select__option--is-selected {
      color: var(--orange);
      cursor: pointer;
    }

    /* .cqenAZ .Select__option--is-focused {
      color: ${({theme:e})=>e==="dark"?"var(--transp-white)":"var(--transp-dark)"};
    } */
  }
`,v={singleValue:()=>({color:"var(--white)"}),valueContainer:()=>({display:"flex",paddingLeft:"10px"})},U=()=>{const e=E(),i=l(R),n=l(z),[o,$]=s.useState(""),[c,m]=s.useState(""),[d,b]=s.useState(""),[w,k]=s.useState(!1),[_,S]=s.useState(!1),p=l(y),C=()=>{e(a({drink:o,ingredients:c,category:d}))};s.useEffect(()=>{e(M()),e(T()),e(a({drink:"",ingredients:"",category:""}))},[e]);const j=i==null?void 0:i.map(t=>({value:t.title,label:t.title})),I=n==null?void 0:n.map(t=>({value:t,label:t})),O=t=>{t?(b(t.value),e(a({drink:o,ingredients:c,category:t.value}))):(b(""),e(a({drink:o,ingredients:c,category:""})))},D=t=>{t?(m(t.value),e(a({drink:o,ingredients:t.value,category:d}))):(m(""),e(a({drink:o,ingredients:"",category:d})))};return r.jsxs(H,{children:[r.jsx(J,{theme:p,placeholder:"Enter the text",onChange:t=>$(t.currentTarget.value),onBlur:t=>e(a({drink:t.currentTarget.value,ingredients:c,category:d})),onKeyPress:t=>{t.code==="Enter"&&C()}}),r.jsx(Q,{theme:p,children:r.jsx("use",{href:`${P}#icon-search`})}),r.jsx(f,{theme:p,classNamePrefix:"Select",options:I,placeholder:"All categories",isSearchable:!1,isClearable:!0,onChange:O,onMenuOpen:()=>S(!0),onMenuClose:()=>{S(!1)},$menuIsOpen:_,styles:v}),r.jsx(f,{theme:p,classNamePrefix:"Select",options:j,placeholder:"Ingredients",isClearable:!0,onChange:D,onMenuOpen:()=>k(!0),onMenuClose:()=>{k(!1)},$menuIsOpen:w,styles:v,$small:!0})]})},W=()=>{const e=l(B),i=l(y);return r.jsx(K,{children:e.length!==0?e==null?void 0:e.map(n=>r.jsx(L,{drink:n},n._id)):r.jsxs(V,{children:[r.jsx(Z,{srcSet:`${F} 1x, ${N} 2x`,alt:"Cocktail"}),r.jsx(G,{theme:i,children:"No cocktails found by your request"})]})})},se=()=>r.jsxs(r.Fragment,{children:[r.jsx(q,{title:"Drinks"}),r.jsx(U,{}),r.jsx(W,{})]});export{se as default};
