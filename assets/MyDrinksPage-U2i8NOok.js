import{s as i,d as s,b as a,j as t,a as n,e as o,U as c}from"./index-CJO0Qxxs.js";import{h as r}from"./selectors-3DDbZiSm.js";import{C as l}from"./CocktailList-gOpFn-vf.js";const p=i.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 205px;
  gap: 32px;
  margin: 90px auto 0;

  @media ${s.tablet} {
    margin: 100px auto 0;
    width: 261px;
  }

  @media ${s.desktop} {
    margin: 67px auto 0;
  }
`,d=i.p`
  text-align: center;
  font-weight: 500;
`,x=()=>{const e=a(r);return e.length===0?t.jsx(p,{children:t.jsx(d,{children:"You have not added any own cocktails"})}):t.jsx(l,{cocktailData:e,page:"my"})},m=i.h2`
  font-size: 32px;
  font-weight: 600;
  line-height: 1.18;

  @media ${s.tablet} {
    font-size: 56px;
  }

  @media ${s.desktop} {
    font-size: 64px;
  }
`,k=()=>{const e=n();return o.useEffect(()=>{e(c())},[e]),t.jsxs("section",{children:[t.jsx(m,{children:"PageTitle"}),t.jsx(x,{})]})};export{k as default};
