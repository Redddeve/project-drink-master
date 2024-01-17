import{u as s,d as t,a as x,l as m,X as w,P as i,e as R,g as h,j as e,p as j,V as q,Y as y,Z as $,q as C,$ as T,a0 as L}from"./index-u8BqMUJS.js";import{u as S,r as E,g as I}from"./LazyLoad-UtDDrU8l.js";const A=s.li`
  display: flex;
  width: 335px;
  flex-direction: column;
  align-items: flex-start;
  gap: 18px;

  @media ${t.tablet} {
    width: 342px;
    gap: 24px;
  }

  @media ${t.desktop} {
    width: 400px;
    gap: 24px;
  }
`,u=s.img`
  width: 335px;
  height: 360px;
  border-radius: 8px;
  background: linear-gradient(
    180deg,
    rgba(10, 10, 17, 0.02) 51.18%,
    rgba(10, 10, 17, 0.77) 97.66%
  );

  @media ${t.tablet} {
    width: 342px;
  }

  @media ${t.desktop} {
    width: 400px;
    height: 400px;
  }
`,B=s.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
`,_=s.h3`
  font-size: 18px;
  font-weight: 500;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  color: ${({theme:r})=>r==="dark"?x.colors.main:m.colors.main};

  @media ${t.tablet} {
    font-size: 24px;
  }
`,z=s.p`
  color: ${({theme:r})=>r==="dark"?x.colors.transp:m.colors.transp};
`,G=s.p`
  overflow: hidden;
  height: 75px;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  color: ${({theme:r})=>r==="dark"?x.colors.main:m.colors.main};

  @media ${t.tablet} {
    height: 110px;
    -webkit-line-clamp: 5;
  }

  @media ${t.desktop} {
    height: 90px;
    -webkit-line-clamp: 4;
  }
`,H=s.div`
  display: flex;
  align-items: center;
  gap: 8px;
`,P=w`
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.08);
  }
`,D=s.button`
  padding: 11px;
  border-radius: 40px;
  background: var(--black);
  cursor: pointer;
  border: var(--see-more-item);

  &:hover,
  :focus {
    transition: var(--tran-fast);
    animation: ${P} 1.5s infinite;
  }

  & > svg {
    fill: var(--white);
  }

  @media ${t.tablet} {
    padding: 15px;
  }
`,g=({id:r,page:d})=>{const a=R(),[o,n]=h.useState(!1),c={favorite:q,my:y},p=()=>{if(!o){const l=c[d];l&&a(l(r)),n(!0)}};return e.jsx(D,{type:"button",onClick:p,"aria-label":"Are you sure you want to remove this cocktail?",children:e.jsx("svg",{width:"24",height:"22",children:e.jsx("use",{href:j+"#icon-trash"})})})};g.propTypes={id:i.string.isRequired,page:i.string.isRequired};const f=({cocktail:r,page:d,theme:a})=>{const{_id:o,drink:n,alcoholic:c,description:p,drinkThumb:l}=r,[k,b]=h.useState(!1),v=()=>b(!0);return e.jsxs(A,{children:[k?e.jsx(u,{srcSet:`${S} 1x, ${E} 2x`,alt:n}):e.jsx(I,{offset:100,children:e.jsx(u,{src:l,alt:n,onError:v})}),e.jsxs(B,{children:[e.jsx(_,{theme:a,children:n}),e.jsx(z,{theme:a,children:c})]}),e.jsx(G,{theme:a,children:p}),e.jsxs(H,{children:[e.jsx($,{as:C,to:`/drink/${o}`,variant:"seeMoreItem","aria-label":"See more details about this cocktail",children:"See more"}),e.jsx(g,{id:o,page:d})]})]})};f.propTypes={cocktail:i.shape({_id:i.string.isRequired,drink:i.string.isRequired,alcoholic:i.string.isRequired,description:i.string.isRequired,drinkThumb:i.string.isRequired}).isRequired,page:i.string.isRequired,theme:i.string.isRequired};const F=s.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 40px;

  @media ${t.tablet} {
    column-gap: 20px;
    row-gap: 80px;
  }
`,M=({cocktailData:r,destination:d,theme:a})=>e.jsx(e.Fragment,{children:e.jsx(F,{children:r==null?void 0:r.map((o,n)=>e.jsx(f,{theme:a,cocktail:o,page:d},o._id||n))})});M.propTypes={cocktailData:i.arrayOf(i.shape({_id:i.string.isRequired,drink:i.string.isRequired,alcoholic:i.string.isRequired,description:i.string.isRequired,drinkThumb:i.string.isRequired})).isRequired,destination:i.string.isRequired,theme:i.string.isRequired};const X=()=>e.jsx(T,{children:e.jsx(L,{color:"#dfdfdf",size:60,speedMultiplier:1.5})});export{M as C,X as G};
