import{u as o,d as t,a as s,l as n,P as y,b as l,s as j,e as T,g as p,m as B,j as i,f as C,S as O,R as H,T as N,U,V as _}from"./index-mfwUlT7G.js";import{a as A,j as G,i as J,e as Y}from"./selectors-QSo4Kgn-.js";import{C as q}from"./CircleBg-f6u2UAeC.js";import{M as K}from"./Modal-kqgKZ6eC.js";const Q=o.div`
  margin-bottom: 18px;

  @media ${t.tablet} {
    margin-bottom: 80px;
  }

  @media ${t.desktop} {
    display: flex;
    gap: 249px;
    margin-bottom: 100px;
  }
`,V=o.h2`
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
`,X=o.p`
  color: ${({theme:e})=>e==="dark"?s.colors.transp:n.colors.transp};
  font-size: 12px;
  line-height: 1.17;
  margin-bottom: 20px;

  @media ${t.tablet} {
    font-size: 16px;
    line-height: 1.25;
  }
`,Z=o.p`
  width: 335px;
  margin-bottom: 40px;
  color: ${({theme:e})=>e==="dark"?s.colors.main:n.colors.main};

  @media ${t.tablet} {
    width: 600px;
  }
`,ee=o.button`
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
`,te=o.img`
  width: 335px;
  height: 400px;
  object-fit: cover;

  @media ${t.tablet} {
    width: 704px;
    height: 400px;
  }

  @media ${t.desktop} {
    width: 400px;
  }
`,ie=o.ul`
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
`,oe=o.li`
  width: 157px;
  height: 175px;
  @media ${t.tablet} {
    width: 220px;
    height: 258px;
  }
`,se=o.div`
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
`,ne=o.img`
  width: 107px;
  height: 107px;
  @media ${t.tablet} {
    width: 175px;
    height: 175px;
  }
  @media ${t.desktop} {
  }
`,re=o.div`
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
`,ae=o(S)`
  color: ${({theme:e})=>e==="dark"?s.colors.transp:n.colors.transp};
`,de=o.h3`
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
`,D=({ingredientsArray:e})=>{const d=l(j),h=T();p.useEffect(()=>{h(B())},[h]);const x=l(A),u=window.innerWidth<768,$=window.innerWidth>=768&&window.innerWidth<1440,m=a=>{if(x.length!==0)return x==null?void 0:x.find(g=>a.toLowerCase()===g.title.toLowerCase())[u?"thumbSmall":$?"thumbMedium":"ingredientThumb"]};return i.jsxs("div",{children:[i.jsx(de,{theme:d,children:"Ingredients"}),i.jsx(ie,{children:e==null?void 0:e.map(({title:a,measure:g})=>i.jsxs(oe,{children:[i.jsx(se,{children:i.jsx(ne,{src:m(a),alt:a})}),i.jsxs(re,{children:[i.jsx(S,{theme:d,children:a}),i.jsx(ae,{theme:d,children:g})]})]},a))})]})};D.propTypes={ingredientsArray:y.array};const ce="/project-drink-master/assets/three-cocktails-mobile@1x-Db068_xD.jpg",pe="/project-drink-master/assets/three-cocktails@1x-TzhNJt-O.jpg",le=o.div`
  display: flex;
  flex-direction: column-reverse;
  gap: 40px;
  @media ${t.tablet} {
  }
  @media ${t.desktop} {
    flex-direction: row;
    gap: 60px;
  }
`,he=o.div`
  background: url(${ce});
  width: 335px;
  height: 430px;
  display: block;
  border-radius: 9px;
  background-size: cover;
  background-position: center;
  @media ${t.tablet} {
    background: url(${pe});
    width: 704px;
    background-size: cover;
    border-radius: 10px;
  }
  @media ${t.desktop} {
    width: 631px;
    height: 480px;
  }
`,xe=o.h3`
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
`,me=o.p`
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
`,F=({instructions:e})=>{const d=l(j);return i.jsxs("div",{children:[i.jsx(xe,{theme:d,children:"Recipe Preparation"}),i.jsxs(le,{children:[i.jsx(he,{}),i.jsx(me,{theme:d,children:e})]})]})};F.propTypes={instructions:y.string};const ge="/project-drink-master/assets/Motivation-mob3@2x-1EibcH2o.jpg",be="/project-drink-master/assets/motivation3@2x-WSNNf0lv.jpg",ke="/project-drink-master/assets/Motivation-mob2@2x-i2WMUKAM.jpg",ue="/project-drink-master/assets/motivation2@2x-3J2W25Lp.jpg",we=()=>{const e=C.useMediaQuery({query:"(max-width: 767px)"}),[d,h]=p.useState(""),[x,u]=p.useState(!1),[$,m]=p.useState(""),a=()=>{u(!0)},g=()=>{u(!1)},c=l(j),{drinkId:f}=O(),b=T(),r=l(G),v=l(J),M=l(Y),[w,z]=p.useState(!1),I=()=>{b(U(f)).then(k=>{const{sendFirstFavGreeting:P,sendTenthFavGreeting:W}=k.payload,L=P===!0,R=W===!0;L&&(a(),m("Wow! You have added the first recipe to your favorites!"),h(e?ge:be)),R&&(a(),m("Wow! You have added 10 recipes to your favorites!"),h(e?ke:ue))}).catch(k=>{console.error("Error in addFavoriteDrinkThunk:",k)})},E=()=>{b(_(f))};return p.useEffect(()=>{b(H({page:1,itemsPerPage:1e3})),b(N(f)),window.scrollTo({top:0})},[b,f]),p.useEffect(()=>{z(!!(v!=null&&v.find(k=>k._id===r._id)))},[r,v]),i.jsxs(i.Fragment,{children:[i.jsx(q,{}),i.jsxs(Q,{children:[i.jsxs("div",{children:[i.jsx(V,{theme:c,children:r.drink}),i.jsx(X,{theme:c,children:`${r.glass} / ${r.alcoholic}`}),i.jsx(Z,{theme:c,children:r.description}),i.jsx(ee,{theme:c,onClick:w?E:I,disabled:M,children:w?"Remove from favorite drinks":"Add to favorite drinks"})]}),i.jsx(te,{theme:c,src:r.drinkThumb})]}),i.jsx(D,{theme:c,ingredientsArray:r?r.ingredients:[]}),i.jsx(F,{theme:c,instructions:r.instructions}),i.jsx(K,{isOpen:x,onClose:()=>{g(),m(""),h("")},message:$,background:d})]})};export{we as default};
