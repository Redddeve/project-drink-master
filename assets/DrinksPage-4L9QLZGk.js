import{u as f,d as $,a as p,l as m,e as R,b as s,g as i,s as x,k as N,m as q,n as d,o as u,j as n,p as A,c as _,r as z,L as G}from"./index-nsOMKm01.js";import{P as H}from"./PageTitle-HSLH8nur.js";import{S as v,d as J,a as K}from"./Dropdown.styled-i9I5MLbH.js";import{a as Q,b as U,c as V,d as T,e as W,f as X}from"./selectors-iwselClM.js";import{u as Y,E as Z,a as ee,b as te,P as ne}from"./Paginator-2b6vLujZ.js";import{S as se,D as re}from"./SearchResultsContainer.styled-qICnN6gk.js";import{C as ae}from"./CircleBg-7qi-qRgu.js";import"./LazyLoad-ALiBAnBX.js";const oe=f.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 14px;
  margin-bottom: 40px;

  @media ${$.tablet} {
    max-width: 678px;
    flex-direction: row;
    gap: 8px;
  }
`,ie=f.input`
  width: 100%;
  height: 54px;
  padding: 0 24px;
  border-radius: 200px;
  border: ${({theme:e})=>e==="dark"?p.borderColor.main:m.borderColor.main};
  color: ${({theme:e})=>e==="dark"?p.colors.main:m.colors.main};
  opacity: 0.8;
  outline: none;
  background: transparent;
  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
    -webkit-background-clip: text;
    -webkit-text-fill-color: ${({theme:e})=>e==="dark"?p.colors.main:m.colors.main};
    -webkit-background-color: transparent !important;
    -webkit-border: ${({theme:e})=>e==="dark"?p.borderColor.main:m.borderColor.main};
    transition: all 0s 50000s;
    transition: background-color 5000s ease-in-out 0s;
  }

  @media ${$.tablet} {
    width: 264px;
  }
`,le=f.svg`
  position: absolute;
  width: 20px;
  height: 20px;
  top: 18px;
  left: 220px;
  cursor: pointer;
  stroke: ${({theme:e})=>e==="dark"?p.colors.main:m.colors.main};
  fill: ${({theme:e})=>e==="dark"?m.colors.main:p.colors.main};

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
`,ce=()=>{const e=R(),l=s(Q),r=s(U),a=s(V),[c,k]=i.useState(""),[g,b]=i.useState(""),[h,C]=i.useState(""),[S,w]=i.useState(!1),[y,I]=i.useState(!1),j=s(x),o=Y({mobile:10,tablet:10,desktop:9,default:9});i.useEffect(()=>{e(N()),e(q()),e(d(1))},[e,o]),i.useEffect(()=>{e(u({drink:c,ingredients:g,category:h,limit:o,page:a}))},[a]);const P=l==null?void 0:l.map(t=>({value:t.title,label:t.title})),O=r==null?void 0:r.map(t=>({value:t,label:t})),D=t=>{t?(C(t.value),e(d(1)),e(u({drink:c,ingredients:g,category:t.value,limit:o,page:a}))):(C(""),e(d(1)),e(u({drink:c,ingredients:g,category:"",limit:o,page:a})))},E=t=>{t?(b(t.value),e(d(1)),e(u({drink:c,ingredients:t.value,category:h,limit:o,page:a}))):(b(""),e(d(1)),e(u({drink:c,ingredients:"",category:h,limit:o,page:a})))},M=t=>{t.currentTarget.value!==c&&(k(t.currentTarget.value),e(u({drink:t.currentTarget.value,ingredients:g,category:h,limit:o,page:1})),e(d(1)))},F=t=>{t.preventDefault(),t.currentTarget.name.value!==c&&(k(t.currentTarget.name.value),e(u({drink:t.currentTarget.name.value,ingredients:g,category:h,limit:o,page:1})),e(d(1)))},L={...J,dropdownIndicator:t=>({...t,transition:"transform 0.2s ease",transform:y?"rotate(180deg)":null})},B={...K,dropdownIndicator:t=>({...t,transition:"transform 0.2s ease",transform:S?"rotate(180deg)":null})};return n.jsxs(oe,{children:[n.jsx("form",{onSubmit:F,children:n.jsx(ie,{theme:j,placeholder:"Enter the text",onBlur:M,name:"name"})}),n.jsx(le,{theme:j,children:n.jsx("use",{href:`${A}#icon-search`})}),n.jsx(v,{options:O,placeholder:"All categories",isSearchable:!1,isClearable:!0,onChange:D,onMenuOpen:()=>I(!0),onMenuClose:()=>{I(!1)},$menuIsOpen:y,styles:L,theme:t=>({...t,colors:{neutral50:"#fff"}})}),n.jsx(v,{options:P,placeholder:"Ingredients",isClearable:!0,onChange:E,onMenuOpen:()=>w(!0),onMenuClose:()=>{w(!1)},$menuIsOpen:S,styles:B,$small:!0,theme:t=>({...t,colors:{neutral50:"#fff"}})})]})},de=()=>{const e=s(T),l=s(x);return n.jsx(se,{children:e.length!==0?e==null?void 0:e.map(r=>n.jsx(re,{drink:r},r._id)):n.jsxs(Z,{children:[n.jsx(ee,{srcSet:`${_} 1x, ${z} 2x`,alt:"Cocktail"}),n.jsx(te,{theme:l,children:"No cocktails found by your request"})]})})},be=()=>{const e=s(T),l=s(W),r=s(x),a=s(X);return i.useEffect(()=>{window.scrollTo({top:0})},[]),n.jsxs(n.Fragment,{children:[n.jsx(ae,{}),n.jsx(H,{title:"Drinks"}),n.jsx(ce,{}),l?n.jsx(G,{}):n.jsx(ne,{items:e,ListComponent:()=>n.jsx(de,{}),theme:r,pageCount:a})]})};export{be as default};
