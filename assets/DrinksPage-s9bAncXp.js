import{u as x,d as v,a as m,l as u,e as R,b as r,g as l,s as f,k as B,m as N,n as p,o as i,j as s,p as q,c as A,r as K,L as _}from"./index-mfwUlT7G.js";import{P as z}from"./PageTitle-zwtzf5PE.js";import{S as j,d as G,a as H}from"./Dropdown.styled-hyzdZOdY.js";import{a as J,b as Q,c as U,d as $,e as V,f as W}from"./selectors-QSo4Kgn-.js";import{u as X,E as Y,a as Z,b as ee,P as te}from"./Paginator-uGhDiBHu.js";import{S as se,D as ne}from"./SearchResultsContainer.styled-GE8f1CeS.js";import{C as re}from"./CircleBg-f6u2UAeC.js";import"./LazyLoad-UGY74-A7.js";const ae=x.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 14px;
  margin-bottom: 40px;

  @media ${v.tablet} {
    max-width: 678px;
    flex-direction: row;
    gap: 8px;
  }
`,oe=x.input`
  width: 100%;
  height: 54px;
  padding: 0 24px;
  border-radius: 200px;
  border: ${({theme:e})=>e==="dark"?m.borderColor.main:u.borderColor.main};
  color: ${({theme:e})=>e==="dark"?m.colors.main:u.colors.main};
  opacity: 0.8;
  outline: none;
  background: transparent;
  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
    -webkit-background-clip: text;
    -webkit-text-fill-color: ${({theme:e})=>e==="dark"?m.colors.main:u.colors.main}; // колір тексту
    -webkit-background-color: transparent !important;
    -webkit-border: ${({theme:e})=>e==="dark"?m.borderColor.main:u.borderColor.main};
    transition: all 0s 50000s;
    transition: background-color 5000s ease-in-out 0s;
  }

  @media ${v.tablet} {
    width: 264px;
  }
`,ie=x.svg`
  position: absolute;
  width: 20px;
  height: 20px;
  top: 18px;
  left: 220px;
  cursor: pointer;
  stroke: ${({theme:e})=>e==="dark"?m.colors.main:u.colors.main};
  fill: ${({theme:e})=>e==="dark"?u.colors.main:m.colors.main};

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
`,le=()=>{const e=R(),c=r(J),o=r(Q),n=r(U),[d,P]=l.useState(""),[g,k]=l.useState(""),[h,b]=l.useState(""),[C,y]=l.useState(!1),[S,w]=l.useState(!1),I=r(f),a=X({mobile:10,tablet:10,desktop:9,default:9}),E=()=>{e(i({drink:d,ingredients:g,category:h,limit:a,page:n}))};l.useEffect(()=>{e(B()),e(N()),e(p(1)),e(i({drink:"",ingredients:"",category:"",limit:a,page:1}))},[e,a]),l.useEffect(()=>{e(i({drink:d,ingredients:g,category:h,limit:a,page:n}))},[n]);const O=c==null?void 0:c.map(t=>({value:t.title,label:t.title})),T=o==null?void 0:o.map(t=>({value:t,label:t})),D=t=>{t?(b(t.value),e(p(1)),e(i({drink:d,ingredients:g,category:t.value,limit:a,page:n}))):(b(""),e(p(1)),e(i({drink:d,ingredients:g,category:"",limit:a,page:n})))},M=t=>{t?(k(t.value),e(p(1)),e(i({drink:d,ingredients:t.value,category:h,limit:a,page:n}))):(k(""),e(p(1)),e(i({drink:d,ingredients:"",category:h,limit:a,page:n})))},F={...G,dropdownIndicator:t=>({...t,transition:"transform 0.2s ease",transform:S?"rotate(180deg)":null})},L={...H,dropdownIndicator:t=>({...t,transition:"transform 0.2s ease",transform:C?"rotate(180deg)":null})};return s.jsxs(ae,{children:[s.jsx(oe,{theme:I,placeholder:"Enter the text",onChange:t=>P(t.currentTarget.value),onBlur:t=>{e(p(1)),e(i({drink:t.currentTarget.value,ingredients:g,category:h,limit:a,page:n}))},onKeyPress:t=>{t.code==="Enter"&&E()}}),s.jsx(ie,{theme:I,children:s.jsx("use",{href:`${q}#icon-search`})}),s.jsx(j,{options:T,placeholder:"All categories",isSearchable:!1,isClearable:!0,onChange:D,onMenuOpen:()=>w(!0),onMenuClose:()=>{w(!1)},$menuIsOpen:S,styles:F,theme:t=>({...t,colors:{neutral50:"#fff"}})}),s.jsx(j,{options:O,placeholder:"Ingredients",isClearable:!0,onChange:M,onMenuOpen:()=>y(!0),onMenuClose:()=>{y(!1)},$menuIsOpen:C,styles:L,$small:!0,theme:t=>({...t,colors:{neutral50:"#fff"}})})]})},ce=()=>{const e=r($),c=r(f);return s.jsx(se,{children:e.length!==0?e==null?void 0:e.map(o=>s.jsx(ne,{drink:o},o._id)):s.jsxs(Y,{children:[s.jsx(Z,{srcSet:`${A} 1x, ${K} 2x`,alt:"Cocktail"}),s.jsx(ee,{theme:c,children:"No cocktails found by your request"})]})})},ke=()=>{const e=r($),c=r(V),o=r(f),n=r(W);return l.useEffect(()=>{window.scrollTo({top:0})},[]),s.jsxs(s.Fragment,{children:[s.jsx(re,{}),s.jsx(z,{title:"Drinks"}),s.jsx(le,{}),c?s.jsx(_,{}):s.jsx(te,{items:e,ListComponent:()=>s.jsx(ce,{}),theme:o,pageCount:n})]})};export{ke as default};
