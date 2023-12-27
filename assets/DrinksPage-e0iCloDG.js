import{u as k,d as b,a as g,l as u,e as L,b as n,g as l,s as f,i as F,k as N,m as p,n as o,j as r,o as R,c as q,r as A,L as B}from"./index-s5OVVX0z.js";import{P as z}from"./PageTitle-Wemk3PfV.js";import{S as K}from"./react-select.esm-sM0aJ2sN.js";import{a as V,b as Z,c as G,d as _,e as H,f as J}from"./selectors-TSUNPaXh.js";import{u as Q,E as U,a as W,b as X,P as Y}from"./Paginator--fACEfLQ.js";import{S as ee,D as te}from"./SearchResultsContainer.styled-ewg97F-8.js";import{C as re}from"./CircleBg-wY8dpsw1.js";import"./LazyLoad-ViEeGi8B.js";const ae=k.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 14px;
  margin-bottom: 40px;

  @media ${b.tablet} {
    max-width: 678px;
    flex-direction: row;
    gap: 8px;
  }
`,ne=k.input`
  width: 100%;
  height: 54px;
  padding: 0 24px;
  border-radius: 200px;
  border: ${({theme:e})=>e==="dark"?g.borderColor.main:u.borderColor.main};
  color: ${({theme:e})=>e==="dark"?g.colors.main:u.colors.main};
  opacity: 0.8;
  outline: none;
  background: transparent;
  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
    -webkit-background-clip: text;
    -webkit-text-fill-color: ${({theme:e})=>e==="dark"?g.colors.main:u.colors.main}; // колір тексту
    -webkit-background-color: transparent !important;
    -webkit-border: ${({theme:e})=>e==="dark"?g.borderColor.main:u.borderColor.main};
    transition: all 0s 50000s;
    transition: background-color 5000s ease-in-out 0s;
  }

  @media ${b.tablet} {
    width: 264px;
  }
`,ie=k.svg`
  position: absolute;
  width: 20px;
  height: 20px;
  top: 18px;
  left: 180px;
  cursor: pointer;
  stroke: ${({theme:e})=>e==="dark"?g.colors.main:u.colors.main};
  fill: ${({theme:e})=>e==="dark"?u.colors.main:g.colors.main};

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
`,$=k(K)`
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

    @media ${b.tablet} {
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

    @media ${b.tablet} {
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
`,C={singleValue:()=>({color:"var(--white)"}),valueContainer:()=>({display:"flex",paddingLeft:"10px"})},se=()=>{const e=L(),c=n(V),s=n(Z),a=n(G),[d,j]=l.useState(""),[m,S]=l.useState(""),[h,v]=l.useState(""),[I,w]=l.useState(!1),[P,y]=l.useState(!1),x=n(f),i=Q({mobile:10,tablet:10,desktop:9,default:9}),O=()=>{e(o({drink:d,ingredients:m,category:h,limit:i,page:a}))};l.useEffect(()=>{e(F()),e(N()),e(p(1)),e(o({drink:"",ingredients:"",category:"",limit:i,page:1}))},[e,i]),l.useEffect(()=>{e(o({drink:d,ingredients:m,category:h,limit:i,page:a}))},[a]);const E=c==null?void 0:c.map(t=>({value:t.title,label:t.title})),T=s==null?void 0:s.map(t=>({value:t,label:t})),D=t=>{t?(v(t.value),e(p(1)),e(o({drink:d,ingredients:m,category:t.value,limit:i,page:a}))):(v(""),e(p(1)),e(o({drink:d,ingredients:m,category:"",limit:i,page:a})))},M=t=>{t?(S(t.value),e(p(1)),e(o({drink:d,ingredients:t.value,category:h,limit:i,page:a}))):(S(""),e(p(1)),e(o({drink:d,ingredients:"",category:h,limit:i,page:a})))};return r.jsxs(ae,{children:[r.jsx(ne,{theme:x,placeholder:"Enter the text",onChange:t=>j(t.currentTarget.value),onBlur:t=>{e(p(1)),e(o({drink:t.currentTarget.value,ingredients:m,category:h,limit:i,page:a}))},onKeyPress:t=>{t.code==="Enter"&&O()}}),r.jsx(ie,{theme:x,children:r.jsx("use",{href:`${R}#icon-search`})}),r.jsx($,{theme:x,classNamePrefix:"Select",options:T,placeholder:"All categories",isSearchable:!1,isClearable:!0,onChange:D,onMenuOpen:()=>y(!0),onMenuClose:()=>{y(!1)},$menuIsOpen:P,styles:C}),r.jsx($,{theme:x,classNamePrefix:"Select",options:E,placeholder:"Ingredients",isClearable:!0,onChange:M,onMenuOpen:()=>w(!0),onMenuClose:()=>{w(!1)},$menuIsOpen:I,styles:C,$small:!0})]})},oe=()=>{const e=n(_),c=n(f);return r.jsx(ee,{children:e.length!==0?e==null?void 0:e.map(s=>r.jsx(te,{drink:s},s._id)):r.jsxs(U,{children:[r.jsx(W,{srcSet:`${q} 1x, ${A} 2x`,alt:"Cocktail"}),r.jsx(X,{theme:c,children:"No cocktails found by your request"})]})})},xe=()=>{const e=n(_),c=n(H),s=n(f),a=n(J);return l.useEffect(()=>{window.scrollTo({top:0})},[]),r.jsxs(r.Fragment,{children:[r.jsx(re,{}),r.jsx(z,{title:"Drinks"}),r.jsx(se,{}),c?r.jsx(B,{}):r.jsx(Y,{items:e,ListComponent:()=>r.jsx(oe,{}),theme:s,pageCount:a})]})};export{xe as default};
