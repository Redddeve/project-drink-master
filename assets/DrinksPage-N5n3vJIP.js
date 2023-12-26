import{u as k,d as u,a as x,l as b,e as L,b as n,g as l,s as f,i as F,k as N,m as p,n as o,j as r,o as R,c as q,r as A,L as z}from"./index-XLLciX8N.js";import{P as B}from"./PageTitle-L3qf6XAS.js";import{S as K}from"./react-select.esm-SAWjwlLX.js";import{a as V,b as Z,c as G,d as _,e as H,f as J}from"./selectors-_FwoqZ9g.js";import{u as Q}from"./usePerPage-YnUmh-xB.js";import{S as U,D as W}from"./SearchResultsContainer.styled-JKS0PLtB.js";import{E as X,a as Y,b as ee,P as te}from"./Paginator-OhKtc45E.js";import"./LazyLoad-Le0Hmlm6.js";const re=k.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 14px;
  margin-bottom: 40px;

  @media ${u.tablet} {
    max-width: 678px;
    flex-direction: row;
    gap: 8px;
  }
`,ae=k.input`
  width: 100%;
  height: 54px;
  padding: 0 24px;
  border-radius: 200px;
  border: ${({theme:e})=>e==="dark"?x.borderColor.main:b.borderColor.main};
  color: ${({theme:e})=>e==="dark"?x.colors.main:b.colors.main};
  opacity: 0.8;
  outline: none;
  background: transparent;

  @media ${u.tablet} {
    width: 264px;
  }
`,ne=k.svg`
  position: absolute;
  width: 20px;
  height: 20px;
  top: 18px;
  left: 180px;
  stroke: ${({theme:e})=>e==="dark"?x.colors.main:b.colors.main};
  fill: ${({theme:e})=>e==="dark"?b.colors.main:x.colors.main};

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
`,w=k(K)`
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

    @media ${u.tablet} {
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

    @media ${u.tablet} {
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
`,C={singleValue:()=>({color:"var(--white)"}),valueContainer:()=>({display:"flex",paddingLeft:"10px"})},se=()=>{const e=L(),c=n(V),i=n(Z),a=n(G),[d,j]=l.useState(""),[g,S]=l.useState(""),[m,v]=l.useState(""),[I,y]=l.useState(!1),[P,$]=l.useState(!1),h=n(f),s=Q({mobile:10,tablet:10,desktop:9,default:9}),O=()=>{e(o({drink:d,ingredients:g,category:m,limit:s,page:a}))};l.useEffect(()=>{e(F()),e(N()),e(p(1)),e(o({drink:"",ingredients:"",category:"",limit:s,page:1}))},[e,s]),l.useEffect(()=>{e(o({drink:d,ingredients:g,category:m,limit:s,page:a}))},[a]);const E=c==null?void 0:c.map(t=>({value:t.title,label:t.title})),T=i==null?void 0:i.map(t=>({value:t,label:t})),D=t=>{t?(v(t.value),e(p(1)),e(o({drink:d,ingredients:g,category:t.value,limit:s,page:a}))):(v(""),e(p(1)),e(o({drink:d,ingredients:g,category:"",limit:s,page:a})))},M=t=>{t?(S(t.value),e(p(1)),e(o({drink:d,ingredients:t.value,category:m,limit:s,page:a}))):(S(""),e(p(1)),e(o({drink:d,ingredients:"",category:m,limit:s,page:a})))};return r.jsxs(re,{children:[r.jsx(ae,{theme:h,placeholder:"Enter the text",onChange:t=>j(t.currentTarget.value),onBlur:t=>{e(p(1)),e(o({drink:t.currentTarget.value,ingredients:g,category:m,limit:s,page:a}))},onKeyPress:t=>{t.code==="Enter"&&O()}}),r.jsx(ne,{theme:h,children:r.jsx("use",{href:`${R}#icon-search`})}),r.jsx(w,{theme:h,classNamePrefix:"Select",options:T,placeholder:"All categories",isSearchable:!1,isClearable:!0,onChange:D,onMenuOpen:()=>$(!0),onMenuClose:()=>{$(!1)},$menuIsOpen:P,styles:C}),r.jsx(w,{theme:h,classNamePrefix:"Select",options:E,placeholder:"Ingredients",isClearable:!0,onChange:M,onMenuOpen:()=>y(!0),onMenuClose:()=>{y(!1)},$menuIsOpen:I,styles:C,$small:!0})]})},ie=()=>{const e=n(_),c=n(f);return r.jsx(U,{children:e.length!==0?e==null?void 0:e.map(i=>r.jsx(W,{drink:i},i._id)):r.jsxs(X,{children:[r.jsx(Y,{srcSet:`${q} 1x, ${A} 2x`,alt:"Cocktail"}),r.jsx(ee,{theme:c,children:"No cocktails found by your request"})]})})},ue=()=>{const e=n(_),c=n(H),i=n(f),a=n(J);return l.useEffect(()=>{window.scrollTo({top:0})},[]),r.jsxs(r.Fragment,{children:[r.jsx(B,{title:"Drinks"}),r.jsx(se,{}),c?r.jsx(z,{}):r.jsx(te,{items:e,ListComponent:()=>r.jsx(ie,{}),theme:i,pageCount:a})]})};export{ue as default};
