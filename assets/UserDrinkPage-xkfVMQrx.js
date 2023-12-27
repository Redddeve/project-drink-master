import{u as o,d as t,a as s,l as n,P as y,b as x,s as j,e as T,g as p,m as B,j as i,f as C,S as L,R as O,T as H,U as N,V as U}from"./index-2D4OfEnP.js";import{a as _,j as A,i as G}from"./selectors-0j7a_aEh.js";import{C as J}from"./CircleBg-gl7AfEh4.js";import{M as Y}from"./Modal-GaJBg5iz.js";const q=o.div`
  margin-bottom: 18px;

  @media ${t.tablet} {
    margin-bottom: 80px;
  }

  @media ${t.desktop} {
    display: flex;
    gap: 249px;
    margin-bottom: 100px;
  }
`,K=o.h2`
  font-size: 32px;
  font-weight: 600;
  line-height: 1.19;
  margin-bottom: 8px;
  color: ${({theme:e})=>e==="dark"?s.colors.main:n.colors.main};

  @media ${t.tablet} {
    font-size: 56px;
    line-height: 1.07;
  }

  @media ${t.desktop} {
    font-size: 64px;
  }
`,Q=o.p`
  color: ${({theme:e})=>e==="dark"?s.colors.transp:n.colors.transp};
  font-size: 12px;
  line-height: 1.17;
  margin-bottom: 20px;

  @media ${t.tablet} {
    font-size: 16px;
    line-height: 1.25;
  }
`,V=o.p`
  width: 335px;
  margin-bottom: 40px;
  color: ${({theme:e})=>e==="dark"?s.colors.main:n.colors.main};

  @media ${t.tablet} {
    width: 600px;
  }
`,X=o.button`
  position: relative;
  z-index: 1;

  display: flex;
  width: 222px;
  padding: 14px 40px;
  align-items: center;
  border-radius: 42px;
  background-color: ${({theme:e})=>e==="dark"?s.colors.main:n.background.lightBg};
  color: ${({theme:e})=>e==="dark"?s.background.main:n.background.main};
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
`,Z=o.img`
  width: 335px;
  height: 400px;

  @media ${t.tablet} {
    width: 704px;
    height: 400px;
  }

  @media ${t.desktop} {
    width: 400px;
  }
`,ee=o.ul`
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
`,te=o.li`
  width: 157px;
  height: 175px;
  @media ${t.tablet} {
    width: 220px;
    height: 258px;
  }
`,ie=o.div`
  border-radius: 8px;
  width: 157px;
  height: 157px;
  background-color: ${({theme:e})=>e==="dark"?s.colors.main:n.background.lightBg};
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
`,oe=o.img`
  width: 107px;
  height: 107px;
  @media ${t.tablet} {
    width: 175px;
    height: 175px;
  }
  @media ${t.desktop} {
  }
`,se=o.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`,S=o.p`
  font-size: 14px;
  line-height: 18px;
  color: ${({theme:e})=>e==="dark"?s.colors.main:n.colors.main};
  @media ${t.tablet} {
    font-size: 18px;
    line-height: 24px;
  }
  @media ${t.desktop} {
  }
`,ne=o(S)`
  color: ${({theme:e})=>e==="dark"?s.colors.transp:n.colors.transp};
`,re=o.h3`
  color: ${({theme:e})=>e==="dark"?s.colors.transp:n.colors.transp};
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
`,D=({ingredientsArray:e})=>{const d=x(j),l=T();p.useEffect(()=>{l(B())},[l]);const h=x(_),u=window.innerWidth<768,$=window.innerWidth>=768&&window.innerWidth<1440,m=a=>{if(h.length!==0)return h==null?void 0:h.find(g=>a.toLowerCase()===g.title.toLowerCase())[u?"thumbSmall":$?"thumbMedium":"ingredientThumb"]};return i.jsxs("div",{children:[i.jsx(re,{theme:d,children:"Ingredients"}),i.jsx(ee,{children:e==null?void 0:e.map(({title:a,measure:g})=>i.jsxs(te,{children:[i.jsx(ie,{children:i.jsx(oe,{src:m(a),alt:a})}),i.jsxs(se,{children:[i.jsx(S,{theme:d,children:a}),i.jsx(ne,{theme:d,children:g})]})]},a))})]})};D.propTypes={ingredientsArray:y.array};const ae="/project-drink-master/assets/three-cocktails-mobile@1x-Db068_xD.jpg",de="/project-drink-master/assets/three-cocktails@1x-TzhNJt-O.jpg",ce=o.div`
  display: flex;
  flex-direction: column-reverse;
  gap: 40px;
  @media ${t.tablet} {
  }
  @media ${t.desktop} {
    flex-direction: row;
    gap: 60px;
  }
`,pe=o.div`
  background: url(${ae});
  width: 335px;
  height: 430px;
  display: block;
  border-radius: 9px;
  background-size: cover;
  background-position: center;
  @media ${t.tablet} {
    background: url(${de});
    width: 704px;
    background-size: cover;
    border-radius: 10px;
  }
  @media ${t.desktop} {
    width: 631px;
    height: 480px;
  }
`,le=o.h3`
  font-size: 28px;
  font-weight: 600;
  line-height: 32px;
  margin-bottom: 40px;
  color: ${({theme:e})=>e==="dark"?s.colors.main:n.colors.main};
  @media ${t.tablet} {
    font-size: 40px;
    line-height: 44px;
  }
  @media ${t.desktop} {
    margin-bottom: 60px;
  }
`,he=o.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  color: ${({theme:e})=>e==="dark"?s.colors.main:n.colors.main};
  @media ${t.tablet} {
    font-size: 16px;
    font-weight: 400;
    line-height: 22px;
  }
  @media ${t.desktop} {
    width: 549px;
  }
`,F=({instructions:e})=>{const d=x(j);return i.jsxs("div",{children:[i.jsx(le,{theme:d,children:"Recipe Preparation"}),i.jsxs(ce,{children:[i.jsx(pe,{}),i.jsx(he,{theme:d,children:e})]})]})};F.propTypes={instructions:y.string};const xe="/project-drink-master/assets/Motivation-mob3@2x-1EibcH2o.jpg",me="/project-drink-master/assets/motivation3@2x-WSNNf0lv.jpg",ge="/project-drink-master/assets/Motivation-mob2@2x-i2WMUKAM.jpg",be="/project-drink-master/assets/motivation2@2x-3J2W25Lp.jpg",$e=()=>{const e=C.useMediaQuery({query:"(max-width: 767px)"}),[d,l]=p.useState(""),[h,u]=p.useState(!1),[$,m]=p.useState(""),a=()=>{u(!0)},g=()=>{u(!1)},c=x(j),{drinkId:f}=L(),b=T(),r=x(A),v=x(G),[w,M]=p.useState(!1),z=()=>{b(N(f)).then(k=>{const{sendFirstFavGreeting:E,sendTenthFavGreeting:P}=k.payload,W=E===!0,R=P===!0;W&&(a(),m("Wow! You have added the first recipe to your favorites!"),l(e?xe:me)),R&&(a(),m("Wow! You have added 10 recipes to your favorites!"),l(e?ge:be))}).catch(k=>{console.error("Error in addFavoriteDrinkThunk:",k)})},I=()=>{b(U(f))};return p.useEffect(()=>{b(O({page:1,itemsPerPage:1e3})),b(H(f)),window.scrollTo({top:0})},[b,f]),p.useEffect(()=>{M(!!(v!=null&&v.find(k=>k._id===r._id)))},[r,v]),i.jsxs(i.Fragment,{children:[i.jsx(J,{}),i.jsxs(q,{children:[i.jsxs("div",{children:[i.jsx(K,{theme:c,children:r.drink}),i.jsx(Q,{theme:c,children:`${r.glass} / ${r.alcoholic}`}),i.jsx(V,{theme:c,children:r.description}),i.jsx(X,{theme:c,onClick:w?I:z,children:w?"Remove from favorite drinks":"Add to favorite drinks"})]}),i.jsx(Z,{theme:c,src:r.drinkThumb})]}),i.jsx(D,{theme:c,ingredientsArray:r?r.ingredients:[]}),i.jsx(F,{theme:c,instructions:r.instructions}),i.jsx(Y,{isOpen:h,onClose:()=>{g(),m(""),l("")},message:$,background:d})]})};export{$e as default};
