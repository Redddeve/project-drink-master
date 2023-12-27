import{u as a,d as r,a as n,l as s,N as j,b as m,j as e,c as y,r as v,e as D,s as C,f as l,g as T,h as M}from"./index-bzyJHP9Z.js";import{P as O}from"./PageTitle-zrKN7xOo.js";import{s as S}from"./selectors-J6f2uE32.js";import{S as d,D as x}from"./SearchResultsContainer.styled-YEc5U0m5.js";import{C as H}from"./CircleBg-e9JqmciS.js";import"./LazyLoad-YymNEQMe.js";const A=a.section`
  margin-bottom: 112px;

  @media ${r.tablet} {
    margin-bottom: 123px;
  }

  @media ${r.desktop} {
    display: flex;
    flex-direction: row;
    gap: 130px;
    margin-bottom: 160px;
  }
`,P=a.div`
  margin-bottom: 47px;

  @media ${r.tablet} {
    width: 641px;
    margin-bottom: 54px;
  }

  @media ${r.desktop} {
    width: 715px;
    margin-bottom: 0;
    margin-top: 57px;
    height: 330px;
  }
`,z=a.p`
  line-height: 1.42em;
  margin-bottom: 32px;
  color: ${({theme:i})=>i==="dark"?n.colors.main:s.colors.main};

  @media ${r.tablet} {
    width: 619px;
    font-size: 18px;
    line-height: 1.33em;
    margin-bottom: 48px;
  }

  @media ${r.desktop} {
    width: 500px;
    margin-bottom: 40px;
  }
`,E=a(j)`
  position: relative;
  z-index: 1;

  color: ${({theme:i})=>i==="dark"?s.colors.main:n.colors.main};
  font-weight: 600;
  line-height: 1.28em;
  padding: 14px 40px;
  border-radius: 42px;
  background-color: ${({theme:i})=>i==="dark"?s.background.main:n.background.blackBg};
  display: inline-block;

  &:hover,
  &:focus {
    box-shadow: 0 0 15px 3px gray;
    transition: var(--tran-fast);
  }

  @media ${r.tablet} {
    padding: 18px 44px;
    line-height: 1.12em;
  }
`,N=a.div`
  width: 252px;
  height: 313px;
  margin: 0 auto;

  @media ${r.tablet} {
    width: 359px;
    height: 445px;
  }
`,_=()=>{const i=m(o=>o.theme.theme);return e.jsx(e.Fragment,{children:e.jsxs(A,{children:[e.jsxs(P,{children:[e.jsx(O,{mbMobile:"16",mbTablet:"28",mbDesktop:"28",title:"Craft Your Perfect Drink with Drink Master"}),e.jsx(z,{theme:i,children:"Unlock your inner mixologist with Drink Master, your one-stop destination for exploring, crafting, and mastering the world's finest beverages."}),e.jsx(E,{theme:i,to:"/add","aria-label":"Add drinks",children:"Add drinks"})]}),e.jsx(N,{children:e.jsx("img",{srcSet:`${y} 1x, ${v} 2x`,alt:"cocktail"})})]})})},p=a.h2`
  font-size: 28px;
  font-weight: 600;
  line-height: 1.14em;
  margin-top: 40px;
  margin-bottom: 24px;
  color: ${({theme:i})=>i==="dark"?n.colors.main:s.colors.main};

  @media ${r.tablet} {
    font-size: 40px;
    margin-top: 80px;
    margin-bottom: 40px;
  }
`,q=a(j)`
  width: 163px;
  color: ${({theme:i})=>i==="dark"?s.colors.main:n.colors.main};
  /* background: var(--white); */
  background-color: ${({theme:i})=>i==="dark"?s.background.main:n.background.blackBg};
  font-weight: 600;
  line-height: 1.28em;
  padding: 14px 40px;
  margin: 60px auto 0;
  border-radius: 42px;
  display: flex;
  justify-content: center;
  white-space: nowrap;

  &:hover,
  &:focus {
    box-shadow: 1px 1px 15px 3px gray;
    transition: var(--tran-fast);
  }

  @media ${r.tablet} {
    width: 183px;
    padding: 18px 44px;
    line-height: 1.12em;
    margin-top: 80px;
  }
`,B=()=>{var b,k,u,f;const i=D(),o=m(S),c=m(C),w=l.useMediaQuery({query:"(min-width: 1440px)"}),h=l.useMediaQuery({query:"(min-width: 768px) and (max-width: 1439px)"}),$=l.useMediaQuery({query:"(max-width: 767px)"}),g=w?3:h?2:1;return T.useEffect(()=>{i(M({limit:g}))},[i,$,h,g]),e.jsx(e.Fragment,{children:e.jsxs("section",{children:[e.jsx(p,{theme:c,children:"Ordinary Drink"}),e.jsx(d,{children:(b=o["Ordinary Drink"])==null?void 0:b.map(t=>e.jsx(x,{drink:t},t._id))}),e.jsx(p,{children:"Cocktail"}),e.jsx(d,{children:(k=o.Cocktail)==null?void 0:k.map(t=>e.jsx(x,{drink:t},t._id))}),e.jsx(p,{children:"Shake"}),e.jsx(d,{children:(u=o.Shake)==null?void 0:u.map(t=>e.jsx(x,{drink:t},t._id))}),e.jsx(p,{children:"Other/Unknown"}),e.jsx(d,{children:(f=o["Other/Unknown"])==null?void 0:f.map(t=>e.jsx(x,{drink:t},t._id))}),e.jsx(q,{theme:c,to:"/drinks","aria-label":"Other drinks",children:"Other drinks"})]})})},F=a.div`
  display: none;

  @media ${r.desktop} {
    position: absolute;
    display: block;
    top: 370px;
    right: 180px;
    width: 387px;
    height: 381px;
    border-radius: 381px;

    background: ${({theme:i})=>i==="dark"?"rgba(188, 230, 210, 0.3)":"rgba(188, 230, 210, 0.4)"};
    filter: blur(104.8543701171875px);
  }
`,G=()=>e.jsxs(e.Fragment,{children:[e.jsx(F,{}),e.jsx(H,{}),e.jsx(_,{}),e.jsx(B,{})]});export{G as default};
