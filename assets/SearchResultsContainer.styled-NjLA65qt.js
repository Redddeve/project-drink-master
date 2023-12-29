import{u as t,d as s,a as n,l as d,q as m,P as a,g as h,b as g,j as r}from"./index-Je2lLvjD.js";import{u,r as S,g as k}from"./LazyLoad-OsOMH_sy.js";const f=t.li`
  width: 335px;

  @media ${s.tablet} {
    width: 342px;
  }

  @media ${s.desktop} {
    width: 400px;
  }
`,i=t.img`
  width: 100%;
  height: 360px;
  border-radius: 8px;

  @media ${s.desktop} {
    height: 400px;
  }
`,w=t.span`
  font-size: 16px;
  font-weight: 500;
  line-height: 1.38;
  color: ${({theme:e})=>e==="dark"?n.colors.main:d.colors.main};
`,y=t.div`
  width: 100%;
  margin-top: 14px;
  display: flex;
  justify-content: space-between;
`,j=t(m)`
  position: relative;
  z-index: 1;
  color: ${({theme:e})=>e==="dark"?n.colors.transp:d.colors.transp};
  cursor: pointer;
`,$=({drink:e})=>{const[l,p]=h.useState(!1),c=()=>p(!0),o=g(x=>x.theme.theme);return r.jsxs(f,{children:[l?r.jsx(i,{srcSet:`${u} 1x, ${S} 2x`,alt:e}):r.jsx(k,{offset:100,children:r.jsx(i,{src:e.drinkThumb,alt:e.drink,onError:c})}),r.jsxs(y,{children:[r.jsx(w,{theme:o,children:e.drink}),r.jsx(j,{theme:o,to:`../drink/${e._id}`,"aria-label":"See more",children:"See more"})]})]})};$.propTypes={drink:a.shape({drinkThumb:a.string,drink:a.string,_id:a.string})};const E=t.ul`
  display: flex;
  flex-direction: column;
  gap: 28px;
  list-style: none;

  @media ${s.tablet} {
    flex-direction: row;
    flex-wrap: wrap;
    gap: 20px;
    row-gap: 40px;
  }

  @media ${s.desktop} {
    row-gap: 80px;
  }
`;export{$ as D,E as S};
