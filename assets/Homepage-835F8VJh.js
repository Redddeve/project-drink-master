import{s as r,d as i,N as b,j as t,u as f,r as j,a as w,b as v,c as d,e as y,f as D}from"./index-iWLKKpYj.js";import{P as $}from"./PageTitle-Dbv3aPud.js";import{s as M}from"./selectors-3DDbZiSm.js";import{S as a,D as s}from"./DrinksPage.styled-Y7gFmybU.js";import"./react-select.esm-Zir8Xz2N.js";const S=r.section`
  margin-bottom: 112px;

  @media ${i.tablet} {
    margin-bottom: 123px;
  }

  @media ${i.desktop} {
    display: flex;
    flex-direction: row;
    gap: 130px;
    margin-bottom: 160px;
  }
`,C=r.div`
  margin-bottom: 47px;

  @media ${i.tablet} {
    width: 641px;
    margin-bottom: 54px;
  }

  @media ${i.desktop} {
    width: 715px;
    margin-bottom: 0;
    margin-top: 57px;
    height: 330px;
  }
`,H=r.p`
  line-height: 1.42em;
  margin-bottom: 32px;

  @media ${i.tablet} {
    width: 619px;
    font-size: 18px;
    line-height: 1.33em;
    margin-bottom: 48px;
  }

  @media ${i.desktop} {
    width: 500px;
    margin-bottom: 40px;
  }
`,O=r(b)`
  color: var(--black);
  font-weight: 600;
  line-height: 1.28em;
  padding: 14px 40px;
  border-radius: 42px;
  background: var(--white);
  display: inline-block;

  &:hover,
  &:focus {
    border: 2px solid rgba(64, 112, 205, 0.5);
    transition: var(--tran-fast);
  }

  @media ${i.tablet} {
    padding: 18px 44px;
    line-height: 1.12em;
  }
`,P=r.div`
  width: 252px;
  height: 313px;
  margin: 0 auto;

  @media ${i.tablet} {
    width: 359px;
    height: 445px;
  }
`,T=()=>t.jsx(t.Fragment,{children:t.jsxs(S,{children:[t.jsxs(C,{children:[t.jsx($,{mbMobile:"16",mbTablet:"28",mbDesktop:"28",title:"Craft Your Perfect Drink with Drink Master"}),t.jsx(H,{children:"Unlock your inner mixologist with Drink Master, your one-stop destination for exploring, crafting, and mastering the world's finest beverages."}),t.jsx(O,{to:"/add",children:"Add drinks"})]}),t.jsx(P,{children:t.jsx("img",{srcSet:`${f} 1x, ${j} 2x`,alt:"cocktail"})})]})}),o=r.h2`
  font-size: 28px;
  font-weight: 600;
  line-height: 1.14em;
  margin-top: 40px;
  margin-bottom: 24px;

  @media ${i.tablet} {
    font-size: 40px;
    margin-top: 80px;
    margin-bottom: 40px;
  }
`,A=r(b)`
  width: 163px;
  color: var(--black);
  background: var(--white);
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

  @media ${i.tablet} {
    width: 183px;
    padding: 18px 44px;
    line-height: 1.12em;
    margin-top: 80px;
  }
`,E=()=>{var h,l,c,g;const x=w(),n=v(M),u=d.useMediaQuery({query:"(min-width: 1440px)"}),p=d.useMediaQuery({query:"(min-width: 768px) and (max-width: 1439px)"}),k=d.useMediaQuery({query:"(max-width: 767px)"}),m=u?3:p?2:1;return y.useEffect(()=>{x(D({limit:m}))},[x,k,p,m]),t.jsx(t.Fragment,{children:t.jsxs("section",{children:[t.jsx(o,{children:"Ordinary Drink"}),t.jsx(a,{children:(h=n["Ordinary Drink"])==null?void 0:h.map(e=>t.jsx(s,{drink:e},e._id))}),t.jsx(o,{children:"Cocktail"}),t.jsx(a,{children:(l=n.Cocktail)==null?void 0:l.map(e=>t.jsx(s,{drink:e},e._id))}),t.jsx(o,{children:"Shake"}),t.jsx(a,{children:(c=n.Shake)==null?void 0:c.map(e=>t.jsx(s,{drink:e},e._id))}),t.jsx(o,{children:"Other/Unknown"}),t.jsx(a,{children:(g=n["Other/Unknown"])==null?void 0:g.map(e=>t.jsx(s,{drink:e},e._id))}),t.jsx(A,{to:"/drinks",children:"Other drinks"})]})})},L=()=>t.jsxs(t.Fragment,{children:[t.jsx(T,{}),t.jsx(E,{})]});export{L as default};
