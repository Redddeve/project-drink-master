import{s as a,d as i,a as s,j as t,A as o,B as r,u as n,r as c,D as p}from"./index-GKUeT4jD.js";import{d as x}from"./selectors-U2SLgOji.js";import{C as l}from"./CocktailList-YQd2fHYQ.js";import{B as d}from"./ButtonUpToTop-gcoAj70-.js";const m=a.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 205px;
  gap: 32px;
  margin: 90px auto 0;

  @media ${i.tablet} {
    margin: 100px auto 0;
    width: 261px;
  }

  @media ${i.desktop} {
    margin: 67px auto 0;
  }
`,h=a.img`
  height: 247px;

  @media ${i.tablet} {
    height: 326px;
  }
`,u=a.p`
  text-align: center;
  font-weight: 500;
`,g=()=>{const e=s(x);return e.length===0?t.jsxs(m,{children:[t.jsx(h,{srcSet:`${o} 1x, ${r} 2x`,alt:"Cocktail"}),t.jsx(u,{children:"You haven’t added any favorite cocktails yet"})]}):t.jsx(l,{cocktailData:e,page:"favorite"})},f=a.h2`
  font-size: 32px;
  font-weight: 600;
  line-height: 1.18;

  @media ${i.tablet} {
    font-size: 56px;
  }

  @media ${i.desktop} {
    font-size: 64px;
  }
`,y=()=>{const e=n();return c.useEffect(()=>{e(p())},[e]),t.jsxs("section",{children:[t.jsx(f,{children:"Favorites"}),t.jsx(g,{}),t.jsx(d,{})]})};export{y as default};
