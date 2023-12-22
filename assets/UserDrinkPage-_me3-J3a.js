import{u as o,d as t,a as r,l as a,P as b,b as c,s as k,e as u,g as m,k as y,j as i,Q as v,O as T,R as S,S as D,T as z}from"./index-X7_WEst2.js";import{b as I,g as F,f as P}from"./selectors-3DDbZiSm.js";const R=o.div`
  margin-bottom: 18px;

  @media ${t.tablet} {
    margin-bottom: 80px;
  }

  @media ${t.desktop} {
    display: flex;
    gap: 249px;
    margin-bottom: 100px;
  }
`,E=o.h2`
  font-size: 32px;
  font-weight: 600;
  line-height: 1.19;
  margin-bottom: 8px;
  color: ${({theme:e})=>e==="dark"?r.colors.main:a.colors.main};

  @media ${t.tablet} {
    font-size: 56px;
    line-height: 1.07;
  }

  @media ${t.desktop} {
    font-size: 64px;
  }
`,B=o.p`
  color: ${({theme:e})=>e==="dark"?r.colors.transp:a.colors.transp};
  font-size: 12px;
  line-height: 1.17;
  margin-bottom: 20px;

  @media ${t.tablet} {
    font-size: 16px;
    line-height: 1.25;
  }
`,M=o.p`
  width: 335px;
  margin-bottom: 40px;
  color: ${({theme:e})=>e==="dark"?r.colors.main:a.colors.main};

  @media ${t.tablet} {
    width: 600px;
  }
`,W=o.button`
  display: flex;
  width: 222px;
  padding: 14px 40px;
  align-items: center;
  border-radius: 42px;
  background-color: ${({theme:e})=>e==="dark"?r.colors.main:a.background.lightBg};
  color: ${({theme:e})=>e==="dark"?r.background.main:a.background.main};
  border: 1px solid rgba(243, 243, 243, 0.2);

  font-weight: 600;
  line-height: 1.29;
  transition: var(--tran-fast);
  margin-bottom: 80px;

  @media ${t.tablet} {
    width: 260px;
    padding: 18px 44px;
    font-size: 16px;
    line-height: 1.12;
  }

  &:hover {
    cursor: pointer;
    background: transparent;
    border: 1px solid rgba(243, 243, 243, 0.2);
    color: #f3f3f3;
  }
`,H=o.img`
  width: 335px;
  height: 400px;

  @media ${t.tablet} {
    width: 704px;
    height: 400px;
  }

  @media ${t.desktop} {
    width: 400px;
  }
`,L=o.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 21px;
  padding-bottom: 80px;
  @media ${t.tablet} {
    gap: 22px;
  }
  @media ${t.desktop} {
    gap: 35px;
    padding-bottom: 100px;
  }
`,O=o.li`
  width: 157px;
  height: 175px;
  @media ${t.tablet} {
    width: 220px;
    height: 258px;
  }
`,A=o.div`
  border-radius: 8px;
  width: 157px;
  height: 157px;
  background-color: ${({theme:e})=>e==="dark"?r.colors.main:a.background.lightBg};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 8px;
  @media ${t.tablet} {
    width: 220px;
    height: 220px;
    margin-bottom: 14px;
  }
  @media ${t.desktop} {
  }
`,C=o.img`
  width: 107px;
  height: 107px;
  @media ${t.tablet} {
    width: 175px;
    height: 175px;
  }
  @media ${t.desktop} {
  }
`,J=o.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`,f=o.p`
  font-size: 14px;
  line-height: 18px;
  color: ${({theme:e})=>e==="dark"?r.colors.main:a.colors.main};
  @media ${t.tablet} {
    font-size: 18px;
    line-height: 24px;
  }
  @media ${t.desktop} {
  }
`,N=o(f)`
  color: ${({theme:e})=>e==="dark"?r.colors.transp:a.colors.transp};
`,Q=o.h3`
  color: ${({theme:e})=>e==="dark"?r.colors.transp:a.colors.transp};
  font-size: 16px;
  line-height: 20px;
  margin-bottom: 42px;
  font-weight: 500;
  @media ${t.tablet} {
    font-size: 18px;
    line-height: 24px;
  }
  @media ${t.desktop} {
  }
`,$=({ingredientsArray:e})=>{const s=c(k),d=u();m.useEffect(()=>{d(y())},[d]);const n=c(I),p=window.innerWidth<768,x=window.innerWidth>=768&&window.innerWidth<1440,g=l=>{if(n.length!==0)return n==null?void 0:n.find(h=>l===h.title)[p?"thumbSmall":x?"thumbMedium":"ingredientThumb"]};return i.jsxs("div",{children:[i.jsx(Q,{theme:s,children:"Ingredients"}),i.jsx(L,{children:e==null?void 0:e.map(({title:l,measure:h})=>i.jsxs(O,{children:[i.jsx(A,{children:i.jsx(C,{src:g(l),alt:l})}),i.jsxs(J,{children:[i.jsx(f,{theme:s,children:l}),i.jsx(N,{theme:s,children:h})]})]},l))})]})};$.propTypes={ingredientsArray:b.array};const U="/project-drink-master/assets/three-cocktails-mobile@1x-Db068_xD.jpg",_="/project-drink-master/assets/three-cocktails@1x-TzhNJt-O.jpg",q=o.div`
  display: flex;
  flex-direction: column-reverse;
  gap: 40px;
  @media ${t.tablet} {
  }
  @media ${t.desktop} {
    flex-direction: row;
    gap: 60px;
  }
`,G=o.div`
  background: url(${U});
  width: 335px;
  height: 430px;
  display: block;
  border-radius: 9px;
  background-size: cover;
  background-position: center;
  @media ${t.tablet} {
    background: url(${_});
    width: 704px;
    background-size: cover;
    border-radius: 10px;
  }
  @media ${t.desktop} {
    width: 631px;
    height: 480px;
  }
`,K=o.h3`
  font-size: 28px;
  font-weight: 600;
  line-height: 32px;
  margin-bottom: 40px;
  color: ${({theme:e})=>e==="dark"?r.colors.main:a.colors.main};
  @media ${t.tablet} {
    font-size: 40px;
    line-height: 44px;
  }
  @media ${t.desktop} {
    margin-bottom: 60px;
  }
`,V=o.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  color: ${({theme:e})=>e==="dark"?r.colors.main:a.colors.main};
  @media ${t.tablet} {
    font-size: 16px;
    font-weight: 400;
    line-height: 22px;
  }
  @media ${t.desktop} {
    width: 549px;
  }
`,w=({instructions:e})=>{const s=c(k);return i.jsxs("div",{children:[i.jsx(K,{theme:s,children:"Recipe Preparation"}),i.jsxs(q,{children:[i.jsx(G,{}),i.jsx(V,{theme:s,children:e})]})]})};w.propTypes={instructions:b.string};const Z=()=>{const e=c(k),{drinkId:s}=v(),d=u(),n=c(F),p=c(P),[x,g]=m.useState(!1),l=()=>{d(D(s))},h=()=>{d(z(s))};return m.useEffect(()=>{d(T()),d(S(s))},[d,s]),m.useEffect(()=>{g(!!(p!=null&&p.find(j=>j.id===n.id)))},[p,n.id]),i.jsxs(i.Fragment,{children:[i.jsxs(R,{children:[i.jsxs("div",{children:[i.jsx(E,{theme:e,children:n.drink}),i.jsx(B,{theme:e,children:`${n.glass} / ${n.alcoholic}`}),i.jsx(M,{theme:e,children:n.description}),i.jsx(W,{theme:e,onClick:x?h:l,children:x?"Remove from favorite drinks":"Add to favorite drinks"})]}),i.jsx(H,{theme:e,src:n.drinkThumb})]}),i.jsx($,{theme:e,ingredientsArray:n?n.ingredients:[]}),i.jsx(w,{theme:e,instructions:n.instructions})]})};export{Z as default};
