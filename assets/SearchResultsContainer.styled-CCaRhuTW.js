import{u as i,d as r,a as n,l as a,L as l,P as s,b as p,j as t}from"./index-9ks2UI5a.js";import{g as c}from"./LazyLoad-Q6AsWGkW.js";const x=i.li`
  width: 335px;

  @media ${r.tablet} {
    width: 342px;
  }

  @media ${r.desktop} {
    width: 400px;
  }
`,m=i.img`
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
  color: ${({theme:e})=>e==="dark"?n.colors.main:a.colors.main};
`,g=i.div`
  width: 100%;
  margin-top: 14px;
  display: flex;
  justify-content: space-between;
`,k=i(l)`
  position: relative;
  z-index: 1;
  color: ${({theme:e})=>e==="dark"?n.colors.transp:a.colors.transp};
  cursor: pointer;
`,f=({drink:e})=>{const o=p(d=>d.theme.theme);return t.jsxs(x,{children:[t.jsx(c,{offset:100,children:t.jsx(m,{src:e.drinkThumb,alt:e.drink})}),t.jsxs(g,{children:[t.jsx(h,{theme:o,children:e.drink}),t.jsx(k,{theme:o,to:`../drink/${e._id}`,children:"See more"})]})]})};f.propTypes={drink:s.shape({drinkThumb:s.string,drink:s.string,_id:s.string})};const y=i.ul`
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
`;export{f as D,y as S};
