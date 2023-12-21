import{b as i,j as t,s as a,d as e,a as o,e as n,U as c}from"./index-zqTu2PMS.js";import{h as r}from"./selectors-3DDbZiSm.js";import{C as l}from"./CocktailList-8tcyjaHt.js";import{a as p,E as d}from"./MyCocktails.styled-ec9WT3DD.js";const h=()=>{const s=i(r);return s.length===0?t.jsx(p,{children:t.jsx(d,{children:"You have not added any own cocktails"})}):t.jsx(l,{cocktailData:s,page:"my"})},m=a.h2`
  font-size: 32px;
  font-weight: 600;
  line-height: 1.18;

  @media ${e.tablet} {
    font-size: 56px;
  }

  @media ${e.desktop} {
    font-size: 64px;
  }
`,j=()=>{const s=o();return n.useEffect(()=>{s(c())},[s]),t.jsxs("section",{children:[t.jsx(m,{children:"PageTitle"}),t.jsx(h,{})]})};export{j as default};
