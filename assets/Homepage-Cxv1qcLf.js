import{u as o,d as r,a,l as s,N as j,b as l,j as e,c as y,r as D,e as v,s as T,f as x,g as M,h as S}from"./index-X7_WEst2.js";import{P as C}from"./PageTitle-unO1yUMn.js";import{s as H}from"./selectors-3DDbZiSm.js";import{S as d,D as m}from"./DrinksPage.styled-JNDJpiwL.js";import"./react-select.esm-SZGD_mYU.js";const O=o.section`
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
`,P=o.div`
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
`,A=o.p`
  line-height: 1.42em;
  margin-bottom: 32px;
  color: ${({theme:t})=>t==="dark"?a.colors.main:s.colors.main};

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
`,E=o(j)`
  color: ${({theme:t})=>t==="dark"?s.colors.main:a.colors.main};
  font-weight: 600;
  line-height: 1.28em;
  padding: 14px 40px;
  border-radius: 42px;
  background-color: ${({theme:t})=>t==="dark"?s.background.main:a.background.blackBg};
  display: inline-block;

  &:hover,
  &:focus {
    border: 2px solid rgba(64, 112, 205, 0.5);
    transition: var(--tran-fast);
  }

  @media ${r.tablet} {
    padding: 18px 44px;
    line-height: 1.12em;
  }
`,N=o.div`
  width: 252px;
  height: 313px;
  margin: 0 auto;

  @media ${r.tablet} {
    width: 359px;
    height: 445px;
  }
`,_=()=>{const t=l(n=>n.theme.theme);return e.jsx(e.Fragment,{children:e.jsxs(O,{children:[e.jsxs(P,{children:[e.jsx(C,{mbMobile:"16",mbTablet:"28",mbDesktop:"28",title:"Craft Your Perfect Drink with Drink Master"}),e.jsx(A,{theme:t,children:"Unlock your inner mixologist with Drink Master, your one-stop destination for exploring, crafting, and mastering the world's finest beverages."}),e.jsx(E,{theme:t,to:"/add",children:"Add drinks"})]}),e.jsx(N,{children:e.jsx("img",{srcSet:`${y} 1x, ${D} 2x`,alt:"cocktail"})})]})})},c=o.h2`
  font-size: 28px;
  font-weight: 600;
  line-height: 1.14em;
  margin-top: 40px;
  margin-bottom: 24px;
  color: ${({theme:t})=>t==="dark"?a.colors.main:s.colors.main};

  @media ${r.tablet} {
    font-size: 40px;
    margin-top: 80px;
    margin-bottom: 40px;
  }
`,q=o(j)`
  width: 163px;
  color: ${({theme:t})=>t==="dark"?s.colors.main:a.colors.main};
  /* background: var(--white); */
  background-color: ${({theme:t})=>t==="dark"?s.background.main:a.background.blackBg};
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
    border: 2px solid rgba(64, 112, 205, 0.5);
    transition: var(--tran-fast);
  }

  @media ${r.tablet} {
    width: 183px;
    padding: 18px 44px;
    line-height: 1.12em;
    margin-top: 80px;
  }
`,z=()=>{var k,b,u,f;const t=v(),n=l(H),p=l(T),w=x.useMediaQuery({query:"(min-width: 1440px)"}),h=x.useMediaQuery({query:"(min-width: 768px) and (max-width: 1439px)"}),$=x.useMediaQuery({query:"(max-width: 767px)"}),g=w?3:h?2:1;return M.useEffect(()=>{t(S({limit:g}))},[t,$,h,g]),e.jsx(e.Fragment,{children:e.jsxs("section",{children:[e.jsx(c,{theme:p,children:"Ordinary Drink"}),e.jsx(d,{children:(k=n["Ordinary Drink"])==null?void 0:k.map(i=>e.jsx(m,{drink:i},i._id))}),e.jsx(c,{children:"Cocktail"}),e.jsx(d,{children:(b=n.Cocktail)==null?void 0:b.map(i=>e.jsx(m,{drink:i},i._id))}),e.jsx(c,{children:"Shake"}),e.jsx(d,{children:(u=n.Shake)==null?void 0:u.map(i=>e.jsx(m,{drink:i},i._id))}),e.jsx(c,{children:"Other/Unknown"}),e.jsx(d,{children:(f=n["Other/Unknown"])==null?void 0:f.map(i=>e.jsx(m,{drink:i},i._id))}),e.jsx(q,{theme:p,to:"/drinks",children:"Other drinks"})]})})},I=()=>e.jsxs(e.Fragment,{children:[e.jsx(_,{}),e.jsx(z,{})]});export{I as default};
