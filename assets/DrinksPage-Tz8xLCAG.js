import{u as h,d as c,a as d,l as p,e as O,b as i,g as n,s as f,i as D,k as E,m as o,j as r,n as M,c as T,r as P}from"./index-zO5ZuINf.js";import{P as F}from"./PageTitle-6vDrAKsd.js";import{S as N}from"./react-select.esm-ZljlZej-.js";import{a as q,b as A,c as R}from"./selectors--rgpZBpc.js";import{S as z,D as B}from"./SearchResultsContainer.styled-gUgqI9cF.js";import{E as K,a as L,b as V}from"./FavoriteCocktails.styled-1xUVTTaK.js";import"./LazyLoad-Ua1W6dAu.js";const Z=h.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 14px;
  margin-bottom: 40px;

  @media ${c.tablet} {
    max-width: 678px;
    flex-direction: row;
    gap: 8px;
  }
`,G=h.input`
  width: 100%;
  height: 54px;
  padding: 0 24px;
  border-radius: 200px;
  border: ${({theme:e})=>e==="dark"?d.borderColor.main:p.borderColor.main};
  color: ${({theme:e})=>e==="dark"?d.colors.main:p.colors.main};
  opacity: 0.8;
  outline: none;
  background: transparent;

  @media ${c.tablet} {
    width: 264px;
  }
`,H=h.svg`
  position: absolute;
  width: 20px;
  height: 20px;
  top: 18px;
  left: 220px;
  stroke: ${({theme:e})=>e==="dark"?d.colors.main:p.colors.main};
  fill: ${({theme:e})=>e==="dark"?p.colors.main:d.colors.main};

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
`,k=h(N)`
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

    @media ${c.tablet} {
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

    @media ${c.tablet} {
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
`,S={singleValue:()=>({color:"var(--white)"}),valueContainer:()=>({display:"flex",paddingLeft:"10px"})},J=()=>{const e=O(),s=i(q),a=i(A),[g,y]=n.useState(""),[u,v]=n.useState(""),[x,$]=n.useState(""),[w,m]=n.useState(!1),[_,b]=n.useState(!1),l=i(f),C=()=>{e(o({drink:g,ingredients:u,category:x}))};n.useEffect(()=>{e(D()),e(E()),e(o({drink:"",ingredients:"",category:""}))},[e]);const j=s==null?void 0:s.map(t=>({value:t.title,label:t.title})),I=a==null?void 0:a.map(t=>({value:t,label:t}));return r.jsxs(Z,{children:[r.jsx(G,{theme:l,placeholder:"Enter the text",onChange:t=>y(t.currentTarget.value),onBlur:t=>e(o({drink:t.currentTarget.value,ingredients:u,category:x})),onKeyPress:t=>{t.code==="Enter"&&C()}}),r.jsx(H,{theme:l,children:r.jsx("use",{href:`${M}#icon-search`})}),r.jsx(k,{theme:l,classNamePrefix:"Select",options:I,placeholder:"All categories",isSearchable:!1,onChange:t=>{$(t.label),e(o({drink:g,ingredients:u,category:t.label}))},onMenuOpen:()=>b(!0),onMenuClose:()=>{b(!1)},$menuIsOpen:_,styles:S}),r.jsx(k,{theme:l,classNamePrefix:"Select",options:j,placeholder:"Ingredients",onChange:t=>{v(t.label),e(o({drink:g,ingredients:t.label,category:x}))},onMenuOpen:()=>m(!0),onMenuClose:()=>{m(!1)},$menuIsOpen:w,styles:S,$small:!0})]})},Q=()=>{const e=i(R),s=i(f);return r.jsx(z,{children:e.length!==0?e==null?void 0:e.map(a=>r.jsx(B,{drink:a},a._id)):r.jsxs(K,{children:[r.jsx(L,{srcSet:`${T} 1x, ${P} 2x`,alt:"Cocktail"}),r.jsx(V,{theme:s,children:"No cocktails found by your request"})]})})},ae=()=>r.jsxs(r.Fragment,{children:[r.jsx(F,{title:"Drinks"}),r.jsx(J,{}),r.jsx(Q,{})]});export{ae as default};
