import{u as a,d as o,a as s,l as n,N as y,b as m,j as e,c as D,r as v,e as M,s as S,f as u,g as b,h as C,i as T}from"./index-Oi_9f0oW.js";import{P as O}from"./PageTitle-ShmL178u.js";import{s as H}from"./selectors-cEoKtL6D.js";import{S as p,D as c}from"./SearchResultsContainer.styled-t3QO0nwH.js";import{C as I}from"./CircleBg-lqTSM_JP.js";import{M as A}from"./Modal-Fv2a-gUC.js";import"./LazyLoad-nrLVUmnQ.js";const E=a.section`
  margin-bottom: 112px;

  @media ${o.tablet} {
    margin-bottom: 123px;
  }

  @media ${o.desktop} {
    display: flex;
    flex-direction: row;
    gap: 130px;
    margin-bottom: 160px;
  }
`,P=a.div`
  margin-bottom: 47px;

  @media ${o.tablet} {
    width: 641px;
    margin-bottom: 54px;
  }

  @media ${o.desktop} {
    width: 715px;
    margin-bottom: 0;
    margin-top: 57px;
    height: 330px;
  }
`,z=a.p`
  line-height: 1.42em;
  margin-bottom: 32px;
  color: ${({theme:t})=>t==="dark"?s.colors.main:n.colors.main};

  @media ${o.tablet} {
    width: 619px;
    font-size: 18px;
    line-height: 1.33em;
    margin-bottom: 48px;
  }

  @media ${o.desktop} {
    width: 500px;
    margin-bottom: 40px;
  }
`,B=a(y)`
  position: relative;
  z-index: 1;

  color: ${({theme:t})=>t==="dark"?n.colors.main:s.colors.main};
  font-weight: 600;
  line-height: 1.28em;
  padding: 14px 40px;
  border-radius: 42px;
  background-color: ${({theme:t})=>t==="dark"?n.background.main:s.background.blackBg};
  display: inline-block;

  &:hover,
  &:focus {
    box-shadow: 0 0 15px 3px gray;
    transition: var(--tran-fast);
  }

  @media ${o.tablet} {
    padding: 18px 44px;
    line-height: 1.12em;
  }
`,L=a.div`
  width: 252px;
  height: 313px;
  margin: 0 auto;

  @media ${o.tablet} {
    width: 359px;
    height: 445px;
  }
`,N=()=>{const t=m(r=>r.theme.theme);return e.jsx(e.Fragment,{children:e.jsxs(E,{children:[e.jsxs(P,{children:[e.jsx(O,{mbMobile:"16",mbTablet:"28",mbDesktop:"28",title:"Craft Your Perfect Drink with Drink Master"}),e.jsx(z,{theme:t,children:"Unlock your inner mixologist with Drink Master, your one-stop destination for exploring, crafting, and mastering the world's finest beverages."}),e.jsx(B,{theme:t,to:"/add","aria-label":"Add drinks",children:"Add drinks"})]}),e.jsx(L,{children:e.jsx("img",{srcSet:`${D} 1x, ${v} 2x`,alt:"cocktail"})})]})})},x=a.h2`
  font-size: 28px;
  font-weight: 600;
  line-height: 1.14em;
  margin-top: 40px;
  margin-bottom: 24px;
  color: ${({theme:t})=>t==="dark"?s.colors.main:n.colors.main};

  @media ${o.tablet} {
    font-size: 40px;
    margin-top: 80px;
    margin-bottom: 40px;
  }
`,_=a(y)`
  width: 163px;
  color: ${({theme:t})=>t==="dark"?n.colors.main:s.colors.main};
  /* background: var(--white); */
  background-color: ${({theme:t})=>t==="dark"?n.background.main:s.background.blackBg};
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

  @media ${o.tablet} {
    width: 183px;
    padding: 18px 44px;
    line-height: 1.12em;
    margin-top: 80px;
  }
`,q=()=>{var f,j,w,$;const t=M(),r=m(H),d=m(S),h=u.useMediaQuery({query:"(min-width: 1440px)"}),l=u.useMediaQuery({query:"(min-width: 768px) and (max-width: 1439px)"}),g=u.useMediaQuery({query:"(max-width: 767px)"}),k=h?3:l?2:1;return b.useEffect(()=>{t(C({limit:k}))},[t,g,l,k]),e.jsx(e.Fragment,{children:e.jsxs("section",{children:[e.jsx(x,{theme:d,children:"Ordinary Drink"}),e.jsx(p,{children:(f=r["Ordinary Drink"])==null?void 0:f.map(i=>e.jsx(c,{drink:i},i._id))}),e.jsx(x,{children:"Cocktail"}),e.jsx(p,{children:(j=r.Cocktail)==null?void 0:j.map(i=>e.jsx(c,{drink:i},i._id))}),e.jsx(x,{children:"Shake"}),e.jsx(p,{children:(w=r.Shake)==null?void 0:w.map(i=>e.jsx(c,{drink:i},i._id))}),e.jsx(x,{children:"Other/Unknown"}),e.jsx(p,{children:($=r["Other/Unknown"])==null?void 0:$.map(i=>e.jsx(c,{drink:i},i._id))}),e.jsx(_,{theme:d,to:"/drinks","aria-label":"Other drinks",children:"Other drinks"})]})})},F=a.div`
  display: none;

  @media ${o.desktop} {
    position: absolute;
    display: block;
    top: 370px;
    right: 180px;
    width: 387px;
    height: 381px;
    border-radius: 381px;

    background: ${({theme:t})=>t==="dark"?"rgba(188, 230, 210, 0.3)":"rgba(188, 230, 210, 0.4)"};
    filter: blur(104.8543701171875px);
  }
`,Q="/project-drink-master/assets/Motivation-mob@2x-BTKJILD-.jpg",G=()=>{const t=m(T),[r,d]=b.useState(!1);b.useEffect(()=>{const l=new Date().toDateString(),g=sessionStorage.getItem("lastModalShown");(t===10||t===50||t===100)&&g!==l&&setTimeout(()=>{d(!0),sessionStorage.setItem("lastModalShown",l)},2e3)},[t]);const h=()=>{d(!1)};return e.jsxs(e.Fragment,{children:[e.jsx(F,{}),e.jsx(I,{}),e.jsx(N,{}),e.jsx(q,{}),r&&e.jsx(A,{background:Q,isOpen:!0,onClose:h,message:`Wow! You have been using the application for ${t} days!`})]})};export{G as default};
