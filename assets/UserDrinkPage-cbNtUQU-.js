import{u as o,d as t,a as r,l as a,P as b,b as c,s as k,e as u,g as m,k as v,j as i,Q as y,O as T,R as S,S as D,T as z}from"./index-BnUE7wio.js";import{a as I,g as F,f as P}from"./selectors-oPwj-rOd.js";const R=o.div`
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
`,L=o.p`
  width: 335px;
  margin-bottom: 40px;
  color: ${({theme:e})=>e==="dark"?r.colors.main:a.colors.main};

  @media ${t.tablet} {
    width: 600px;
  }
`,C=o.button`
  position: relative;
  z-index: 1;

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
`,M=o.img`
  width: 335px;
  height: 400px;

  @media ${t.tablet} {
    width: 704px;
    height: 400px;
  }

  @media ${t.desktop} {
    width: 400px;
  }
`,W=o.ul`
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
`,_=o.li`
  width: 157px;
  height: 175px;
  @media ${t.tablet} {
    width: 220px;
    height: 258px;
  }
`,H=o.div`
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
`,O=o.img`
  width: 107px;
  height: 107px;
  @media ${t.tablet} {
    width: 175px;
    height: 175px;
  }
  @media ${t.desktop} {
  }
`,A=o.div`
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
`,J=o(f)`
  color: ${({theme:e})=>e==="dark"?r.colors.transp:a.colors.transp};
`,N=o.h3`
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
`,$=({ingredientsArray:e})=>{const n=c(k),d=u();m.useEffect(()=>{d(v())},[d]);const s=c(I),p=window.innerWidth<768,x=window.innerWidth>=768&&window.innerWidth<1440,g=l=>{if(s.length!==0)return s==null?void 0:s.find(h=>l.toLowerCase()===h.title.toLowerCase())[p?"thumbSmall":x?"thumbMedium":"ingredientThumb"]};return i.jsxs("div",{children:[i.jsx(N,{theme:n,children:"Ingredients"}),i.jsx(W,{children:e==null?void 0:e.map(({title:l,measure:h})=>i.jsxs(_,{children:[i.jsx(H,{children:i.jsx(O,{src:g(l),alt:l})}),i.jsxs(A,{children:[i.jsx(f,{theme:n,children:l}),i.jsx(J,{theme:n,children:h})]})]},l))})]})};$.propTypes={ingredientsArray:b.array};const Q="/project-drink-master/assets/three-cocktails-mobile@1x-Db068_xD.jpg",U="/project-drink-master/assets/three-cocktails@1x-TzhNJt-O.jpg",q=o.div`
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
  background: url(${Q});
  width: 335px;
  height: 430px;
  display: block;
  border-radius: 9px;
  background-size: cover;
  background-position: center;
  @media ${t.tablet} {
    background: url(${U});
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
`,w=({instructions:e})=>{const n=c(k);return i.jsxs("div",{children:[i.jsx(K,{theme:n,children:"Recipe Preparation"}),i.jsxs(q,{children:[i.jsx(G,{}),i.jsx(V,{theme:n,children:e})]})]})};w.propTypes={instructions:b.string};const Z=()=>{const e=c(k),{drinkId:n}=y(),d=u(),s=c(F),p=c(P),[x,g]=m.useState(!1),l=()=>{d(D(n))},h=()=>{d(z(n))};return m.useEffect(()=>{d(T({page:1,itemsPerPage:1e3})),d(S(n)),window.scrollTo({top:0})},[d,n]),m.useEffect(()=>{g(!!(p!=null&&p.find(j=>j._id===s._id)))},[s,p]),i.jsxs(i.Fragment,{children:[i.jsxs(R,{children:[i.jsxs("div",{children:[i.jsx(E,{theme:e,children:s.drink}),i.jsx(B,{theme:e,children:`${s.glass} / ${s.alcoholic}`}),i.jsx(L,{theme:e,children:s.description}),i.jsx(C,{theme:e,onClick:x?h:l,children:x?"Remove from favorite drinks":"Add to favorite drinks"})]}),i.jsx(M,{theme:e,src:s.drinkThumb})]}),i.jsx($,{theme:e,ingredientsArray:s?s.ingredients:[]}),i.jsx(w,{theme:e,instructions:s.instructions})]})};export{Z as default};
