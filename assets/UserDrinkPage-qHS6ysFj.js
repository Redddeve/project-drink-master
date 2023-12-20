import{s as i,d as e,P as m,a as g,e as x,h as u,b as c,j as t,M as w,K as $,O as v,S as y,T as j}from"./index-CJO0Qxxs.js";import{b as T,g as S,f as D}from"./selectors-3DDbZiSm.js";const z=i.div`
  margin-bottom: 18px;

  @media ${e.tablet} {
    margin-bottom: 80px;
  }

  @media ${e.desktop} {
    display: flex;
    gap: 249px;
    margin-bottom: 100px;
  }
`,I=i.h2`
  font-size: 32px;
  font-weight: 600;
  line-height: 1.19;
  margin-bottom: 8px;

  @media ${e.tablet} {
    font-size: 56px;
    line-height: 1.07;
  }

  @media ${e.desktop} {
    font-size: 64px;
  }
}
`,F=i.p`
  color: var(--transp-white);
  font-size: 12px;
  line-height: 1.17;
  margin-bottom: 20px;

  @media ${e.tablet} {
    font-size: 16px;
    line-height: 1.25;
  }
`,P=i.p`
  max-width: 335px;
  margin-bottom: 40px;

  @media ${e.tablet} {
    max-width: 600px;
  }
`,E=i.button`
  display: flex;
  width: 222px;
  padding: 14px 40px;
  align-items: center;
  border-radius: 42px;
  background: #f3f3f3;
  color: #161f37;
  border: 1px solid rgba(243, 243, 243, 0.2);

  font-weight: 600;
  line-height: 1.29;
  transition: var(--tran-fast);
  margin-bottom: 80px;

  @media ${e.tablet} {
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
`,R=i.img`
  width: 335px;
  height: 400px;

  @media ${e.tablet} {
    width: 704px;
    height: 400px;
  }

  @media ${e.desktop} {
    width: 400px;
  }
`,M=i.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 21px;
  padding-bottom: 80px;
  @media ${e.tablet} {
    gap: 22px;
  }
  @media ${e.desktop} {
    gap: 35px;
    padding-bottom: 100px;
  }
`,W=i.li`
  width: 157px;
  height: 175px;
  @media ${e.tablet} {
    width: 220px;
    height: 258px;
  }
`,B=i.div`
  border-radius: 8px;
  width: 157px;
  height: 157px;
  background: rgba(22, 31, 55, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 8px;
  @media ${e.tablet} {
    width: 220px;
    height: 220px;
    margin-bottom: 14px;
  }
  @media ${e.desktop} {
  }
`,H=i.img`
  width: 107px;
  height: 107px;
  @media ${e.tablet} {
    width: 175px;
    height: 175px;
  }
  @media ${e.desktop} {
  }
`,L=i.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`,b=i.p`
  font-size: 14px;
  line-height: 18px;
  @media ${e.tablet} {
    font-size: 18px;
    line-height: 24px;
  }
  @media ${e.desktop} {
  }
`,O=i(b)`
  color: rgba(243, 243, 243, 0.5);
`,_=i.h3`
  color: rgba(243, 243, 243, 0.5);
  font-size: 16px;
  line-height: 20px;
  margin-bottom: 42px;
  font-weight: 500;
  @media ${e.tablet} {
    font-size: 18px;
    line-height: 24px;
  }
  @media ${e.desktop} {
  }
`,f=({ingredientsArray:s})=>{const o=g();x.useEffect(()=>{o(u())},[o]);const n=c(T),r=window.innerWidth<768,p=window.innerWidth>=768&&window.innerWidth<1440,l=a=>{if(n.length!==0)return n==null?void 0:n.find(d=>a===d._id)[r?"thumbSmall":p?"thumbMedium":"ingredientThumb"]};return t.jsxs("div",{children:[t.jsx(_,{children:"Ingredients"}),t.jsx(M,{children:s==null?void 0:s.map(({ingredientId:a,title:d,measure:h})=>t.jsxs(W,{children:[t.jsx(B,{children:t.jsx(H,{src:l(a),alt:d})}),t.jsxs(L,{children:[t.jsx(b,{children:d}),t.jsx(O,{children:h})]})]},d))})]})};f.propTypes={ingredientsArray:m.array};const A="/project-drink-master/assets/three-cocktails-mobile@1x-Db068_xD.jpg",C="/project-drink-master/assets/three-cocktails@1x-TzhNJt-O.jpg",J=i.div`
  display: flex;
  flex-direction: column-reverse;
  gap: 40px;
  @media ${e.tablet} {
  }
  @media ${e.desktop} {
    flex-direction: row;
    gap: 60px;
  }
`,K=i.div`
  background: url(${A});
  width: 335px;
  height: 430px;
  display: block;
  border-radius: 9px;
  background-size: cover;
  background-position: center;
  @media ${e.tablet} {
    background: url(${C});
    width: 704px;
    background-size: cover;
    border-radius: 10px;
  }
  @media ${e.desktop} {
    width: 631px;
    height: 480px;
  }
`,N=i.h3`
  font-size: 28px;
  font-weight: 600;
  line-height: 32px;
  margin-bottom: 40px;
  @media ${e.tablet} {
    font-size: 40px;
    line-height: 44px;
  }
  @media ${e.desktop} {
    margin-bottom: 60px;
  }
`,U=i.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  @media ${e.tablet} {
    font-size: 16px;
    font-weight: 400;
    line-height: 22px;
  }
  @media ${e.desktop} {
    width: 549px;
    max-height: 480px;
    overflow-y: scroll;
  }
`,k=({instructions:s})=>t.jsxs("div",{children:[t.jsx(N,{children:"Recipe Preparation"}),t.jsxs(J,{children:[t.jsx(K,{}),t.jsx(U,{children:s})]})]});k.propTypes={instructions:m.string};const Q=()=>{const{drinkId:s}=w(),o=g(),n=c(S),r=c(D),[p,l]=x.useState(!1),a=()=>{o(y(s))},d=()=>{o(j(s))};return x.useEffect(()=>{o($()),o(v(s))},[o,s]),x.useEffect(()=>{l(!!(r!=null&&r.find(h=>h.id===n.id)))},[r,n.id]),t.jsxs(t.Fragment,{children:[t.jsxs(z,{children:[t.jsxs("div",{children:[t.jsx(I,{children:n.drink}),t.jsx(F,{children:`${n.glass} / ${n.alcoholic}`}),t.jsx(P,{children:n.description}),t.jsx(E,{onClick:p?d:a,children:p?"Remove from favorite drinks":"Add to favorite drinks"})]}),t.jsx(R,{src:n.drinkThumb})]}),t.jsx(f,{ingredientsArray:n?n.ingredients:[]}),t.jsx(k,{instructions:n.instructions})]})};export{Q as default};
