import{u as i,d as r,a,l as n,q as l,P as s,b as p,j as t}from"./index-mfwUlT7G.js";import{g as c}from"./LazyLoad-UGY74-A7.js";const m=i.li`
  width: 335px;

  @media ${r.tablet} {
    width: 342px;
  }

  @media ${r.desktop} {
    width: 400px;
  }
`,x=i.img`
  width: 100%;
  height: 360px;
  border-radius: 8px;

  @media ${r.desktop} {
    height: 400px;
  }
`,h=i.span`
  font-size: 16px;
  font-weight: 500;
  line-height: 1.38;
  color: ${({theme:e})=>e==="dark"?a.colors.main:n.colors.main};
`,g=i.div`
  width: 100%;
  margin-top: 14px;
  display: flex;
  justify-content: space-between;
`,k=i(l)`
  position: relative;
  z-index: 1;
  color: ${({theme:e})=>e==="dark"?a.colors.transp:n.colors.transp};
  cursor: pointer;
`,S=({drink:e})=>{const o=p(d=>d.theme.theme);return t.jsxs(m,{children:[t.jsx(c,{offset:100,children:t.jsx(x,{src:e.drinkThumb,alt:e.drink})}),t.jsxs(g,{children:[t.jsx(h,{theme:o,children:e.drink}),t.jsx(k,{theme:o,to:`../drink/${e._id}`,"aria-label":"See more",children:"See more"})]})]})};S.propTypes={drink:s.shape({drinkThumb:s.string,drink:s.string,_id:s.string})};const w=i.ul`
  display: flex;
  flex-direction: column;
  gap: 28px;
  list-style: none;

  @media ${r.tablet} {
    flex-direction: row;
    flex-wrap: wrap;
    gap: 20px;
    row-gap: 40px;
  }

  @media ${r.desktop} {
    row-gap: 80px;
  }
`;export{S as D,w as S};
