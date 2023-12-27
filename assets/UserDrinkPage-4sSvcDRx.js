import{u as o,d as i,a as n,l as r,P as g,b as m,s as j,e as T,g as p,k as P,j as t,o as W,f as q,R as O,Q as H,S as N,T as U,U as _}from"./index-ivwcUfbZ.js";import{a as A,j as G,i as J}from"./selectors-qDc_-Qs5.js";import{C as K}from"./CircleBg-_gy3XouU.js";const Q=o.div`
  margin-bottom: 18px;

  @media ${i.tablet} {
    margin-bottom: 80px;
  }

  @media ${i.desktop} {
    display: flex;
    gap: 249px;
    margin-bottom: 100px;
  }
`,Y=o.h2`
  font-size: 32px;
  font-weight: 600;
  line-height: 1.19;
  margin-bottom: 8px;
  color: ${({theme:e})=>e==="dark"?n.colors.main:r.colors.main};

  @media ${i.tablet} {
    font-size: 56px;
    line-height: 1.07;
  }

  @media ${i.desktop} {
    font-size: 64px;
  }
`,X=o.p`
  color: ${({theme:e})=>e==="dark"?n.colors.transp:r.colors.transp};
  font-size: 12px;
  line-height: 1.17;
  margin-bottom: 20px;

  @media ${i.tablet} {
    font-size: 16px;
    line-height: 1.25;
  }
`,V=o.p`
  width: 335px;
  margin-bottom: 40px;
  color: ${({theme:e})=>e==="dark"?n.colors.main:r.colors.main};

  @media ${i.tablet} {
    width: 600px;
  }
`,Z=o.button`
  position: relative;
  z-index: 1;

  display: flex;
  width: 222px;
  padding: 14px 40px;
  align-items: center;
  border-radius: 42px;
  background-color: ${({theme:e})=>e==="dark"?n.colors.main:r.background.lightBg};
  color: ${({theme:e})=>e==="dark"?n.background.main:r.background.main};
  border: 1px solid rgba(243, 243, 243, 0.2);

  font-weight: 600;
  line-height: 1.29;
  transition: var(--tran-fast);
  margin-bottom: 80px;

  @media ${i.tablet} {
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
`,ee=o.img`
  width: 335px;
  height: 400px;

  @media ${i.tablet} {
    width: 704px;
    height: 400px;
  }

  @media ${i.desktop} {
    width: 400px;
  }
`,te=o.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 21px;
  padding-bottom: 80px;
  @media ${i.tablet} {
    gap: 22px;
  }
  @media ${i.desktop} {
    gap: 35px;
    padding-bottom: 100px;
  }
`,ie=o.li`
  width: 157px;
  height: 175px;
  @media ${i.tablet} {
    width: 220px;
    height: 258px;
  }
`,oe=o.div`
  border-radius: 8px;
  width: 157px;
  height: 157px;
  background-color: ${({theme:e})=>e==="dark"?n.colors.main:r.background.lightBg};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 8px;
  @media ${i.tablet} {
    width: 220px;
    height: 220px;
    margin-bottom: 14px;
  }
  @media ${i.desktop} {
  }
`,se=o.img`
  width: 107px;
  height: 107px;
  @media ${i.tablet} {
    width: 175px;
    height: 175px;
  }
  @media ${i.desktop} {
  }
`,ne=o.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`,S=o.p`
  font-size: 14px;
  line-height: 18px;
  color: ${({theme:e})=>e==="dark"?n.colors.main:r.colors.main};
  @media ${i.tablet} {
    font-size: 18px;
    line-height: 24px;
  }
  @media ${i.desktop} {
  }
`,re=o(S)`
  color: ${({theme:e})=>e==="dark"?n.colors.transp:r.colors.transp};
`,ae=o.h3`
  color: ${({theme:e})=>e==="dark"?n.colors.transp:r.colors.transp};
  font-size: 16px;
  line-height: 20px;
  margin-bottom: 42px;
  font-weight: 500;
  @media ${i.tablet} {
    font-size: 18px;
    line-height: 24px;
  }
  @media ${i.desktop} {
  }
`,D=({ingredientsArray:e})=>{const s=m(j),l=T();p.useEffect(()=>{l(P())},[l]);const x=m(A),d=window.innerWidth<768,u=window.innerWidth>=768&&window.innerWidth<1440,b=c=>{if(x.length!==0)return x==null?void 0:x.find(k=>c.toLowerCase()===k.title.toLowerCase())[d?"thumbSmall":u?"thumbMedium":"ingredientThumb"]};return t.jsxs("div",{children:[t.jsx(ae,{theme:s,children:"Ingredients"}),t.jsx(te,{children:e==null?void 0:e.map(({title:c,measure:k})=>t.jsxs(ie,{children:[t.jsx(oe,{children:t.jsx(se,{src:b(c),alt:c})}),t.jsxs(ne,{children:[t.jsx(S,{theme:s,children:c}),t.jsx(re,{theme:s,children:k})]})]},c))})]})};D.propTypes={ingredientsArray:g.array};const de="/project-drink-master/assets/three-cocktails-mobile@1x-Db068_xD.jpg",ce="/project-drink-master/assets/three-cocktails@1x-TzhNJt-O.jpg",pe=o.div`
  display: flex;
  flex-direction: column-reverse;
  gap: 40px;
  @media ${i.tablet} {
  }
  @media ${i.desktop} {
    flex-direction: row;
    gap: 60px;
  }
`,le=o.div`
  background: url(${de});
  width: 335px;
  height: 430px;
  display: block;
  border-radius: 9px;
  background-size: cover;
  background-position: center;
  @media ${i.tablet} {
    background: url(${ce});
    width: 704px;
    background-size: cover;
    border-radius: 10px;
  }
  @media ${i.desktop} {
    width: 631px;
    height: 480px;
  }
`,xe=o.h3`
  font-size: 28px;
  font-weight: 600;
  line-height: 32px;
  margin-bottom: 40px;
  color: ${({theme:e})=>e==="dark"?n.colors.main:r.colors.main};
  @media ${i.tablet} {
    font-size: 40px;
    line-height: 44px;
  }
  @media ${i.desktop} {
    margin-bottom: 60px;
  }
`,he=o.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  color: ${({theme:e})=>e==="dark"?n.colors.main:r.colors.main};
  @media ${i.tablet} {
    font-size: 16px;
    font-weight: 400;
    line-height: 22px;
  }
  @media ${i.desktop} {
    width: 549px;
  }
`,M=({instructions:e})=>{const s=m(j);return t.jsxs("div",{children:[t.jsx(xe,{theme:s,children:"Recipe Preparation"}),t.jsxs(pe,{children:[t.jsx(le,{}),t.jsx(he,{theme:s,children:e})]})]})};M.propTypes={instructions:g.string};const ge=o.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow-y: auto;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(1.5px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`,me=o.div`
  width: 375px;
  height: 812px;
  padding: 272px 38px 271px;
  background-repeat: no-repeat;
  background-size: cover;
  z-index: 1001;
  background-image: url(${e=>e.background||""});

  @media ${i.tablet} {
    width: 500px;
    height: 500px;
    padding: 218px 116px 40px;
    border-radius: 32px;
    background-image: url(${e=>e.background||""});
  }
`,ue=o.div`
  width: 299px;
  height: 269px;
  padding: 50px 30px 14px;
  background: rgba(217, 217, 217, 0.14);
  backdrop-filter: blur(27.976364135742188px);

  @media ${i.tablet} {
    width: 268px;
    height: 242px;
    padding: 32px 18px 14px;
  }
`,be=o.h2`
  text-align: center;
  font-size: 28px;
  font-weight: 500;
  line-height: 1.14em;
  letter-spacing: -0.56px;
  margin-bottom: 20px;
`,ke=o.button`
  width: 48px;
  height: 48px;
  padding: 10px;
  margin: 0 auto;
  border-radius: 58px;
  border: none;
  background: var(--black);
  display: flex;
  align-items: center;
  justify-content: center;
`,z=({isOpen:e,onClose:s,message:l,background:x})=>{const d=p.useCallback(u=>{u.key==="Escape"&&s()},[s]);return p.useEffect(()=>(e?(document.addEventListener("keydown",d),document.body.style.overflow="hidden"):(document.removeEventListener("keydown",d),document.body.style.overflow="auto"),()=>{document.removeEventListener("keydown",d),document.body.style.overflow="auto"}),[e,d]),e?t.jsx(t.Fragment,{children:t.jsx(ge,{onClick:s,children:t.jsx(me,{background:x,children:t.jsxs(ue,{children:[t.jsx(be,{children:l}),t.jsx(ke,{onClick:s,children:t.jsx("svg",{width:28,height:28,children:t.jsx("use",{href:`${W}#icon-X`,style:{stroke:"white"}})})})]})})})}):null};z.propTypes={isOpen:g.bool.isRequired,onClose:g.func.isRequired,message:g.string.isRequired,background:g.string.isRequired};const fe="/project-drink-master/assets/Motivation-mob3@2x-1EibcH2o.jpg",ve="/project-drink-master/assets/motivation3@2x-WSNNf0lv.jpg",we="/project-drink-master/assets/Motivation-mob2@2x-i2WMUKAM.jpg",ye="/project-drink-master/assets/motivation2@2x-3J2W25Lp.jpg",Se=()=>{const e=q.useMediaQuery({query:"(max-width: 767px)"}),[s,l]=p.useState(""),[x,d]=p.useState(!1),[u,b]=p.useState(""),c=()=>{d(!0)},k=()=>{d(!1)},h=m(j),{drinkId:w}=O(),f=T(),a=m(G),y=m(J),[$,F]=p.useState(!1),I=()=>{f(U(w)).then(v=>{const{sendFirstFavGreeting:R,sendTenthFavGreeting:C}=v.payload,B=R===!0,L=C===!0;B&&(c(),b("Wow! You have added the first recipe to your favorites!"),l(e?fe:ve)),L&&(c(),b("Wow! You have added 10 recipes to your favorites!"),l(e?we:ye))}).catch(v=>{console.error("Error in addFavoriteDrinkThunk:",v)})},E=()=>{f(_(w))};return p.useEffect(()=>{f(H({page:1,itemsPerPage:1e3})),f(N(w)),window.scrollTo({top:0})},[f,w]),p.useEffect(()=>{F(!!(y!=null&&y.find(v=>v._id===a._id)))},[a,y]),t.jsxs(t.Fragment,{children:[t.jsx(K,{}),t.jsxs(Q,{children:[t.jsxs("div",{children:[t.jsx(Y,{theme:h,children:a.drink}),t.jsx(X,{theme:h,children:`${a.glass} / ${a.alcoholic}`}),t.jsx(V,{theme:h,children:a.description}),t.jsx(Z,{theme:h,onClick:$?E:I,children:$?"Remove from favorite drinks":"Add to favorite drinks"})]}),t.jsx(ee,{theme:h,src:a.drinkThumb})]}),t.jsx(D,{theme:h,ingredientsArray:a?a.ingredients:[]}),t.jsx(M,{theme:h,instructions:a.instructions}),t.jsx(z,{isOpen:x,onClose:()=>{k(),b(""),l("")},message:u,background:s})]})};export{Se as default};
